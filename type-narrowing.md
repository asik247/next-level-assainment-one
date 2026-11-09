# Type Narrowing in TypeScript

## Introduction

Type narrowing means checking a value to find out its exact type. It
helps TypeScript understand what kind of value we are using. This also
helps us avoid errors in our code.

## 1. Using typeof

We use `typeof` to check simple types like string, number, and boolean.

Example:

``` ts
function showValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}
```

Here, if the value is a string, we convert it to uppercase. Otherwise,
we treat it as a number.

## 2. Using instanceof

We use `instanceof` to check if an object belongs to a class.

Example:

``` ts
class Dog {

  bark() {
    console.log("Dog is barking");
  }

}

class Cat {

  meow() {
    console.log("Cat is making a sound");
  }

}

function makeSound(animal: Dog | Cat) {

  if (animal instanceof Dog) {

    animal.bark();

  } else {

    animal.meow();
  }
}
```

Here, TypeScript checks whether the animal is a Dog or a Cat.

## 3. Using the in Operator

We use the `in` operator to check if an object has a property.

Example:

``` ts
type Admin = {
  name: string;
  role: string;
  id:number;
};

type Customer = {
  name: string;
  purchase: number;
  contace:number
};

function showUser(user: Admin | Customer) {
  if ("role" in user) {
    console.log(user.role);
  } else {
    console.log(user.purchase);
  }
}
```

Here if the object has a `role` property it is treated as an Admin.
Otherwise it is treated as a Customer.

## Conclusion

Type narrowing helps us write safer TypeScript code.  We use `typeof` for
simple types`instanceof`for class objects and`in`to check object
properties.These tools make our code easier to understand and help
prevent errors.
