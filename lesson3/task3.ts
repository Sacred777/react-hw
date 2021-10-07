// Task 1.
function concat(str1: string, str2: string): string {
  return str1 + str2;
};

console.log(concat('Hello', 'World'));

// Task 2.
interface MyHometask {
  howIDoIt: string;
  simeArray: [string, string, number];
  withData: [{ howIDoIt: string; simeArray: [string, number] }];
};

const myHometask: MyHometask = {
  howIDoIt: "I Do It Wel",
  simeArray: ["string one", "string two", 42],
  withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
};

// Task 3.
interface MyArray<T> {
  [N: number]: T;
  reduce(fn: (accumulator: T, value: T, index: number, array: T[]) => T, initialValue: T): T;
}

const myArray: MyArray<number> = [1, 2, 3, 4];
let x = myArray[0];
console.log(x);
const initialValue = 0;
let y = myArray.reduce((accumulator, value) => accumulator + value, initialValue);
console.log(y);

// Task 4.
interface IHomeTask {
  data: string;
  numbericData: number;
  date: Date;
  externalData: {
      basis: number;
      value: string;
  }
}

const homeTask: MyPartial<IHomeTask> = {
  externalData: {
      value: 'win'
  }
}

type MyPartial<T> = {
  [N in keyof T]?: T[N] extends object ? MyPartial<T[N]> : T[N]
}
