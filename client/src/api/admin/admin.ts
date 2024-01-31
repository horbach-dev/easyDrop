import { TUserStore } from '$types/stores/userStore'
import { axiosClient } from '$api/index'

const GetUsers = (page = 0, searchText = '', searchColumn = '') => {
  // const [access] = useStore(UserStore, store => store.accessToken)
  return axiosClient.get<TUserStore>('/api/users',
    {
      withCredentials: true,
      params: {
        page,
        searchText,
        searchColumn
      }
    }).catch()
}

const Login = (data: { username: string, password: string }) => axiosClient.post<{
  user: TUserStore
}>('/api/auth/signin', data, { withCredentials: true }).catch()

export default {
  getUsers: GetUsers,
  login: Login
}
