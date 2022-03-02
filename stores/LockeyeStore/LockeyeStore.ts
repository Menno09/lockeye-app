import { Instance, flow, SnapshotIn, types } from 'mobx-state-tree'
import { LockeyeService } from '../../services'
import BaseStore from '../BaseStore'

import ActivitiesModel from './ActivitiesModel'

const LockeyeStore = BaseStore.props({
  activities: types.array(ActivitiesModel),
}).actions((self) => ({
  load: flow(function* load() {
    const [activitiesDevice] = yield Promise.all([LockeyeService.activities()])
    self.activities = activitiesDevice
  }),
  addLockeye: flow(function* addLockeye(name: string, device_number: string) {
    const data = {
      name: name,
      device_number: device_number,
      group: null,
    }
    yield LockeyeService.addLockeye(data)
  }),
}))
// Creates type intsance of the LockeyeStore
export interface LockeyeStoreInstance extends Instance<typeof LockeyeStore> {}
// Creates snapshot of the LockeyeStore
export interface LockeyeStoreSnapshot extends SnapshotIn<typeof LockeyeStore> {}

export default LockeyeStore
