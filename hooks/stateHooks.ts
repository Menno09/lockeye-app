import { useContext, useEffect } from 'react'
import { RootStoreContext, RootStoreInstance } from '../stores'
import { LockeyeStoreInstance } from '../stores/LockeyeStore/LockeyeStore'
import { UserStoreInstance } from '../stores/UserStore/UserStore'

export const useStores = (): RootStoreInstance => useContext(RootStoreContext)

// Before screen renders the the store starts loadig 
const useStore = (storeString: keyof RootStoreInstance) => {
  const stores = useStores()
  const store = stores[storeString]

  useEffect(() => {
    if (store.loadingState === 'EMPTY' || 'LOADING') {
      store.startup()
    }
  }, [stores])

  return store
}
// Starts loading user store
export const useUser = (): UserStoreInstance => {
  const store = useStore('UserStore')

  return store
}

// Starts loading device store
export const useLockeye = (): LockeyeStoreInstance => {
  const store = useStore('LockeyeStore')

  return store
}
