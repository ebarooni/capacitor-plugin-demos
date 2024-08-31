export type PartialWithRequiredAndOptionalExcluded<
  T,
  K extends keyof T,
  E extends keyof T = never,
> = Partial<T> & { [P in K]-?: T[P] } & (E extends never
    ? {}
    : { [P in E]?: never });
