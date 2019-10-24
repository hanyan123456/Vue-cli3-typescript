/*
 * @Author: 寒嫣
 * @Date: 2019-10-23 12:12:33
 * @Description: file content
 */
import { ActionTree } from 'vuex'
import jwt_decode from 'jwt-decode';

const action: ActionTree<any, any> = {
    async setUser({ state, commit }, user: any) {
        // 解析用户信息
        const decode: any = jwt_decode(user)
        commit('SET_USER', decode)
    }
}
export default action