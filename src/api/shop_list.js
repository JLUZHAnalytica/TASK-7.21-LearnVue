import request from "@/utils/request"
export function shopApi(latitude,longitude){
    return request({
        url:"/shopping/restaurants?latitude="+latitude+"&longitude="+longitude,
        method:"get",
    })
}
