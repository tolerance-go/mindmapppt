export type ReplaceItem<O, K extends keyof O, Next> = Omit<O, K> & {
   [k in K]: Next
}
