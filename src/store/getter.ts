/*
 * @Author: 寒嫣
 * @Date: 2019-10-23 12:12:12
 * @Description: file content
 *
 */
import { GetterTree } from 'vuex'
const getters: GetterTree<any, any> = {
    user(state: any): any {
        // console.log(state.user)
        return state.user
    },
    routers(state: any): any {
        // console.log(state.user)
        return state.routers
    }
}
export default getters