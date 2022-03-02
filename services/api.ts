const config = {
  ip: '192.168.1.214',
  port: 8000,
}

export const baseUrl = `http://${config.ip}:${config.port}/`

const API = {
  /// Auth
  LOGIN: baseUrl + 'logincode/',
  REGISTER: baseUrl + 'register/',
  // GET UserProfile
  PROFILE: baseUrl + 'profile/',
  // POST Conect device to user
  ADD_LOCKEYE: baseUrl + 'device/add',
  // GET Activities from user
  ACTIVITIES: baseUrl + 'device/activities',
  // POST Sent loaction of user
  LOCATION: baseUrl + 'location/user',
}

export default API
