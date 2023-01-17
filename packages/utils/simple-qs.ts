export const stringify = (obj: Record<string, string>) => {
   return Object.entries(obj)
      .map(([key, val]) => {
         return `${key}=${val}`
      })
      .join('&')
}

export const parse = (qs: string) => {
   return Object.fromEntries(qs.split('&').map((item) => item.split('=')))
}

const qs = {
   stringify,
   parse,
}

export default qs
