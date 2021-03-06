import { Array2DTracer, LogTracer } from 'algorithm-visualizer';

const n = 7;
const A = new Array(n);
for (let i = n - 1; i >= 0; i--) {
  A[i] = new Array(n);
}

for (let i = n - 1; i >= 0; i--) {
  for (let j = n - 1; j >= 0; j--) {
    A[i][j] = 0;
  }
}

const tracer = new Array2DTracer('Magic Square').set(A);
const logTracer = new LogTracer('Console').delay();

let i = Math.floor(n / 2);
let j = n - 1;

for (let num = 1; num <= n * n;) {
  logTracer.print(`i = ${i}`);
  logTracer.print(`j = ${j}`);

  if (i === -1 && j === n) {
    j = n - 2;
    i = 0;

    logTracer.print('Changing : ');
    logTracer.print(`i = ${i}`);
    logTracer.print(`j = ${j}`);
  } else {
    if (j === n) {
      j = 0;
      logTracer.print(`Changing : j = ${j}`);
    }
    if (i < 0) {
      i = n - 1;
      logTracer.print(`Changing : i = ${i}`);
    }
  }

  if (A[i][j] > 0) {
    logTracer.print(`Cell already filled : Changing i = ${i} j = ${j}`);
    j -= 2;
    i++;
  } else {
    A[i][j] = num++;
    tracer.patch(i, j, A[i][j]).delay();
    tracer.depatch(i, j);
    tracer.select(i, j).delay();
    j++;
    i--;
  }
}

logTracer.print(`Magic Constant is ${n * (n * n + 1) / 2}`);
