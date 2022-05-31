# Decorators DIOD Dependency Injection Example

## Usage with default library decorators

The `UserRepository` is decorated with the default `Service` decorator provided y the DI library, DIOD.

Thanks to this decorator we are able to register that abstract class as a service and bind it to the `InMemoryUserRepository` in the `container.ts` with:

```typescript
builder.register(UserRepository).use(InMemoryUserRepository);
```

## Usage with custom decorators

We have the `UseCase` custom decorator declared in order to accumulate all the registered use cases in the exported `registeredUseCases` array.a

This provide us the following benefits:

- Be able to operate with all the services of a common type such as use cases, domain events, queries, or commands in tasks such as automatically generating documentation, programatically generate exchanges, queues, and binding configuration 😊
- Provide specific semantics (UseCase, DomainEventSubscriber, etc.)
- Decouple from the specific library decorators

```typescript
import { registeredUseCases } from "./UseCase";

registeredUseCases.forEach((useCase) => {
  builder.registerAndUse(useCase);
});
```

## How to execute

```bash
cd src/decorators/diod-dependency-injection
npx ts-node-dev ./main.ts
```
