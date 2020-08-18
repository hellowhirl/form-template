// Jest is a Test Runner and an Assertion Library

// Assertion: expect things to exist about our code ("sky is blue")
// Mocks: fake something (data, function), using fake tests for smaller chunks, substitute for API call, etc
// Snapshot: take a snapshot of our code result dirctly (e.g. React DOM output) and check if it's equal to what we assert

test("First test", () => {
  expect(true).toBeTruthy();
});

// below test will fail
// test("First test", () => {
//   expect(false).toBeTruthy();
// });
