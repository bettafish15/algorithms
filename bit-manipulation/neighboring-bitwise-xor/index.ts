function doesValidArrayExist(derived: number[]): boolean {
  return !derived.reduce((acc,cur) => acc ^ cur);
};
