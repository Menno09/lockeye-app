import { Instance, flow, SnapshotIn, types } from 'mobx-state-tree'
import { AuthService, ProfileService } from '../../services'
import BaseStore from '../BaseStore'

import ProfileModel from './ProfileModel'

const UserStore = BaseStore.props({
  profile: types.maybeNull(ProfileModel),
}).actions((self) => ({
   // laod the data form this store 
  load: flow(function* load() {
    const [profile] = yield Promise.all([ProfileService.profile()])
    self.profile = profile
  }),
  // Login with code actions 
  login: flow(function* login(pincode: string, mobile_id: string | null) {
    const data = {
      pincode: pincode,
      mobile_id: mobile_id,
    }

    yield AuthService.login(data)
  }),
    // Login with email and password actions 
  loginEmail: flow(function* loginEmail(username, password) {
    const data = {
      username: username,
      password: password,
    }

    // yield AuthService.loginEmail(data)
  }),
  // Register actions 
  register: flow(function* register(
    email: string,
    password: string,
    name: string,
    pincode: string,
    mobile_id: string | null
  ) {
    const data = {
      username: name,
      password: password,
      email: email,
      profile: {
        pincode: pincode,
        mobile_id: mobile_id,
      },
    }
    yield AuthService.register(data)
  }),
}))

// Creates type intsance of the UserStore
export interface UserStoreInstance extends Instance<typeof UserStore> {}
// Creates snapshot of the UserStore
export interface UserStoreSnapshot extends SnapshotIn<typeof UserStore> {}

export default UserStore
