import {addShopitem} from './shopitemHelpers'

test('addShopitem should add the passed shopitem to the list', () => {
  const startShopitems = [
    {id:1, name: 'one', isComplete: false},
    {id:2, name: 'two', isComplete: false}
  ]
  const newShopitem = {id:3, name: 'three', isComplete: false}
  const expected = [
    {id:1, name: 'one', isComplete: false},
    {id:2, name: 'two', isComplete: false},
    {id:3, name: 'three', isComplete: false}
  ]

  const result = addShopitem(startShopitems, newShopitem)

  expect(result).toEqual(expected)
})


test('addShopitem should not mutate the existing shopitem array', () => {
  const startShopitems = [
    {id:1, name: 'one', isComplete: false},
    {id:2, name: 'two', isComplete: false}
  ]
  const newShopitem = {id:3, name: 'three', isComplete: false}
  const expected = [
    {id:1, name: 'one', isComplete: false},
    {id:2, name: 'two', isComplete: false},
    {id:3, name: 'three', isComplete: false}
  ]

  const result = addShopitem(startShopitems, newShopitem)

  expect(result).not.toBe(startShopitems)

})
