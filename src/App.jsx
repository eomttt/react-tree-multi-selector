import React, { useState } from 'react';

import MultiSelector from './components/MultiSelector';
import MultiSelectorInput from './components/MultiSelectorInput';
import TestMultiCategories, { initialSelectedIds, exceptionIds, notSelectionIds } from './dummy/MultiSelectorItem';

const App = () => {
  const handleSelectedCategories = (selectedIdListOnlyParent, selectedIdList) => {
    console.log('selectedIdListOnlyParent', selectedIdListOnlyParent);
    console.log('selectedIdList', selectedIdList);
  }

  return (
    <MultiSelector
      categories={TestMultiCategories}
      initialSelectedIds={initialSelectedIds}
      exceptionIds={exceptionIds}
      notSelectionIds={notSelectionIds}
      handleSelectedCategories={handleSelectedCategories}
    >
      <MultiSelectorInput />
    </MultiSelector>
  )
};

export default App;