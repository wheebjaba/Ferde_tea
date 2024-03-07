// Greeting
function greet(name) {
    return "common, " + name + "!";
}

// Adding two numbers
function add(a, b) {
    return a + b;
}

// Subtracting one number from another
function subtract(a, b) {
    return a - b;
}

// Multiplying two numbers
function multiply(a, b) {
    return a * b;
}

// Dividing the first number by the second
function divide(a, b) {
    if (b === 0) {
        return "Division by zero is not possible!";
    } else {
        return a / b;
    }
}

// Function calls
console.log(greet("World"));
console.log("Sum of 5 and 3:", add(5, 3));
console.log("Difference between 10 and 7:", subtract(10, 7));
console.log("Product of 4 and 6:", multiply(4, 6));
console.log("Division of 20 by 4:", divide(20, 4))