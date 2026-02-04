# Short Response Questions

## Question 1: Promise States

What are the three states of a Promise? For each state, explain what it represents and which Promise method (`.then()` or `.catch()`) is used to handle it.

**Your Answer:**

- The three states of a **Promise** are **pending, resolved and rejected**. Pending represents the function still being processed, while resolve and reject represent the function being a success or failure respectfully.


## Question 2: Callback Hell vs. Promise Chaining

Explain why deeply nested callbacks (callback hell) are problematic, and describe how Promise chaining with `.then()` solves this problem.

**Your Answer:**

- Callback hell is problematic due to creating many levels of indentation for each nested callback, which makes code hard to read and debug. 
- The alternative, promise chaining, solves this by using the `.then()` syntax. By using promise chaining, once the first promise function resolves, we can use `.then()` to run the next promise function. 
- Additionally, by using promise chaining, we would only need one `.catch()` that will "catch" any errors from any promise in the chain. 

## Question 3: Error Handling with `.catch()`

If you have a chain of three `.then()` calls followed by a single `.catch()`, and the second `.then()` throws an error, what happens? Why is this behavior useful?

**Your Answer:**

- If the second `.then()` throws an error, then the chain will **not** continue to the third `.then()` and instead go to the `.catch()`. 
- This behavior is useful as it prevents causing issues with the rest of the chain by going directly to the `.catch()`. In addition, it can highlight where the error resides in the chain and make debugging smoother. 
