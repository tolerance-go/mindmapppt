import { RegisterOptions } from 'react-hook-form'
export const createHookFormRegisterOptions = (item: {
   required?: boolean
   maxLength?: number
   minLength?: number
   pattern?: {
      value: RegExp
      message: string
   }
}) => {
   const registerOptions: RegisterOptions = {
      required: item.required ? '此选项必须填写' : false,
      maxLength: item.maxLength
         ? {
              value: item.maxLength,
              message: `最长不超过 ${item.maxLength} 个字符`,
           }
         : undefined,
      minLength: item.minLength
         ? {
              value: item.minLength,
              message: `最短不少于 ${item.minLength} 个字符`,
           }
         : undefined,
      pattern: item.pattern ? item.pattern : undefined,
   }

   return registerOptions
}
