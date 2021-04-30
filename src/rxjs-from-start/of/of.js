import { createObservable } from "../create-observable/create-observable.solution-a";

export function of(...args) {
  const observable = createObservable((subscriber) => {
    for (let val of args) {
      subscriber.next(val);
    }
    subscriber.complete();
  });

  return observable;
}
