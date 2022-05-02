/* eslint-disable @typescript-eslint/no-unused-vars */
interface Book {
  title: string;
  url: string;
  pages: number;
}

interface BestSeller extends Book {
  sales: number;
}

type User = {
  name: string;
};

type Learner = User & { registeredCourses: number };

//a type can extends an interface and vice versa
type OutdatedBooks = Book & { endOfSaleDate: Date };
