const myName: string = "Seoyeon";
const myAge: number = -Infinity;
const isBorn: boolean = false;
let whenDidSheBorn: number | null = null;
const dinnerMenu: any = NaN;

console.log(
  `${myName} is ${myAge} old, so if you ask if she is born, it's ${isBorn}.`
);

const findOutWhenDidSheBorn = (): number => 1998;

whenDidSheBorn = findOutWhenDidSheBorn(); // Oh Nooooo

// dinnerMenu.toLowerCase(); // UpperCase for NaN lol
