import Axios from 'axios'
import { setItem, StorageKeys } from '../helpers/Storage'
import API from './api'

class AuthService {
  public login = async (data: any) => {
    const response = await Axios.post(`${API.LOGIN}`, data)
    return setItem(StorageKeys.TOKEN, response.data.token)
  }
  public register = async (data: any) => {
    const response = await Axios.post(`${API.REGISTER}`, data)
    return setItem(StorageKeys.TOKEN, response.data.token)
  }
}

export default new AuthService()
