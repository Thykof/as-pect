/**
 * This function creates a test group in the test loader.
 *
 * @param {string} description  - This is the name of the test group.
 * @param {() => void} callback - A function that contains all of the closures for this test group.
 *
 * @example
 * describe("my test suite", (): void => {
 *   // put your tests here
 * });
 */
declare function describe(description: string, callback: () => void): void;

/**
 * This function creates a test inside the given test group. It must be placed inside a describe
 * block.
 *
 * @param {string} description - This is the name of the test, and should describe a behavior.
 * @param {() => void} callback - A function that contains a set of expectations for this test.
 *
 * @example
 * describe("the meaning of life", (): void => {
 *   it("should be 42", (): void => {
 *     // put your expectations here
 *     expect<i32>(29 + 13).toBe(42);
 *   });
 * });
 */
declare function it(description: string, callback: () => void): void;

/**
 * A test that does not run, and is longhand equivalent to using todo function without a
 * callback. This test does not get run and is reported like a todo.
 *
 * @param {string} description - This is the name of the test, and should describe a behavior.
 * @param {() => void} callback - A function that contains a set of expectations for this test.
 */
declare function xit(description: string, callback: () => void): void;

/**
 * A test that does not run, and is longhand equivalent to using todo function without a
 * callback. This test does not get run and is reported like a todo.
 *
 * @param {string} description - This is the name of the test, and should describe a behavior.
 * @param {() => void} callback - A function that contains a set of expectations for this test.
 */
declare function xtest(description: string, callback: () => void): void;

/**
 * This function creates a test inside the given test group. It must be placed inside a describe
 * block.
 *
 * @param {string} description - This is the name of the test, and should describe a behavior.
 * @param {() => void} callback - A function that contains a set of expectations for this test.
 *
 * @example
 * describe("the meaning of life", (): void => {
 *   test("the value should be 42", (): void => {
 *     // put your expectations here
 *     expect<i32>(29 + 13).toBe(42);
 *   });
 * });
 */
declare function test(description: string, callback: () => void): void;

/**
 * This function creates a test that is expected to fail. This is useful to verify if a given
 * behavior is expected to throw.
 *
 * @param {string} description - This is the name of the test, and should describe a behavior.
 * @param {() => void} callback - A function that contains a set of expectations for this test.
 * @param {string?} message - A message that describes why the test should fail.
 * @example
 * describe("the meaning of life", (): void => {
 *   throws("the value should be 42", (): void => {
 *     // put your expectations here
 *     expect<i32>(29 + 13).toBe(42);
 *   });
 * });
 */
declare function throws(
  description: string,
  callback: () => void,
  message?: string,
): void;

/**
 * This function creates a test that is expected to fail. This is useful to verify if a given
 * behavior is expected to throw.
 *
 * @param {string} description - This is the name of the test, and should describe a behavior.
 * @param {() => void} callback - A function that contains a set of expectations for this test.
 * @param {string?} message - A message that describes why the test should fail.
 * @example
 * describe("the meaning of life", (): void => {
 *   itThrows("when the value should be 42", (): void => {
 *     // put your expectations here
 *     expect<i32>(29 + 13).not.toBe(42);
 *   }, "The value is actually 42.");
 * });
 */
declare function itThrows(
  description: string,
  callback: () => void,
  message?: string,
): void;

/**
 * This function creates a callback that is called before each individual test is run in this test
 * group.
 *
 * @param {function} callback - The function to be run before each test in the current test group.
 *
 * @example
 * // create a global
 * var cat: Cat = new Cat();
 *
 * describe("cats", (): void => {
 *   beforeEach((): void => {
 *     cat.meow(1); // meow once per test
 *   });
 * });
 */
declare function beforeEach(callback: () => void): void;

/**
 * This function creates a callback that is called before the whole test group is run, and only
 * once.
 *
 * @param {function} callback - The function to be run before each test in the current test group.
 *
 * @example
 * // create a global
 * var dog: Dog = null;
 * describe("dogs", (): void => {
 *   beforeAll((): void => {
 *     dog = new Dog(); // create a single dog once before the tests start
 *   });
 * });
 */
declare function beforeAll(callback: () => void): void;

/**
 * This function creates a callback that is called after each individual test is run in this test
 * group.
 *
 * @param {function} callback - The function to be run after each test in the current test group.
 *
 * @example
 * // create a global
 * var cat: Cat = new Cat();
 *
 * describe("cats", (): void => {
 *   afterEach((): void => {
 *     cat.sleep(12); // cats sleep a lot
 *   });
 * });
 */
