export const compose = (...functions) => functions.reduce((a, b) => (...args) => a(b(...args)), (arg) => arg);
