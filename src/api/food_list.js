import request from '@/utils/request'
export function food_list(offset,limit,restaurant_id){
    return request({
        url:'/shopping/v2/foods?offset='+offset+'&limit='+limit+'&restaurant_id='+restaurant_id,
        method:'get',
    })
}
