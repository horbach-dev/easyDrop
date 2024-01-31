import { TUserStore } from '$types/stores/userStore'
import { axiosClient } from '$api/index'

const GetUser = () => {
  return axiosClient.get<TUserStore>('/api/user', { withCredentials: true }).catch()
}

const GetUserById = (id: string) => {
  return axiosClient.get<TUserStore>(`/api/user/${id}`, { withCredentials: true }).catch()
}

const Login = (data: {username: string, password: string}) => {
  return  axiosClient.post('/api/auth/signin', data, { withCredentials: true }).catch()
}

const CreateUser = (data: {username: string, password: string}) => {
  return axiosClient.post('/api/auth/signup', data, { withCredentials: true }).catch()
}

const UpdateUser = (data: any) => {
  return axiosClient.put(`/api/user/${data.id}`, data, { withCredentials: true }).catch()
}

export default {
  getUser: GetUser,
  getUserById: GetUserById,
  login: Login,
  createUser: CreateUser,
  updateUser: UpdateUser
}
