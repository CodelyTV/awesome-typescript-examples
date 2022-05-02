import create, { State } from "zustand/vanilla";

interface CourseStore extends State {
  learners: number;
  teacher: string;
  enroll: () => void;
  removeAllLearners: () => void;
}

const store = create<CourseStore>((set) => ({
  learners: 0,
  teacher: "Javi",
  removeAllLearners: () => set({ learners: 0 }),
  enroll: () =>
    set((state) => ({
      learners: state.learners + 1,
    })),
}));

console.log(store.getState().learners);

store.getState().enroll();

console.log(store.getState().learners);

store.setState({ learners: 15 });

console.log(store.getState().learners);

store.subscribe((store) => console.log(store.learners));

store.destroy();
