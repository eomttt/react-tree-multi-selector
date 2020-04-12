import React from 'react';

const MultiSelectorInput = ({
    id, content, isCanSelect, isSelected, toggleCategory,
}) => {
  return (
    <>
    {
      isCanSelect
      ? <div className="multi-selector-category-item onclick-cursor-pointer"
          onClick={() => toggleCategory && toggleCategory(id)}>
          <input type="checkbox" readOnly checked={isSelected} />
          <label>
            <span>
            </span>
          </label>
          {content}
      </div>
      : <div className="multi-selector-category-item">{content}</div>
    }
    </>
  );
};
export default MultiSelectorInput;