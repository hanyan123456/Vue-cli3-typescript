/*
 * @Author: 寒嫣
 * @Date: 2019-10-23 12:12:26
 * @Description: file content
 */
import { MutationTree } from 'vuex'
const mutations: MutationTree<any> = {
    SET_USER(state: any, user: any): void {
        state.user = user
        // console.log(state.user)
    },
    SET_ROUTERS(state: any, routers: any): void {
        state.routers = routers
        // console.log(state.user)
    }
}
export default mutations