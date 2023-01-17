class DumpClass {}

const MyCustomEvent = (
   typeof window === 'undefined' ? DumpClass : CustomEvent
) as {
   new <T>(
      type: string,
      eventInitDict?: CustomEventInit<T> | undefined,
   ): CustomEvent<T>
   prototype: CustomEvent<any>
}

export class SelfCustomEvent<T> extends MyCustomEvent<T> {
   constructor(eventName: string, detail?: T) {
      super(eventName, {
         detail,
      })
      process.env.NODE_ENV === 'development' &&
         console.log('监听到事件:', eventName, detail)
   }
}
