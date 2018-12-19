import 'jest-dom/extend-expect'
import React, { Fragment } from 'react'
import { render } from 'react-testing-library'

import 'react-testing-library/cleanup-after-each'

import { createSlots, SlotsProvider } from '../src'

test('[SlotsProvider] shows default value', () => {
  const Slots = createSlots('register')

  const tree = (
    <SlotsProvider>
      <Fragment>
        <Slots.Register.Provider value="Test" />
        <Slots.Register.Consumer>
          {value => <span>{value}</span>}
        </Slots.Register.Consumer>
      </Fragment>
    </SlotsProvider>
  )
  const { getByText } = render(tree)
  expect(getByText(/^Test/).textContent).toBe('Test')
})
