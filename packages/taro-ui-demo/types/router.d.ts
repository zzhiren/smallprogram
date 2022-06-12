declare namespace Router {
  interface Router {

  }

  interface Route {
    name: string
    url: string
    tabBar?: boolean
    back?: boolean
    redirect?: string
    meta: {
      title: string,
      [propName: string]: any
    },
    query?: {
      [propName: string]: any
    },
    nav?: {
      background?: string
      color?: string
    }
  }

  interface RouteMap {
    [propName: string]: route
  }

  interface Options {
    name?: string
    url?: string
    type?: string // 默认''
    query?: {
      [propName: string]: any
    }
  }
}