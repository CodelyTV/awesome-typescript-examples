interface sayHiToIsma {
  (name: string): string;
}

type sayHiToJavi = (name: string) => string;

const sayHiToIsma: sayHiToIsma = (name: string) => {
  return `Hello Isma, my name is ${name}`;
};

const sayHiToJavi: sayHiToJavi = function (name) {
  return `Hello Javi, my name is ${name}`;
};
