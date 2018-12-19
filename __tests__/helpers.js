import { upper } from '../src/helpers'

test('[helpers] upper first char', () => {
  expect(upper('nav')).toBe('Nav')
})
