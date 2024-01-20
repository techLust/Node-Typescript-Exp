import { Color } from "../types/types";

interface User<A> {
  name: string;
  age: number;
  isAdult: boolean;
  gender: Gender;
  address: A;
  favouriteColor: Color;
}

interface Student<A, L> extends User<A> {
  roleNum: number;
  languages: L;
}

interface Address {
  country: string;
  state: string;
  pin: number;
}

interface Address2 {
  country: string;
  state: string;
}

type Language = string[];

type Gender = string;

const user: Student<Address2, Language> = {
  name: "mahtab",
  age: 475,
  isAdult: true,
  gender: "f",
  address: {
    country: "india",
    state: "wb",
  },
  roleNum: 34,
  languages: ["js", "python"],
  favouriteColor: "blue",
};

const callMe = (x: number): number => {
  return 1 + x;
};

const a = callMe(4);
