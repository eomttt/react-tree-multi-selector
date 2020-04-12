import React from 'react';

import MultiSelector from './components/MultiSelector';
import MultiSelectorInput from './components/MultiSelectorInput';
import {
  dummyCategories,
  dummyInitial,
  dummyExceptions,
  dummyNotSelections,
  dummySelectedCategoryCallback,
} from './dummy/MultiSelectorItem';

import './App.css';

const App = ({ 
  categories = dummyCategories,
  initialIds = dummyInitial,
  exceptionIds = dummyExceptions,
  notSelectionIds = dummyNotSelections,
  handleSelectedCategories = dummySelectedCategoryCallback,
}) => {
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