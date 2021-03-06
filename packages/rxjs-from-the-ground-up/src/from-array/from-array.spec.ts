import { solutions } from "./solutions";

function runSpecs(fromArray) {
  describe("fromArray", () => {
    test("create observable that emit the given array as separated values", (done) => {
      const numbers$ = fromArray([1, 2, 3, 4, 5]);

      let results = [];

      numbers$.subscribe({
        next: (val) => {
          results = [...results, val];
        },
        error: () => {},
        complete: () => {
          expect(results).toEqual([1, 2, 3, 4, 5]);
          done();
        },
      });
    });
  });
}

solutions.forEach((fromArray) => runSpecs(fromArray));