declare function afterEach(callback: () => void): void;

/**
 * This function creates a callback that is called after the whole test group is run, and only
 * once.
 *
 * @param {function} callback - The function to be run after each test in the current test group.
 *
 * @example
 * // create a global
 * var dog: Dog = null;
 * describe("dogs", (): void => {
 *   afterAll((): void => {
 *     memory.free(changetype<usize>(dog)); // free some memory
 *   });
 * });
 */
declare function afterAll(callback: () => void): void;

/**
 * Describes a value and returns an expectation to test the value.
 *
 * @type {T} - The expectation's type.
 * @param {T} actual - The value being tested.
 *
 * @example
 * expect<i32>(42).not.toBe(-1, "42 should not be -1");
 * expect<i32>(19 + 23).toBe(42, "19 + 23 should equal 42");
 */
declare function expect<T>(actual: T | null): Expectation<T>;

/**
 * An expectation for a value.
 */
// @ts-ignore
declare class Expectation<T> {
  /**
   * This expectation performs a strict equality on value types and reference types.
   *
   * @param {T | null} expected - The value to be compared.
   * @param {string} message - The optional message that describes the expectation.
   *
   * @example
   * expect<i32>(42).not.toBe(-1, "42 should not be -1");
   * expect<i32>(19 + 23).toBe(42, "19 + 23 should equal 42");
   */
  toBe(expected: T | null, message?: string): void;

  /**
   * If the value is callable, it calls the function, and fails the expectation if it throws, or hits
   * an unreachable().
   *
   * @param {string} message - The optional message that describes the expectation.
   *
   * @example
   * expectFn((): void => unreachable()).toThrow("unreachable() should throw.");
   * expectFn((): void => {
   *   cat.sleep(100); // cats can sleep quite a lot
   * }).not.toThrow("cats should sleep, not throw");
   */
  toThrow(message?: string): void;

  /**
   * If the value is callable, it calls the function, and fails the expectation if it throws with the wrong
   * error message, or hits an unreachable().
   *
   * @param {string} expectThrowMessage - The expected message that should be thrown.
   * @param {string} message - The optional message that describes the expectation.
   *
   * @example
   *
   * ```ts
   * expectFn((): void => unreachable()).toThrowWith("unreachable() should throw.");
   * expectFn((): void => {
   *   cat.sleep(100); // cats can sleep quite a lot
   * }).not.toThrowWith("another error message", "cats should sleep, not throw");
   * ```
   */
  toThrowWith(expectThrowMessage: string, message?: string): void;

  /**
   * This expectation asserts that the value is truthy, like in javascript. If the value is a string,
   * then strings of length 0 are not truthy.
   *
   * @param {string} message - The optional message that describes the expectation.
   *
   * @example
   * expect<bool>(true).toBeTruthy("true is truthy.");
   * expect<i32>(1).toBeTruthy("numeric values that are not 0 are truthy.");
   * expect<Vec3>(new Vec3(1, 2, 3)).toBeTruthy("reference types that aren't null are truthy.");
   * expect<bool>(false).not.toBeTruthy("false is not truthy.");
   * expect<i32>(0).not.toBeTruthy("0 is not truthy.");
   * expect<Vec3>(null).not.toBeTruthy("null is not truthy.");
   */
  toBeTruthy(message?: string): void;

  /**
   * This expectation tests the value to see if it is null. If the value is a value type, it is
   * never null. If the value is a reference type, it performs a strict null comparison.
   *
   * @param {string} message - The optional message that describes the expectation.
   *
   * @example
   * expect<i32>(0).not.toBeNull("numbers are never null");
   * expect<Vec3>(null).toBeNull("null reference types are null.");
   */
  toBeNull(message?: string): void;

  /**
   * This expectation assert that the value is falsy, like in javascript. If the value is a string,
   * then strings of length 0 are falsy.
   *
   * @param {string} message - The optional message that describes the expectation.
   *
   * @example
   * expect<bool>(false).toBeFalsy("false is falsy.");
   * expect<i32>(0).toBeFalsy("0 is falsy.");
   * expect<Vec3>(null).toBeFalsy("null is falsy.");
   * expect<bool>(true).not.toBeFalsy("true is not falsy.");
   * expect<i32>(1).not.toBeFalsy("numeric values that are not 0 are not falsy.");
   * expect<Vec3>(new Vec3(1, 2, 3)).not.toBeFalsy("reference types that aren't null are not falsy.");
   */
  toBeFalsy(message?: string): void;

