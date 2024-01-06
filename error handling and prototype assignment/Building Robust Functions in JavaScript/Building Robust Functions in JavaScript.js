function getPerson(person) {
    try {
        // Check if the parameter is a valid object with "name" and "age" properties
        if (typeof person === 'object' && person !== null && 'name' in person && 'age' in person) {
            // Return the person's name and age as a string
            return `Name: ${person.name}, Age: ${person.age}`;
        } else {
            // Throw an error for invalid parameter type
            throw new Error("Invalid parameter type");
        }
    } catch (error) {
        // Handle the error and return the error message
        return error.message;
    }
}

// Expected Output
console.log(getPerson({ name: "Mindup", age: 23 })); // Output: Name: Mindup, Age: 23
console.log(getPerson({ name: "Mindup" })); // Output: Invalid parameter type
console.log(getPerson(["name", "Mindup"])); // Output: Invalid parameter type.
