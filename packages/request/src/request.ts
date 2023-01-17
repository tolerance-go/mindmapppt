import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

const codeMessage = {
   200: '服务器成功返回请求的数据。',
   201: '新建或修改数据成功。',
   202: '一个请求已经进入后台排队（异步任务）。',
   204: '删除数据成功。',
   400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
   401: '用户没有权限（令牌、用户名、密码错误）。',
   403: '用户得到授权，但是访问是被禁止的。',
   404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
   406: '请求的格式不可得。',
   410: '请求的资源被永久删除，且不会再得到的。',
   422: '当创建一个对象时，发生一个验证错误。',
   500: '服务器发生错误，请检查服务器。',
   502: '网关错误。',
   503: '服务不可用，服务器暂时过载或维护。',
   504: '网关超时。',
}

export type Request = <T = any, R = AxiosResponse<T>, D = any>(
   url: string,
   config?: AxiosRequestConfig<D>,
) => Promise<R>

export const request: Request = async <T = any, R = AxiosResponse<T>, D = any>(
   url: string,
   config?: AxiosRequestConfig<D>,
): Promise<R> => {
   try {
      return await axios<T, R, D>(url, {
         method: 'GET',
         ...config,
      })
   } catch (error) {
      if (axios.isAxiosError(error)) {
         /** 来自服务器内部自定义的错误内容打印 */
         if (
            error.response?.data &&
            typeof error.response?.data === 'object' &&
            error.response?.data.error
         ) {
            if (typeof error.response?.data.error === 'string') {
               throw new Error(error.response?.data.error)
            }
         }

         if (error.response?.status) {
            const msg = (codeMessage as Record<string, string>)[
               error.response.status
            ]
            if (msg) {
               throw new Error(msg)
            }
         }
         throw new Error(error.message)
      } else {
         throw new Error('抱歉，发生未知网络错误')
      }
   }
}
