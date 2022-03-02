import { types, Instance, SnapshotIn } from 'mobx-state-tree'

const ActivitiesModel = types.model({
  name: types.string,
  risk: types.string,
  has_scaned: types.boolean,
  doorbell: types.boolean,
  door_unlocked: types.boolean,
  event_time: types.string,
  device_id: types.number,
  date_created: types.string,
})

// Creates type intsance of the ActivitiesModel
export interface ActivitiesModelInstance
  extends Instance<typeof ActivitiesModel> {}
// Creates snapshot of the ActivitiesModel
export interface ActivitiesModelSnapshot
  extends SnapshotIn<typeof ActivitiesModel> {}

export default ActivitiesModel
