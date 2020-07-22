import request from '@/utils/request'
export function orderlist(user, limit) {
    return request({
        url: 'https://elm.cangdu.org/bos/orders?offset=' + user + '&limit=' + limit,
        method: 'get'
    })
}