import { types, Instance, SnapshotIn } from 'mobx-state-tree'

import DeviceStore from './DeviceStore/DeviceStore'
import LockeyeStore from './LockeyeStore/LockeyeStore'
import UserStore from './UserStore/UserStore'

const RootStoreModel = types.model('RootStoreModel', {
  DeviceStore,
  UserStore,
  LockeyeStore,
})

const RootStore = RootStoreModel.create({
  DeviceStore: {},
  UserStore: {},
  LockeyeStore: {},
})
// Makes a type instance of the store 
export interface RootStoreModelInstance
  extends Instance<typeof RootStoreModel> {}
// Makes a type snapshot of the store 
export interface RootStoreModelSnapshot
  extends SnapshotIn<typeof RootStoreModel> {}

export { RootStore, RootStoreModel }
