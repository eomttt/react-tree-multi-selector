# react-tree-multi-selector

## Installation
> $ npm i react-tree-multi-selector

## Usage
```js
import ReactTreeMultiSelector from 'react-tree-multi-selector'
import {
  dummyCategories,
  dummyInitial,
  dummyExceptions,
  dummyNotSelections,
  dummySelectedCategoryCallback,
} from './dummyData';

const App = () => {
  return (
    <ReactTreeMultiSelector
      categories={dummyCategories}
      initialSelectedIds={dummyInitial}
      exceptionIds={dummyExceptions}
      notSelectionIds={dummyNotSelections}
      handleSelectedCategories={dummySelectedCategoryCallback}
    />
  )
}
```

## Dummy data
```js
// dummyData.js
export const dummyCategories = [
  {
    id: 1,
    title: '1',
    subCategory: [
      {
        id: 11,
        title: '1-1',
        subCategory: [
          {
            id: 111,
            title: '1-1-1',
          },
          {
            id: 112,
            title: '1-1-2',
          },
          {
              id: 113,
              title: '1-1-3',
          }
        ]
      },
      {
        id: 12,
        title: '1-2',
        subCategory: [
          {
            id: 121,
            title: '1-2-1',
          },
          {
            id: 122,
            title: '1-2-2',
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: '2',
    subCategory: [
      {
        id: 21,
        title: '2-1',
        subCategory: [
          {
            id: 211,
            title: '2-1-1',
            subCategory: [],
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: '3',
    subCategory: []
  }
]

export const dummyInitial = [];
export const dummyExceptions = [];
export const dummyNotSelections = [];

export const dummySelectedCategoryCallback = (selectedIdListOnlyParent, selectedIdList) => {
  console.log('[MULTI_SELECT]selectedIdListOnlyParent', selectedIdListOnlyParent);
  console.log('[MULTI_SELECT]selectedIdList', selectedIdList);
}
```

## [Demo](https://eomttt.github.io/demo-module/#/tree-multi-selector)

[Demo code](https://github.com/eomttt/demo-module)

Before select
![](https://hyuntaeeom-personal.s3.ap-northeast-2.amazonaws.com/README/multi-select-before.png)

After select
![](https://hyuntaeeom-personal.s3.ap-northeast-2.amazonaws.com/README/multi-select.png)

## Types
### Category
- id: number ***(unique key)***
- title: string
- subCategory: Category[]


## Props

| Prop  | Type  | Default | Description |
|:--------- | :---- | :----   |:----  |
| `categories` | `Category[]` | `[]` | Category list |
| `initialIds` | `number[]` | `[]` | Initial selected category ids |
| `exceptionIds` | `number[]` | `[]` | Disable show category ids in tree |
| `notSelectionIds` | `number[]` | `[]` | Disable select category ids in tree |
|`selectedCategoriesCallback` | `function` | `(selectedIdListOnlyParent, selectedIdList) => {}` | `selectedIdListOnlyParent`: Selected category id list only parent <br/> `selectedIdList`: Selected all category id list|

## Licence

[MIT]