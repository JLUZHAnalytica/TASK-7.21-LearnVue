import request from '@/utils/request'
export function login(data) {
    return request({
        url: "/admin/login",
        method: "post",
        data: data
    })
}
export function userlist(offset,limit) {
    return request({
        url:'https://elm.cangdu.org/v1/users/list?offset'+offset+'&limit='+limit,
        method:'get'
    })
}