// Jest is a Test Runner (test()) and an Assertion Library (expect().toBe())

// Assertion: expect things to be a certain way in our code ("sky is blue")
// Mocks: fake something (data, function), using fake tests for smaller chunks, substitute for API call, etc
// Snapshot: take a snapshot of our code result dirctly (e.g. React DOM output) and check if it's equal to what we assert

// Testing needs to be in place for applications that are growing in scale
// Easier to write the tests as you are writing the code

// Unit test
// It only tests one thing (one specific unit)
// for single units of code that don't depend on or interact with any other modules

test("Trial test", () => {
  expect(true).toBeTruthy();
});

// below test will fail
// test("First test", () => {
//   expect(false).toBeTruthy();
// });

// Integratino test
// More about coding working together
// e.g. when we test a function that relies on another function
// In React, testing a component that render another component

// In React only renders a single level of component, not its children
// this is why we should use primarily integration tests

// If we want to write a unit test for a function that relies on another function then we use 'Mocks
// creating a fake function that returns a value automatically without ever calling that other function

// Other types of testing:
// End-to-end: spin up your app and simulate user behavior. Kind of like a robeot performing a task in your app. Highest level testing, almost like a QA person
// Static: catch typos and errors while writing code (TypeScript, Flow, ESLint), providing immediatte feedback while you write code
