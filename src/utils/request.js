//先引入axios
import axios from 'axios'
// import {Message} from 'element-ui'
// import router from '../router'

const service = axios.create({
    //baseUrl:
    baseURL: "https://elm.cangdu.org",
    timeout: 5000
})
/**请求拦截
 * 比如：有些请求是需要用户登陆之后才能访问
 * post请求：我们需要对数据做一个处理；序列化我们的数据，
 * 在发送请求拦截之前，做我们想要做的操作
 * 
 */
service.interceptors.request.use(
    config => {
        //登陆之前判断有没有cookie 
        //给头部增加cookie；
        // const token=localStrage.getItem('cookie');
        //config.headers.Authorization='token'
        return config
    },
    error => {
        console.log(error);
        return Promise.reject(error)
    }
)
/**响应拦截 
 * 响应拦截==：服务器返回给我们的数据
 * 我们在拿到之前可以进行一些处理，比如：后台返回状态码200，则正常返回数据
 * 否则错误的状态码 我们需要在前端提示
 * 主要做了：进行错误的统一处理，和没有登陆，登陆过期后调整到登陆页面的一个操作
 * 
*/
// service.interceptors.response.use(
//     response=>{
//         const res=response.data;
//         console.log(res)
//         // if(res.status==200){
//         //     return Promise.resolve(response)
//         // }else{
//         //     return Promise.reject(response)
//         // }

//     },
//     error =>{
//         console.log('err'+error);
//         // switch(error.response.status){
//         //     //401 未登陆
//         //     //未登陆 需要跳转到登陆页面，并且携带当前页面的路径
//         //     //在登陆成功之后，返回到当前页，这一步是需要在登陆页操作
//         //     case 401:
//         //         router.replace({
//         //             path:'/login',
//         //             query:{
//         //                 redirect: router.currentRoute.fullPath
//         //             }
//         //         })
//         //         break;
//         //      case 402:
//         //         Message({
//         //             message:error.message,
//         //             type:'error',
//         //             duration:5*1000
//         //         })
//         //      break;
//         //      return Promise.reject(error)
//         // }
//     }
// )
export default service