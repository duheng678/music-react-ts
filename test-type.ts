interface IFnCall {
  <DH>(fn: () => DH, age: number): DH
}

const foo: IFnCall = function (fn, age) {
  return fn()
}
foo<string>(() => '1s', 3)
