# Balanced Brackets
[Balanced Brackets on HackerRank](https://www.hackerrank.com/challenges/balanced-brackets/problem)

### Explanation of Solution
To determine if a string has balanced brackets, a stack would be the best data structure.

Pseudocode:
- Examine one character at a time, from left to right.
- If the next character is an open bracket:
  - Push the bracket on the stack.
- Otherwise, if the next character is a closing bracket:
  - Pop the top value off the stack.
  - If the stacks's top value is not the matching opening bracket or the stack is empty, the string is not balanced.
- If you've reached the end of the string without hitting an unbalanced bracket, the string is balanced.

### Clarifying Questions
- Can the input contain any characters outside the set ∈ { **{**, **}**, **(**, **)**, **[**, **]** }?
- If an invalid character is encountered, should it be ignored or throw an error?
- Same for white space, should that be ignored or throw an error?

### Assumptions
- Invalid characters should be ignored, not throw an error. If invalid characters were not allowed, you could short circuit when the string length is odd (not even; as a balanced string must have an even number of bracket characters).