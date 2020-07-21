import request from '@/utils/request'
export function login(data) {
    return request({
        url: "/admin/login",
        method: "post",
        data: data
    })
}
export function shopApi(latitude,longitude){
    return request({
        url:"/shopping/restaurants?latitude="+latitude+"&longitude="+longitude,
        method:"get",
    })
}

