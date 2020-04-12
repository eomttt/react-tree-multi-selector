import React, { memo } from 'react';

export const IS_SELECTED_KEY = 'isSelected';

const MultiSelectorItem = ({
  children,
  categories = [],
  selectedCategories = null,
  exceptionIds,
  notSelectionIds,
  onChange,
}) => {
  const handleSubCategoryListChange = (categoryId, selectedSubCategoryInfo) => {
    let isSelectedCategory = true;
    categories.some((category) => {
      if (category.id === categoryId) {
        const subCategoryIds = category.subCategory && category.subCategory.map(subCategory => subCategory.id) || [];
        const selectedSubCategoryIds = Object.keys(selectedSubCategoryInfo);

        subCategoryIds.some((subCategoryId) => {
          if (!selectedSubCategoryIds.includes(String(subCategoryId)) || !!!selectedSubCategoryInfo[subCategoryId].isSelected) {
            isSelectedCategory = false;
            return true;
          }
          return false;
        });
        return true;
      }
      return false;
    });

    // add sub selections to current optionId
    const newSelectedCategories = {
      ...selectedCategories,
      [categoryId]: {
        ...selectedSubCategoryInfo,
        [IS_SELECTED_KEY]: isSelectedCategory,
      },
    };

    // call onChange function given by parent
    onChange(newSelectedCategories);
  };

  const toggleCategory = (categoryId) => {
    // is currently selected
    if (isSelected(categoryId)) {
      // remove selected key from options list
      const newSelectedCategories = selectedCategories && Object.keys(selectedCategories).reduce((acc, key) => {
        if (key !== IS_SELECTED_KEY && +key !== categoryId) {
          acc[key] = {
            ...selectedCategories[key],
          };
        }
        return acc;
      }, {});
      
      onChange(newSelectedCategories);
  } else { // is not currently selected
      let selectedCategory = null;
      let selectedChildCategory = {};

      categories.some((category) => {
        if (category.id === categoryId) {
          selectedCategory = { ...category };
          selectedChildCategory = getChildSelectedCategory(selectedCategory, {});
          return true;
        }
        return false;
      });

      const newSelectedCategories = {
        ...selectedCategories,
        [categoryId]: {
          ...selectedChildCategory,
          [IS_SELECTED_KEY]: true,
        },
      };

      // call onChange function given by parent
      onChange(newSelectedCategories);
    }
  };

  const getChildSelectedCategory = (category, selectedObj) => {
    if (category.subCategory) {
      category.subCategory.forEach((subCategory) => {
        selectedObj[subCategory.id] = {
          [IS_SELECTED_KEY]: true,
        };
        return getChildSelectedCategory(subCategory, selectedObj[subCategory.id]);
      });
    }
    return selectedObj;
  };

  const isSelected = (categoryId) => {
    if (selectedCategories && selectedCategories[categoryId]) {
      return !!selectedCategories[categoryId].isSelected;
    }
    return false;
  };

  return (
    <>
    {
      categories.map((category) => {
        return (
          <React.Fragment key={category.id}>
            {
              (!exceptionIds.includes(category.id)) && React.cloneElement(children, {
                toggleCategory,

                content: category.title,
                id: category.id,
                isCanSelect: !notSelectionIds.includes(category.id),
                isSelected: isSelected(category.id),
              })
            }
            <div className="multi-selector-subcategory-container">
            {
              category.subCategory && category.subCategory.length > 0 &&
              <MultiSelectorItem
                categories={category.subCategory}
                selectedCategories={selectedCategories && selectedCategories[category.id]}
                exceptionIds={exceptionIds}
                notSelectionIds={notSelectionIds}
                onChange={(subCategory) =>
                    handleSubCategoryListChange(category.id, subCategory)
                }
              >
                {children}
              </MultiSelectorItem>
            }
            </div>
          </React.Fragment>
        );
      })
    }
    </>
  );
};

export default memo(MultiSelectorItem);