  /**
   * This expectation asserts that the value is greater than the expected value. Since operators can
   * be overloaded in assemblyscript, it's possible for this to work on reference types.
   *
   * @param {T | null} expected - The expected value that the actual value should be greater than.
   * @param {string} message - The optional message that describes this expectation.
   *
   * @example
   * expect<i32>(10).toBeGreaterThan(4);
   * expect<i32>(12).not.toBeGreaterThan(42);
   */
  toBeGreaterThan(expected: T | null, message?: string): void;

  /**
   * This expectation asserts that the value is less than the expected value. Since operators can
   * be overloaded in assemblyscript, it's possible for this to work on reference types.
   *
   * @param {T | null} value - The expected value that the actual value should be less than.
   * @param {string} message - The optional message that describes this expectation.
   *
   * @example
   * expect<i32>(10).not.toBeLessThan(4);
   * expect<i32>(12).toBeLessThan(42);
   */
  toBeLessThan(expected: T | null, message?: string): void;

  /**
   * This expectation asserts that the value is greater than or equal to the expected value. Since
   * operators can be overloaded in assemblyscript, it's possible for this to work on reference
   * types.
   *
   * @param {T | null} value - The expected value that the actual value should be greater than or
   * equal to.
   * @param {string} message - The optional message that describes this expectation.
   *
   * @example
   * expect<i32>(42).toBeGreaterThanOrEqual(42);
   * expect<i32>(10).toBeGreaterThanOrEqual(4);
   * expect<i32>(12).not.toBeGreaterThanOrEqual(42);
   */
  toBeGreaterThanOrEqual(expected: T | null, message?: string): void;

  /**
   * This expectation asserts that the value is less than or equal to the expected value. Since
   * operators can be overloaded in assemblyscript, it's possible for this to work on reference
   * types.
   *
   * @param {T | null} value - The expected value that the actual value should be less than or equal
   * to.
   * @param {string} message - The optional message that describes this expectation.
   *
   * @example
   * expect<i32>(42).toBeLessThanOrEqual(42);
   * expect<i32>(10).not.toBeLessThanOrEqual(4);
   * expect<i32>(12).toBeLessThanOrEqual(42);
   */
  toBeLessThanOrEqual(expected: T | null, message?: string): void;

  /**
   * This expectation asserts that the value is close to another value. Both numbers must be finite,
   * and T must extend f64 or f32.
   *
   * @param {T extends f64 | f32} value - The expected value to be close to.
   * @param {i32} decimalPlaces - The number of decimal places used to calculate epsilon. Default is
   * 2.
   * @param {string} message - The optional message that describes this expectation.
   */
  toBeCloseTo(expected: T, decimalPlaces?: number, message?: string): void;

  /**
   * This function asserts the float type value is NaN.
   *
   * @param {string} message - The optional message the describes this expectation.
   * @example
   * expect<f64>(NaN).toBeNaN();
   * expect<f32>(42).not.toBeNaN();
   */
  toBeNaN(message?: string): void;

  /**
   * This function asserts a float is finite.
   *
   * @param {string} message - The optional message the describes this expectation.
   * @example
   * expect<f32>(42).toBeFinite();
   * expect<f64>(Infinity).not.toBeFinite();
   */
  toBeFinite(message?: string): void;

  /**
   * This method asserts the item has the expected length.
   *
   * @param {i32} expected - The expected length.
   * @param {string} message - The optional message the describes this expectation.
   */
  toHaveLength(expected: i32, message?: string): void;

  /**
   * This method asserts that a given T that extends Array<U> has a value/reference included.
   *
   * @param {i32} expected - The expected item to be included in the Array.
   * @param {string} message - The optional message the describes this expectation.
   */
  // @ts-ignore: expected value should be known at compile time
  toContain(expected: valueof<T>, message?: string): void;

  /**
   * This method asserts that a given T that extends Array<U> has a value/reference included and
   * compared via memory.compare().
   *
   * @param {i32} expected - The expected item to be included in the Array.
   * @param {string} message - The optional message the describes this expectation.
   */
  // @ts-ignore: expected value should be known at compile time
  toContainEqual(expected: valueof<T>, message?: string): void;

  /**
   * This computed property is chainable, and negates the existing expectation. It returns itself.
   *
   * @param {U} expected - The expected item.
   * @param {string} message - The optional message the describes this expectation.
   * @type {Expectation<T>}
   */
  not: Expectation<T>;
}
