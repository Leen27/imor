export interface IHooks {
    /**最开始 */
    start: () => any
    /**资源加载完毕 */
    loaded: () => any
    /**登录前 */
    beforeLogin: () => any
    /**登陆后 */
    login: () => any
    /**路由准备完毕 */
    router: () => any
    /**打开一个页面 */
    opened: () => any
    /**当前页面改变 */
    changed: () => any
    /**关闭一个页面 */
    closed: () => any
    /**捕获到异常 */
    error: () => any
}

export class Plugin {
    config: IHooks

    constructor(config: IHooks) {
        this.config = config
    }
}

export const createPlugin = (config: IHooks): Plugin => {
    return new Plugin(config)
}