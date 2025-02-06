// Exercise: Write a function `fail` that takes a string message and throws an error with that message.
// The function should have a `never` return type because it never successfully returns.

function fail(message: string, code: number) : never {
    throw { message: message, errorCode: code };
}

try {
    fail("Uncaught Error: Something went wrong");
} catch (error) {
    console.log(error.message);
    console.log(error.errorCode);
}



// Expected output: Uncaught Error: Something went wrong