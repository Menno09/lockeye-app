import { types, Instance, SnapshotIn } from 'mobx-state-tree'

const LocationModel = types.model({
  lat: types.number,
  long: types.number,
})

export interface LocationModelInstance extends Instance<typeof LocationModel> {}
export interface LocationModelSnapshot
  extends SnapshotIn<typeof LocationModel> {}

export default LocationModel
