export type XmindNode = {
   id: string
   children?: {
      attached?: XmindNode[]
      detached?: XmindNode[]
   }
}

export type AttachedNode = {
   id: string
   title?: string
   notes?: {
      realHTML?: {
         content: string
      }
      plain?: {
         content: string
      }
   }
   labels?: string[]
   href?: string
   markers?: { markerId: string }[]
   image?: {
      src: string
   }
   children?: {
      attached?: AttachedNode[]
   }
}

export type DetachedNode = {
   id: string
   title?: string
   position?: {
      x: number
      y: number
   }
   children?: {
      attached?: AttachedNode[]
   }
}

export type XmindContent = [
   {
      id: string
      coreVersion: string
      rootTopic: {
         id: string
         title?: string
         children?: {
            attached?: AttachedNode[]
            detached?: DetachedNode[]
         }
      }
   },
]
