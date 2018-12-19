import 'jest-dom/extend-expect'
import React, { Fragment } from 'react'
import { render } from 'react-testing-library'

import 'react-testing-library/cleanup-after-each'

import ComponentLifecycle from '../src/ComponentLifecycle'

test('[ComponentLifecycle] invoke componentDidMount', () => {
  const componentDidMount = jest.fn()

  render(
    <ComponentLifecycle
      componentDidMount={componentDidMount}
    />
  )

  expect(componentDidMount).toHaveBeenCalled()
})

test('[ComponentLifecycle] invoke componentWillUnmount', () => {
  const componentWillUnmount = jest.fn()
  const { unmount } = render(
    <ComponentLifecycle
      componentWillUnmount={componentWillUnmount}
    />
  )

  unmount()

  expect(componentWillUnmount).toHaveBeenCalled()
})
