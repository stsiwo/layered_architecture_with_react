# layered_architecture_with_react

clean architecture with react spa (prototype)

## Tasks
  - **IMapper**: need mapper to convert GraphQL query type to aggregate
  - **Business Logic Validation**: 3 tier validation
      1. field/attribute validation => use self-encapsulation for vaidation
      2. an aggregate or entity validation => use strategy pattern for validation
      3. multiple aggregates (or single aggregate) => use domain service with repository and domain event for validation
  - **App/UI State Update**: app/ui state update after use case suceeded if necessary
  - ~~**Domain Event**~~: use events (built-in package) and wrap it with class
  - **UI**: use react hook
      - change rendering component based on the screen size
  - **GraphQL**: create sdl and implement and test
  - **Code Splitting**: use "react-loadable". also check webpack code splitting. (Performance)
