import React from 'react';

import MultiSelector from './components/MultiSelector';
import MultiSelectorInput from './components/MultiSelectorInput';
import dummyCategories, { dummyInitial, dummyExceptions, dummyNotSelections } from './dummy/MultiSelectorItem';

const App = ({ 
  categories = dummyCategories,
  initialIds = dummyInitial,
  exceptionIds = dummyExceptions,
  notSelectionIds = dummyNotSelections,
  selectedCategoriesCallback,
}) => {
  const handleSelectedCategories = (selectedIdListOnlyParent, selectedIdList) => {
    console.log('[MULTI_SELECT]selectedIdListOnlyParent', selectedIdListOnlyParent);
    console.log('[MULTI_SELECT]selectedIdList', selectedIdList);
    selectedCategoriesCallback && selectedCategoriesCallback(selectedIdListOnlyParent, selectedIdList)
  }

  console.log(categories, initialIds, exceptionIds, notSelectionIds, handleSelectedCategories)

  return (
    <MultiSelector
      categories={categories}
      initialSelectedIds={initialIds}
      exceptionIds={exceptionIds}
      notSelectionIds={notSelectionIds}
      handleSelectedCategories={handleSelectedCategories}
    >
      <MultiSelectorInput />
    </MultiSelector>
  )
};

export default App;