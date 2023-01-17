export const insertStyle = (content: string, id?: string) => {
   const head = document.head || document.getElementsByTagName('head')[0]

   const style = document.createElement('style')
   style.type = 'text/css'
   style.textContent = content
   if (id) {
      style.id = id
   }
   head.appendChild(style)
}
