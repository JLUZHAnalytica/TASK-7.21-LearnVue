import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/layout/index'
import login from '@/view/login/index'
import manage from '@/view/home/index'
import user from '@/view/user/index'
import  food_list  from '@/view/food_list'
import addgoods from '@/view/addgoods/index'
import orderlist from '@/view/order_list/index'    
import managerlist from '@/view/manage_list/index'     
import addfood_shop from '@/view/shop_list/dialog_addfood' 
import shop_list from '@/view/shop_list/index' 


Vue.use(Router)

/* Layout */
//懒加载 webpack
//const layout = r => require.ensure([], () => r(require('@/layout/index')), 'layout');


export const constantRoutes = [
    {
        path: '/login',
        component: login,
        // hidden: true
    },
    {
        path: '/',
        component: layout,
        children: [
            {
                path: '/manage',
                component: manage
            },
            {
                path: '/shop_list',
                component: shop_list
            },
            {
                path: '/user',
                component: user
            },
            {
                path: '/foodlist',
                component: food_list
            },
            {
                path:'/addgoods',
                component: addgoods
            },
            {
                path: '/orderlist',
                component: orderlist
            },
            {
                path:'/managerlist',
                component:managerlist
            },
            {
                path:'addfood_shop',
                component:addfood_shop
            }
            
        ]
        // hidden: true
    }
    //   {
    //     path:'/example',
    //     component:system
    //   }




]
//function（）

const createRouter = () => new Router({
    // mode: 'history', // require service support
    // scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})

const router = createRouter()

// export function resetRouter() {
//   const newRouter = createRouter()
//   router.matcher = newRouter.matcher // reset router
// }

export default router
