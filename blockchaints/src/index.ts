interface Human {
  // 오직 TS에서만 가능하다. JS에서는 작동하지 않는다.
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: "heyyyy",
  gender: "male",
  age: 22,
};

const sayHi = (person: Human): string => {
  // const sayHi = (name: string, age: number, gender: string): string => {
  // 끝에 ?가 붙으면 선택임을 알려준다. (예시: gender?)
  // JS와는 다르게 TS는 파라미터 값에 문제가 생길 경우 에러가 난다.
  // return `Hello ${name}, you are ${age}, you are a ${gender}`;
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};

console.log(sayHi(person));
// console.log(sayHi("heyyyy", 24, "male"));

export {};
