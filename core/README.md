# Core concepts

## What is a "core"?

A core is the layer of the application that is responsible for the business logic. It is the layer that contains the domain model, the services, and the application logic.

## Domain Model

The domain model is a representation of the business concepts that are used in the application. It is a set of classes that represent the entities and the relationships between them.

## Why "inversify"?

Inversify is a library that is used to implement the dependency injection pattern. It is used to manage the dependencies between the classes in the application. It allows us to define the dependencies in a central place and to inject them into the classes that need them.

## TODO

Fix the following error when using @inject decorator in constructors:

```ts
Decorators are not valid here.ts(1206)
```
