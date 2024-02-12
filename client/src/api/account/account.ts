import { axiosClient } from '$api/index'

const GetAccounts = (page = 0, projectId: string) => {
  return axiosClient.get(`/api/accounts/${projectId}`,
    {
      withCredentials: true,
      params: {
        page,
      }
    }).catch()
}

const GetUserAccounts = () => {
  return axiosClient.get('/api/accounts',
    {
      withCredentials: true,
    }).catch()
}

const CreateAccount = (data: { projectId: string, wallet: string, runs: number }) => {
  return axiosClient.post(
    '/api/account',
    data,
    {
      withCredentials: true,
    }).catch()
}

const UpdateAccount = (data: { id: string, wallet: string, runs: number }) => {
  return axiosClient.put(
    `/api/account/${data.id}`,
    data,
    {
      withCredentials: true,
    }).catch()
}

export default {
  getAccounts: GetAccounts,
  createAccount: CreateAccount,
  updateAccount: UpdateAccount,
  getUserAccounts: GetUserAccounts,
}
