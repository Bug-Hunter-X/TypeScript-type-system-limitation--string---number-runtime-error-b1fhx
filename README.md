# TypeScript Type System Limitation: String + Number Runtime Error

This example demonstrates a limitation of TypeScript's type system. While TypeScript prevents type errors during compilation, it doesn't always prevent runtime errors that arise from type coercion.

The `add` function is defined to accept two numbers and return their sum. However, the code calls the function with a string and a number. This will compile in TypeScript because TypeScript allows implicit type coercion in this case (string gets converted to a number).  At runtime this will cause the program to behave in a way that is different than what one would expect from the function signature.

## Bug

The `bug.ts` file contains the buggy code.  The type definition for the function `add` correctly reflects that it only takes numbers.  However the call to `add` passes a string, which is then implicitly converted to a number. This will produce a result, but it won't be what is expected of the `add` function.

## Solution

The `bugSolution.ts` file shows how to improve the code to prevent this type of error.  We use a more defensive approach to prevent the unexpected behavior.