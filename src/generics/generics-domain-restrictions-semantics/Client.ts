/* eslint-disable @typescript-eslint/no-unused-vars */

import { CollectionWithAny } from "./CollectionWithAny";
import { CollectionWithGenerics } from "./CollectionWithGenerics";
import { CollectionWithUpperBoundary } from "./CollectionWithUpperBoundary";
import { Course } from "./Course";

const fromJavaScriptToTypeScriptCourseId =
  "bd657eae-08fd-4735-ac12-c3f70a9f73f1";

const fromJavaScriptToTypeScriptCourse = new Course(
  fromJavaScriptToTypeScriptCourseId,
  "https://pro.codely.tv/library/de-javascript-a-typescript-128106/347481/about/"
);

const dddInTypeScriptCourse = new Course(
  "2658a496-899f-47be-a7f3-78cd6ed59c48",
  "https://pro.codely.tv/library/ddd-en-typescript-modelado-y-arquitectura-172533/375662/about/"
);

/**
 * 🍼 First stage:
 *
 * 😇 We are young and innocent about the potential we are missing while not using types
 */

const collectionWithAny = new CollectionWithAny([
  fromJavaScriptToTypeScriptCourse,
  dddInTypeScriptCourse,
]);

const finderFunction = (course: Course) =>
  course.id === fromJavaScriptToTypeScriptCourseId;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const foundOrNotThing = collectionWithAny.find(finderFunction);
// foundOrNotThing: any

/**
 * ✨ Second stage wins:
 *
 * 🧱 Now we know which type we are returning
 * 💪 Now we are explicit about potentially returning `undefined`
 */

const collectionWithGenerics = new CollectionWithGenerics([
  fromJavaScriptToTypeScriptCourse,
  dddInTypeScriptCourse,
]);

const foundOrNotCourse = collectionWithGenerics.find(finderFunction);
// foundOrNotCourse: Course | undefined

/**
 * 🫶 Third stage wins:
 *
 * ⚡ Constant cost while accessing to the item collection by id
 * 💪 Ensure custom integrity restrictions further than the array ones
 * 🎯 Push related logic to its most cohesive class
 */

const collectionWithUpperBoundary = new CollectionWithUpperBoundary([
  fromJavaScriptToTypeScriptCourse,
  dddInTypeScriptCourse,
]);

const foundCourse = collectionWithUpperBoundary.find(
  fromJavaScriptToTypeScriptCourseId
);
// foundCourse: Course
