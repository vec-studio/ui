type OmitWithSubstring<T extends object, S extends string> = {
  [K in keyof T as Exclude<K, `${string}${S}${string}`>]: T[K]
}
