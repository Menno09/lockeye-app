import Axios from 'axios'
import { getItem, StorageKeys } from '../helpers/Storage'
import API from './api'

class ProfileService {
  public profile = async () => {
    const response = await Axios.get(`${API.PROFILE}`)
    return response.data
  }
  public loaction = async (data: any) => {
    const config = {
      headers: {
        Authorization: `Token ${await getItem(StorageKeys.TOKEN)}`,
      },
    }
    try {
      const response = await Axios.post(`${API.LOCATION}`, data, config)
      console.log(response.status)
    } catch (e: any) {
      console.log(e.response.status)
    }
  }
}

export default new ProfileService()
