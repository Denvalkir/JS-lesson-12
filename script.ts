function identify<T extends string | number>(value: T): T {
  return value;
}

const result1 = identify("Hello, World!");
const result2 = identify(42);
