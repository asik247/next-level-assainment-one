# Type Aliases vs Interfaces in TypeScript

## Introduction

TypeScript has two ways to create custom types: `type` and `interface`.
Both help us define the structure of data. They look similar, but they
have some differences. Let's understand them with simple examples.

## What is a Type Alias?

A type alias gives a name to a type. We can use it for objects, strings,
numbers, and more.

Example:

``` ts
type User = {
  name: string;
  age: number;
};

type Status = "active" | "inactive";
```

Here, `User` describes an object with a name and age. `Status` allows
only two values: active or inactive.

## What is an Interface?

An interface describes the structure of an object. It tells us which
properties an object should have.

Example:

``` ts
interface Student {
  name: string;
  age: number;
  id:number
}

const student: Student = {
  name: "Asik",
  age: 20,
  id:11
};
```

Here, the student object must have a name and age.

## Main Differences

1.  `type` can create object types, string types, number types, and
    union types.

2.  `interface` is mainly used to describe object structures.

3.  We can use `extends` with interfaces.

4.  We can use `&` to combine types.

5.  Interfaces support declaration merging, but type aliases do not.

Example:

``` ts
interface User {
  name: string;
}

interface Admin extends User {
  role: string;
}
```

Here, Admin gets the name property from User and adds a new role
property.

## When Should We Use Them?

Use `interface` when you want to describe objects and extend them. Use
`type` when you need union types or want to combine different types.

## Conclusion

Both `type` and `interface` are useful in TypeScript. They help us write
clean and safe code. We can choose either one depending on our needs.
