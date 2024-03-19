import axios from 'axios'

/* export default axiosAdapter = () => {
    postAdapter:(url:string) => {
        axios.post('')
    }
} */

export const AxiosAdapter  = {
  postAdapter: async (url:string,postFields:Object,headers:Object) => {

    axios.post(url,postFields,headers)
    return 'CALL POSTww'
    //axios.post('/')
  }
}