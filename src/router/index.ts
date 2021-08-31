/*
 * @Description:index.ts
 * @CreatedBy:WebStorm
 * @Author: the-ruffian
 * @Date: 2021-08-30 21:55
 * @LastEditTime: 2021-8-30 23:02:04
 * @LastEditors: the-ruffian
*/

import {createRouter,createWebHistory} from "vue-router";

// createApp(Router)
// const router = createRouter({
//     history: createWebHashHistory(),
//     routes: [
//         {
//             path: '/',
//             component: () => import( '@/components/HelloWorld.vue')
//         }
//     ]
// })
// export default router
export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('../components/HelloWorld.vue')
        }
    ]
})