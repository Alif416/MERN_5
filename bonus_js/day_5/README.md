## Logical Operators

- && logical and
- || logical or
- ! logical not
- ?? logical nullish coalescing

## truthy or falsy value

- **Falsy Values:**
  - `false` (the boolean primitive)
  - `0` (the number zero)
  - `-0` (negative zero)
  - `0n` (BigInt zero)
  - `""` (an empty string)
  - `null`
  - `undefined`
  - `NaN` (Not a Number)
- **Truthy Values:**
  - `true`
  - Any non-zero number (e.g., `1`, `1`, `3.14`)
  - Any non-empty string (e.g., `"hello"`, `"false"`)
  - Arrays (including empty arrays `[]`)
  - Objects (including empty objects `{}`)
  - Functions

## logical and

Both Operand are true then output or result will be true  
if left side will true then output return will be right side otherwise return left side

## Logical or operator

any Operands are true then output or result will be true  
if left side will false then output return will be right side otherwise return left side

## Logical Not operator

- !

## Nullish Coalescing operator

- ??
- left operand is null or undefined then then return right side operand

## Conditional Ternary Operator

- condition ? "value1": "value2"

## Bitwise Operators

- No need at this moments

## Relational Operators

- in use in object or loop

## Grouping and Precedence

- Precedence (অগ্রাধিকার) মানে হলো, JavaScript (বা অন্য কোনো ভাষা) যখন এক লাইনে একাধিক operator দেখে, তখন কোন operator আগে execute হবে সেই নিয়ম।

## Some Operator Precedence list:

1. `()` → Parentheses (সবচেয়ে আগে)
2. `*` → Exponentiation
3. `/ %` → Multiplication, Division, Modulus
4. `+ -` → Addition, Subtraction
5. `< > <= >=` → Comparison
6. `== != === !==` → Equality
7. `&&` → Logical AND
8. `||` → Logical OR
9. `=` → Assignment (সবচেয়ে শেষে)

## special type operator

- typeof()
- instanceof()
