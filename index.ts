import { of } from 'rxjs/observable/of';
import { range } from 'rxjs/observable/range';
import { repeat } from 'rxjs/operators';
import { interval } from 'rxjs/observable/interval';
import { takeWhile, take } from 'rxjs/operators';

const testSrc$2 = range(1, 4);
const testSrc$ = interval(500).pipe(take(4));
const pipedSrc$ = testSrc$.pipe(repeat(2));
pipedSrc$.subscribe(
  result => {
    if (result === 1) {
      console.log('11111');
    } else {
      console.log('not 1');
    }
  },
  error => console.error(error),
  () => console.log('completed!')
);
/*
() => {
  if (result === 1) {
    console.log('11111');
  } else {
    console.log('not 1');
  }
};
*/
