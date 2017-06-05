# Interstelar Memoization Toolkit

This package has a handful of tools for memoizing callbacks in React.

A common use looks like:

```
<button
  onClick={partial(maybeCallback(this.props.handleClick), 'clicked the button')}
/>
```

# API

## `partial`

Partially apply a function and memoize the result. This lets functions to be bound to local data (current index, button id, etc) without creating un-diffable anonymous function references.

```
const myFunction = (a, b, c) => console.log(a, b, c);

const partialedFunction = partial(
  myFunction,
  1,
  2
);

partialedFunction(3) // => 1, 2, 3
```

## `maybeCallback`

If the value passed in is a function, we can call it. Otherwise, return a no-op function. This let's us `partial` optional callback props.

```
const callMeMaybe = maybeCallback(null);
callMeMaybe(); // No error, but nothing happens.
```

## `always`

Create a function that always returns the same value.

```
const returnTrue = always(true);
returnTrue() // => true
returnTrue() // => true
```

## `memoize`

A function which makes sure whenever it is called with the same input, it returns the exact same reference output and avoid re-running any calculations after the first cache.

```
function getAFunctionRef() {
  console.log('Calculating');
  return () => true;
}

const memoizedFunc = memoize(getAFunctionRef);

const a = memoizedFunc() // logs 'Calculating'
const b = memoizedFunc() // does not log 'Calculating'
a === b // true
```