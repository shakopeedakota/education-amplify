import { clsx, type ClassValue } from "clsx"
import { FirebaseError } from "firebase/app";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const STATES_LIST: {[key:string]: string} = {
  AL: "Alabama",
  AK: "Alaska",
  AZ: "Arizona",
  AR: "Arkansas",
  CA: "California",
  CO: "Colorado",
  CT: "Connecticut",
  DE: "Delaware",
  FL: "Florida",
  GA: "Georgia",
  HI: "Hawaii",
  ID: "Idaho",
  IL: "Illinois",
  IN: "Indiana",
  IA: "Iowa",
  KA: "Kansas",
  KY: "Kentucky",
  LA: "Louisiana",
  ME: "Maine",
  MD: "Maryland",
  MA: "Massachusetts",
  MI: "Michigan",
  MN: "Minnesota",
  MS: "Mississippi",
  MO: "Missouri",
  MT: "Montana",
  NE: "Nebraska",
  NV: "Nevada",
  NH: "New Hampshire",
  NJ: "New Jersey",
  NM: "New Mexico",
  NY: "New York",
  NC: "North Carolina",
  ND: "North Dakota",
  OH: "Ohio",
  OK: "Oklahoma",
  OR: "Oregon",
  PA: "Pennsylvania",
  RI: "Rhode Island",
  SC: "South Carolina",
  SD: "South Dakota",
  TN: "Tennessee",
  TX: "Texas",
  UT: "Utah",
  VT: "Vermont",
  VA: "Virginia",
  WA: "Washington",
  WV: "West Virginia",
  WI: "Wisconsin",
  WY: "Wyoming"
}

export function getFirebaseErrorMessage(err: FirebaseError) {
  switch (err.code) {
    case "auth/email-already-exists":
    case "auth/email-already-in-use":
      return "Email already used."
    default:
      return "Oops! Something went wrong. Please try again.";
  }
}

export function parseFormData(formData: FormData) {
  const tempObj = {} as {[key: string]: string | FormDataEntryValue};

  for (const pair of formData.entries()) {
    tempObj[pair[0]] = pair[1];
  }

  return tempObj;
}

export function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

export const validateField = (field: EventTarget & HTMLInputElement) => {
  if (field.required && field.value == '') {
    const errors ={};
    addFieldErrors(field, errors);
  } else {
    clearFieldErrors(field);
  }
}

const clearFieldErrors = (field: EventTarget & HTMLInputElement) => {
  field.closest('.form-control')?.classList.remove('error');
}

const addFieldErrors = (
  field: EventTarget & HTMLInputElement,
  errors: {[key: string]: unknown | undefined | null}
) => {
  field.closest('.form-control')?.classList.add('error');
  console.log(errors);
}

export function getPreviousProperty(obj: { [key: string]: unknown }, currentKey: string): unknown {
  const keys = Object.keys(obj);
  const currentIndex = keys.indexOf(currentKey);

  if (currentIndex <= 0) {
    return undefined;
  }

  const previousKey = keys[currentIndex - 1];
  return obj[previousKey];
}

export function getNextProperty(obj: { [key: string]: unknown }, currentKey: string): unknown {
  const keys = Object.keys(obj);
  const currentIndex = keys.indexOf(currentKey);

  if (currentIndex >= keys.length) {
    return undefined;
  }

  const nextKey = keys[currentIndex + 1];
  return obj[nextKey]
}