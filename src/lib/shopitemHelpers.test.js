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

test('findById should return the expected item from an array', () => {
  const startShopitems = [
    {id:1, name: 'one', isComplete: false},
    {id:2, name: 'two', isComplete: false},
    {id:3, name: 'three', isComplete: false}
  ]
  const expected = {id:2, name: 'two', isComplete: false}
  const result = findById(2, startShopitems)
  expect(result).toEqual(expected)
})

test('toggleShopitem should toggle the isComplete prop of a shopitem', () => {
  const startShopitem = {id:2, name: 'two', isComplete: false}
  const expected = {id:2, name: 'two', isComplete: true}
  const result = toggleShopitem(startShopitem)
  expect(result).toEqual(expected)
})

test('toggleShopitem should not mutate the original shopitem', () => {
  const startShopitem = {id:2, name: 'two', isComplete: false}
  const result = toggleShopitem(startShopitem)
  expect(result).not.toBe(startShopitem)
})

test('updateShopitem should update an item by id', () => {
  const startShopitems = [
    {id:1, name: 'one', isComplete: false},
    {id:2, name: 'two', isComplete: false},
    {id:3, name: 'three', isComplete: false}
  ]
  const updatedShopitem = {id:2, name: 'two', isComplete: true}
  const expectedShopitems = [
    {id:1, name: 'one', isComplete: false},
    {id:2, name: 'two', isComplete: true},
    {id:3, name: 'three', isComplete: false}
  ]

  const result = updateShopitem(startShopitems, updatedShopitem)

  expect(result).toEqual(expectedShopitems)
})

test('updateShopitem should not mutate the original array', () => {
  const startShopitems = [
    {id:1, name: 'one', isComplete: false},
    {id:2, name: 'two', isComplete: false},
    {id:3, name: 'three', isComplete: false}
  ]
  const updatedShopitem = {id:2, name: 'two', isComplete: true}

  const result = updateShopitem(startShopitems, updatedShopitem)

  expect(result).not.toBe(startShopitems)
})

test('removeShopitem should remove an item by id', () => {
  const startShopitems = [
    {id:1, name: 'one', isComplete: false},
    {id:2, name: 'two', isComplete: false},
    {id:3, name: 'three', isComplete: false}
  ]
  const targetId = 2
  const expectedShopitems = [
    {id:1, name: 'one', isComplete: false},
    {id:3, name: 'three', isComplete: false}
  ]
  const result = removeShopitem(startShopitems, targetId)

  expect(result).toEqual(expectedShopitems)
})

test('removeShopitem should not mutate the original array', () => {
  const startShopitems = [
    {id:1, name: 'one', isComplete: false},
    {id:2, name: 'two', isComplete: false},
    {id:3, name: 'three', isComplete: false}
  ]
  const targetId = 2
  const result = removeShopitem(startShopitems, targetId)

  expect(result).not.toBe(startShopitems)
})

test('filterShopitems should return all items for the root route', () => {
  const startShopitems = [
    {id:1, name: 'one', isComplete: false},
    {id:2, name: 'two', isComplete: true},
    {id:3, name: 'three', isComplete: false}
  ]

  const result = filterShopitems(startShopitems, '/')

  expect(result).toEqual(startShopitems)
})

test('filterShopitems should return only completed items for the complete route', () => {
  const startShopitems = [
    {id:1, name: 'one', isComplete: false},
    {id:2, name: 'two', isComplete: true},
    {id:3, name: 'three', isComplete: false}
  ]
  const expected = [
    {id:2, name: 'two', isComplete: true}
  ]

  const result = filterShopitems(startShopitems, '/complete')

  expect(result).toEqual(expected)
})

test('filterShopitems should return only incompleted items for the active route', () => {
  const startShopitems = [
    {id:1, name: 'one', isComplete: false},
    {id:2, name: 'two', isComplete: true},
    {id:3, name: 'three', isComplete: false}
  ]
  const expected = [
    {id:1, name: 'one', isComplete: false},
    {id:3, name: 'three', isComplete: false}
  ]

  const result = filterShopitems(startShopitems, '/active')

  expect(result).toEqual(expected)
})
