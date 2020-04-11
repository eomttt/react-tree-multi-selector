import React, { memo, useEffect, useState } from 'react';

import MultiSelectorItem, { IS_SELECTED_KEY } from './MultiSelectorItem';

const MultiSelector = ({ children,
  categories, initialSelectedIds,
  notSelectionIds, exceptionIds,
  handleSelectedCategories,
}) => {
  const [selectedCategories, setSelectedCategories] = useState(null);

  // useEffect(() => {
  //   const selectedCategory = {};

  //   if (initialSelectedIds.length > 0) {
  //     categories.forEach((category) => {
  //       selectedCategory[category.id] = {};

  //       const isIncludeSelectedId = initialSelectedIds.includes(category.id);
  //       const selectedSubCategory = getSubSelectedSubCategory(category, selectedCategory[category.id], isIncludeSelectedId);

  //       selectedCategory[category.id] = {
  //         [IS_SELECTED_KEY]: isIncludeSelectedId,
  //         ...selectedSubCategory,
  //       };
  //     });
  //   }

  //   // setSelectedCategories(selectedCategory);
  // }, [initialSelectedIds]);

  const getSubSelectedSubCategory = (
      category,
      selectedCategoryInfo,
      isSelectedByParent,
  ) => {
    if (category.subCategory) {
      category.subCategory.forEach((subCategory) => {
        const isSelected = isSelectedByParent || initialSelectedIds.includes(subCategory.id);

        selectedCategoryInfo[subCategory.id] = {
          [IS_SELECTED_KEY]: isSelected,
        };
        return getSubSelectedSubCategory(subCategory, selectedCategoryInfo[subCategory.id], isSelected);
      });
    }
    return selectedCategoryInfo;
  };

  const getSelectedCategoryIdsOnlyParent = (categoryList, selectedIdList) => {
    if (categoryList) {
      Object.keys(categoryList).forEach((categoryKey) => {
        if (categoryList[categoryKey].isSelected && !notSelectionIds.includes(+categoryKey)) {
          selectedIdList.push(+categoryKey);
        } else {
          return getSelectedCategoryIdsOnlyParent(categoryList[categoryKey], selectedIdList);
        }
      });
    }

    return selectedIdList;
  };

  const getSelectedCategoryIds = (categoryList, selectedIdList) => {
    if (categoryList) {
      Object.keys(categoryList).forEach((categoryKey) => {
        if (categoryList[categoryKey].isSelected && !notSelectionIds.includes(+categoryKey)) {
          selectedIdList.push(+categoryKey);
        }
        return getSelectedCategoryIds(categoryList[categoryKey], selectedIdList);
      });
    }
    return selectedIdList;
  };

  const handleChange = (categoryList) => {
    const selectedIdListOnlyParent = getSelectedCategoryIdsOnlyParent(categoryList, []);
    const selectedIdList = getSelectedCategoryIds(categoryList, []);
    handleSelectedCategories(selectedIdListOnlyParent, selectedIdList);
    // setSelectedCategories(categoryList);
  };

  return (
    <MultiSelectorItem
      categories={categories}
      selectedCategories={[]}
      exceptionIds={exceptionIds}
      notSelectionIds={notSelectionIds}
      onChange={handleChange}
    >
      {children}
    </MultiSelectorItem>
  )
};

export default memo(MultiSelector);