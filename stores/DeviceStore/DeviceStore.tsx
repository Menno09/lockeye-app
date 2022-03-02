import { Instance, flow, SnapshotIn, types } from 'mobx-state-tree'
import { LocationObject } from 'expo-location'
import LocationModel from './LocationModel'
import { ProfileService } from '../../services'

const DeviceStore = types
  .model({
    hasValidAccessToken: false,
    hasLocationPermission: false,
    hasLoaded: false,
    currentLocation: types.maybeNull(types.frozen(LocationModel)),
  })
  .actions(() => ({
    // get the current location of the device and send it to the backend 
    SetLoaction: flow(function* loginEmail(loaction: LocationObject) {
      const data = {
        latitude: loaction.coords.latitude,
        longitude: loaction.coords.longitude,
      }

      yield ProfileService.loaction(data)
    }),
  }))
// Creates type intsance of the DeviceStore
export interface DeviceStoreInstance extends Instance<typeof DeviceStore> {}
// Creates snapshot of the DeviceStore
export interface DeviceStoreSnapshot extends SnapshotIn<typeof DeviceStore> {}

export default DeviceStore
