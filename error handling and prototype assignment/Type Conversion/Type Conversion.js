function convertToNumber(inputString) {
    try {
        // Attempt to convert the string to a number
        const result = Number(inputString);

        // Check if the conversion is successful and not NaN
        if (!isNaN(result)) {
            return result;
        } else {
            throw new Error("Invalid number");
        }
    } catch (error) {
        // Handle the error if the conversion fails
        return "Invalid number";
    }
}

// Expected Results
console.log(convertToNumber("123")); // Output: 123
console.log(convertToNumber("abc")); // Output: "Invalid number"
