export type MMData = {
   id: string
   /** 图片 */
   imgUrls?: string[]
   /** 节点文本 */
   title?: string
   /** 子标题 */
   subTitle?: string
   /** 描述 */
   content?: string
   /** html 版本的内容 */
   contentHTML?: string
   /** 链接 */
   links?: string[]
   /** 标签 */
   tags?: string[]
   /** 公式 */
   formulas?: string[]
   /** 公式 */
   codes?: string[]
   /** 文本绘图 */
   textCharts?: string[]
   /** 引用 */
   refs?: string[]
   /** 视频 */
   videoUrls?: string[]
   children?: MMData
}[]
