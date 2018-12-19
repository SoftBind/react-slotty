import { createSlots } from '../src'

test('[createSlots] allow to pass any arguments', () => {
  const Slots = createSlots('title', 'nav')

  expect(Slots).toHaveProperty('Title')
  expect(Slots).toHaveProperty('Nav')
})

test('[createSlots] allow to pass array', () => {
  const Slots = createSlots(['title', 'nav', 'navTitle'])

  expect(Slots).toHaveProperty('Title')
  expect(Slots).toHaveProperty('Nav')
  expect(Slots).toHaveProperty('NavTitle')
})
