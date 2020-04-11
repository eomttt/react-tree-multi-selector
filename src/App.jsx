import React from 'react';

import MultiSelector from './components/MultiSelector';
import MultiSelectorInput from './components/MultiSelectorInput';
import dummyCategories, { dummyInitial, dummyExceptions, dummyNotSelections } from './dummy/MultiSelectorItem';

const App = ({ 
  children,
  categories = dummyCategories,
  initialIds = dummyInitial,
  exceptionIds = dummyExceptions,
  notSelectionIds = dummyNotSelections,
  selectedCategoriesCallback,
}) => {
  const handleSelectedCategories = (selectedIdListOnlyParent, selectedIdList) => {
    console.log('[MULTI_SELECT]selectedIdListOnlyParent', selectedIdListOnlyParent);
    console.log('[MULTI_SELECT]selectedIdList', selectedIdList);
  }

  return (
    <MultiSelector
      categories={categories}
      initialSelectedIds={initialIds}
      exceptionIds={exceptionIds}
      notSelectionIds={notSelectionIds}
      handleSelectedCategories={selectedCategoriesCallback ? selectedCategoriesCallback : handleSelectedCategories}
    >
      {children ? children : <MultiSelectorInput />}
    </MultiSelector>
  )
};

export default App;