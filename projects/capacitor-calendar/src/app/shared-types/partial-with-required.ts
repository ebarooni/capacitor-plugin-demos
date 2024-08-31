export type PartialWithRequired<T, K extends keyof T> = Partial<T> & {
  [P in K]-?: T[P];
};
