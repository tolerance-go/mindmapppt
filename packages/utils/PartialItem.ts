export type PartialItem<T, E extends keyof T> = Omit<T, E> & Partial<Pick<T, E>>
