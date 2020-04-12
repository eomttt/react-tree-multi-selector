import React from 'react';

import MultiSelector from './components/MultiSelector';
import MultiSelectorInput from './components/MultiSelectorInput';

import './App.css';

const App = ({ 
  categories = [],
  initialIds = [],
  exceptionIds = [],
  notSelectionIds = [],
  handleSelectedCategories,
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