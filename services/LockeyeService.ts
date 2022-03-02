import Axios from 'axios'
import { getItem, StorageKeys } from '../helpers/Storage'
import API from './api'

class LockeyeService {
  public addLockeye = async (data: any) => {
    const config = {
      headers: {
        Authorization: `Token ${await getItem(StorageKeys.TOKEN)}`,
      },
    }
    try {
      const response = await Axios.post(`${API.ADD_LOCKEYE}`, data, config)
      console.log(response.status)
    } catch (e: any) {
      console.log(e.response.status)
    }
  }
  public activities = async () => {
    const response = await Axios.get(`${API.ACTIVITIES}`)
    return response.data
  }
}

export default new LockeyeService()
