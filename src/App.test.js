// Jest is a Test Runner and an Assertion Library

// Assertion: expect things to be a certain way in our code ("sky is blue")
// Mocks: fake something (data, function), using fake tests for smaller chunks, substitute for API call, etc
// Snapshot: take a snapshot of our code result dirctly (e.g. React DOM output) and check if it's equal to what we assert

// Testing needs to be in place for applications that are growing in scale
// Easier to write the tests as you are writing the code

// Unit test
// It only tests one thing (one specific unit)

test("Trial test", () => {
  expect(true).toBeTruthy();
});

// below test will fail
// test("First test", () => {
//   expect(false).toBeTruthy();
// });

// Integratino test
// More about coding working together
// e.g. one functino goes off an runs another function runs another..

// In React only renders a single level of component, not its children
// this is why we should use primarily integration tests
