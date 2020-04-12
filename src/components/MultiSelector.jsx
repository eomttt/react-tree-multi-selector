import React, { memo } from 'react';

import MultiSelectorItem, { IS_SELECTED_KEY } from './MultiSelectorItem';

class MultiSelector extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    selectedCategories: [],
  };

  shouldComponentUpdate(nextProps, nextState) {
    const { initialSelectedIds, categories } = nextProps;
    const selectedCategory = {};

    if (initialSelectedIds.length > 0) {
      categories.forEach((category) => {
        selectedCategory[category.id] = {};

        const isIncludeSelectedId = initialSelectedIds.includes(category.id);
        const selectedSubCategory = this.getSubSelectedSubCategory(category, selectedCategory[category.id], isIncludeSelectedId);

        selectedCategory[category.id] = {
          [IS_SELECTED_KEY]: isIncludeSelectedId,
          ...selectedSubCategory,
        };
      });
      this.setState({
        selectedCategories, 
      })
    }

    return true;
  }

  getSubSelectedSubCategory = (
    category,
    selectedCategoryInfo,
    isSelectedByParent,
  ) => {
    if (category.subCategory) {
      category.subCategory.forEach((subCategory) => {
        const isSelected = isSelectedByParent || this.props.initialSelectedIds.includes(subCategory.id);

        selectedCategoryInfo[subCategory.id] = {
          [IS_SELECTED_KEY]: isSelected,
        };
        return this.getSubSelectedSubCategory(subCategory, selectedCategoryInfo[subCategory.id], isSelected);
      });
    }
    return selectedCategoryInfo;
  };


  getSelectedCategoryIdsOnlyParent = (categoryList, selectedIdList) => {
    if (categoryList) {
      Object.keys(categoryList).forEach((categoryKey) => {
        if (categoryList[categoryKey].isSelected && !this.props.notSelectionIds.includes(+categoryKey)) {
          selectedIdList.push(+categoryKey);
        } else {
          return this.getSelectedCategoryIdsOnlyParent(categoryList[categoryKey], selectedIdList);
        }
      });
    }

    return selectedIdList;
  };

  getSelectedCategoryIds = (categoryList, selectedIdList) => {
    if (categoryList) {
      Object.keys(categoryList).forEach((categoryKey) => {
        if (categoryList[categoryKey].isSelected && !this.props.notSelectionIds.includes(+categoryKey)) {
          selectedIdList.push(+categoryKey);
        }
        return this.getSelectedCategoryIds(categoryList[categoryKey], selectedIdList);
      });
    }
    return selectedIdList;
  };

  handleChange = (categoryList) => {
    const selectedIdListOnlyParent = this.getSelectedCategoryIdsOnlyParent(categoryList, []);
    const selectedIdList = this.getSelectedCategoryIds(categoryList, []);
    this.props.handleSelectedCategories(selectedIdListOnlyParent, selectedIdList);
    this.setState({
      selectedCategories: categoryList,
    })
  };

  render() {
    const {
      selectedCategories,
    } = this.state;
    const {
      children,
      categories, exceptionIds, notSelectionIds,
    } = this.props;

    return (
      <div className="multi-selector-container">
        <MultiSelectorItem
          categories={categories}
          selectedCategories={selectedCategories}
          exceptionIds={exceptionIds}
          notSelectionIds={notSelectionIds}
          onChange={this.handleChange}
        >
          {children}
        </MultiSelectorItem>
      </div>
    )
  }
}

export default memo(MultiSelector);