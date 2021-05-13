import axios from 'axios'

export default () => {
  const axiosInstance = axios.create({
    baseURL: `http://pb-backend-lb-30e3b7a2fe04ab9c.elb.eu-west-3.amazonaws.com/v1`
  })

  const token = localStorage.getItem('token')
  if (token) {
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`
  }

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.status === 401) {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        location.reload()
      }
      return Promise.reject(error)
    }
  )

  return axiosInstance
}
