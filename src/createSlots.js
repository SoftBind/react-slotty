import React from 'react';

import ComponentLifecycle from './ComponentLifecycle';
import { SlotsConsumer } from './Context';
import { upper } from './helpers'

const slotCreator = ({ slotName }) => ({
  Provider: ({ value, noUnmount }) => (
    <SlotsConsumer>
      {({ setSlot }) => (
        <ComponentLifecycle
          componentDidMount={() => setSlot({ value, slotName })}
          componentWillUnmount={() =>
            !noUnmount && setSlot({ value: undefined, slotName })
          }
        />
      )}
    </SlotsConsumer>
  ),
  Consumer: ({ children }) => (
    <SlotsConsumer>
      {props => children(props[slotName])}
    </SlotsConsumer>
  )
});

export const createSlots = (...slots) =>
  [].concat(...slots).reduce(
    (acc, slotName) => ({
      ...acc,
      [upper(slotName)]: slotCreator({ slotName })
    }),
    {}
  );
