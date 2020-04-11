const dummyCategories = [
  {
    id: 1,
    title: '1',
    subCategory: [
      {
        id: 11,
        title: '11',
        subCategory: [
          {
            id: 111,
            title: '111',
          },
          {
            id: 112,
            title: '112',
          },
          {
              id: 113,
              title: '113',
          }
        ]
      },
      {
        id: 12,
        title: '12',
        subCategory: [
          {
            id: 121,
            title: '121',
          },
          {
            id: 122,
            title: '122',
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
        title: '21',
        subCategory: [
          {
            id: 211,
            title: '211',
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

export default dummyCategories;