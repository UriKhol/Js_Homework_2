function calculator(func, num1, num2) {
    return func(num1, num2)
}

console.log(calculator((num1, num2) => num1 / num2, 10, 2))