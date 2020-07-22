import request from '@/utils/request'

export function managerlist(offset, limit) {
    return request({
        url: 'https://elm.cangdu.org/admin/all?offset' + offset + '&limit=' + limit,
        method: 'get'
    })
}
