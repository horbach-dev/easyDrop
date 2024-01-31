import { axiosClient } from '$api/index'

import { TUserStore } from '$types/stores/userStore'

const GetUserProjects = (userId: string, page = 0) => {
  return axiosClient.get<TUserStore>(`/api/projects/${userId}`, {
    withCredentials: true,
    params: {
      page,
    }
  }).catch()
}

const GetUserProjectsWithDetails = (userId: string, page = 0) => {
  return axiosClient.get<TUserStore>(`/api/projects/${userId}`, {
    withCredentials: true,
    params: {
      page,
      details: true
    }
  }).catch()
}

const GetUserProjectById = (id: string, page = 0) => {
  return axiosClient.get<TUserStore>(`/api/project/${id}`, {
    withCredentials: true,
    params: {
      page,
    }
  }).catch()
}

const GetProjectsDetails = (page = 0) => {
  return axiosClient.get<TUserStore>('/api/projects-details', {
    withCredentials: true,
    params: {
      page,
    }
  }).catch()
}

const GetProjectDetailsById = (id: string) => {
  return axiosClient.get<TUserStore>(`/api/project-details/${id}`, {
    withCredentials: true,
  }).catch()
}

const UpdateProjectDetails = (data: any) => {
  return axiosClient.put(`/api/project-details/${data.id}`, data, { withCredentials: true }).catch()
}

const CreateUserProject = (userId: string, data: any) => {
  return axiosClient.post(`/api/project/${userId}`, data, { withCredentials: true }).catch()
}

const UpdateUserProject = (data: any) => {
  return axiosClient.put(`/api/project/${data.id}`, data, { withCredentials: true }).catch()
}

export default {
  getUserProjects: GetUserProjects,
  createUserProject: CreateUserProject,
  updateUserProject: UpdateUserProject,
  getUserProjectById: GetUserProjectById,
  getProjectsDetails: GetProjectsDetails,
  getProjectDetailsById: GetProjectDetailsById,
  updateProjectDetails: UpdateProjectDetails,
  getUserProjectsWithDetails: GetUserProjectsWithDetails
}
