export namespace TaroRouter {
  interface Router {
    push: (options: Options) => void
    back: () => void
    getRoute: () => RouteInfo
  }
  interface Route {
    name: string
    url: string
    tabBar?: boolean
    back?: boolean
    redirect?: string
    meta: {
      title: string,
      [key: string]: any
    },
    query?: {
      [key: string]: any
    },
    nav?: {
      background?: string
      color?: string
    }
  }

  interface RouteInfo extends TaroRouter.Route {
    navigationBarTitleText: string
    query: {
      [key: string]: any
    }
  }

  interface RouteMap {
    [key: string]: Route
  }

  interface Options {
    name?: string
    url?: string
    type?: string // 默认''
    query?: {
      [key: string]: any
    }
  }
}



export default class Router {
  /**
   * 路由数组
   * @private
   */
  private routes: TaroRouter.Route[];
  /**
   * 路由name，url映射路由对象
   * @private
   */
  private routeMap: TaroRouter.RouteMap;
  /**
   * 调用该函数保存当前激活的页面
   * @private
   */
  public active: string;
  constructor(routes: TaroRouter.Route[], active: string, setActive: () => void);

  /**
   * 路由跳转
   * @param options
   */
  push(options: TaroRouter.Options): void;

  /**
   * 路由返回
   */
  back(): void;

  /**
   * 缓存激活路由
   */
  setActive(active: string): void;

  /**
   * get 获取当前路由对象数据
   */
  getRoute(): TaroRouter.RouteInfo;
}

