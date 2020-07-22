import request from '@/utils/request'
export function addcategory(name, description, restaurant_id) {
    return request({
        url: "/shopping/addcategory",
        method: "post",
        data: {
            name: name,
            description: description,
            restaurant_id: restaurant_id
        }
    })
}

export function addfood(
    restaurant_id,
    category_id,
    name,
    image_path,
    specs,
    description,
    activity,
    attributes) {
    return request({
        url: "/shopping/addfood",
        method: "post",
        data: {
            restaurant_id: restaurant_id,
            category_id: category_id,
            name: name,
            image_path: image_path,
            specs: specs,
            description: description,
            activity: activity,
            attributes: attributes
        }
    })
}