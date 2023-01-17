export type RequireItem<T, E extends keyof T> = Omit<T, E> &
   Required<Pick<T, E>>
