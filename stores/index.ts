import { useContext, createContext } from 'react'
import { Instance } from 'mobx-state-tree'
import { RootStoreModel, RootStore } from './RootStore'

export { default as UserStore } from './UserStore/UserStore'

export interface RootStoreInstance extends Instance<typeof RootStoreModel> {}

export const RootStoreContext = createContext(RootStore)
export const RootStoreProvider = RootStoreContext.Provider
export const useStores = (): RootStoreInstance => useContext(RootStoreContext)
