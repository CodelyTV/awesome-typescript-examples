/* eslint-disable @typescript-eslint/no-unused-vars */
interface CourseInterface {
  title: string;
  url: string;
  chapters: number;
}

type CourseType = {
  title: string;
  url: string;
  chapters: number;
};

const refactorCourse: CourseInterface = {
  title: "De JavaScript a TypeScript",
  url: "https://pro.codely.tv/library/de-javascript-a-typescript-128106",
  chapters: 10,
};

const creationalPatternsCourse: CourseType = {
  title: "Patrones de Diseño: Creacionales",
  url: "https://pro.codely.tv/library/patrones-de-diseno-creacionales-167860/359464/about/",
  chapters: 11,
};
