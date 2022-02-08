export {};
const sky: string = "Awesome";

const foo1 = (): string => "Hi";

const winter = (): void => console.log("zz");

let arr: number[] = [1, 2, 3];
let arr2: Array<number> = [4, 5, 5];

let arr3: boolean[] = [true];
let arr4: Array<string> = ["lite"];
let arr5: (string | number)[] = [1, 2, 3];

let a6: string[] = ["a", "b"];
let obj1: { a: string; b?: number } = { a: "s" };
obj1.a = "100";

let obj3: { a: number; b: string } = { a: 10, b: "sdsd" } as const;
obj3.b = "100";

const v: string = "Seoul";
