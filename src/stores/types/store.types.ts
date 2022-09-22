import { flow as _flow } from 'mobx-state-tree';
// @ts-ignore
import { FlowReturnType } from 'mobx-state-tree/dist/core/flow';

export type Flow = <T extends Promise<any>, R, Args extends any[]>(
  generator: (...args: Args) => Generator<T, R, T extends Promise<infer Y> ? Y : never>,
) => (...args: Args) => Promise<FlowReturnType<R>>;

export const flow = _flow as Flow;
