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