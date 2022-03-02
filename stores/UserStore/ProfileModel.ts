import { types, Instance, SnapshotIn } from 'mobx-state-tree'

const ProfileModel = types.model({
  user: types.string,
  group: types.string,
  first_name: types.string,
  last_name: types.string,
  mobile_id: types.string,
  device: types.string,
})
// Creates type intsance of the ProfileModel
export interface ProfileModelModelInstance
  extends Instance<typeof ProfileModel> {}
// Creates snapshot of the ProfileModel
export interface ProfileModelSnapshot extends SnapshotIn<typeof ProfileModel> {}

export default ProfileModel
