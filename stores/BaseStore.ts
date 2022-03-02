import { flow, types } from 'mobx-state-tree'

// This is a base store that will be extended by every store so every store has a statup action
const BaseStore = types
  .model({
    loadingState: types.optional(
      types.enumeration(['EMPTY', 'LOADING', 'DONE']),
      'EMPTY'
    ),
  })
  .actions((self) => ({
    startup: flow(function* () {
      self.loadingState = 'LOADING'
      yield self.load()

      self.loadingState = 'DONE'
    }),
  }))

export default BaseStore
