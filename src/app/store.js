import { configureStore } from "@reduxjs/toolkit";
import cardsSlice from "../features/cards/cardsSlice";
import QuizzesSlice from "../features/quizzes/QuizzesSlice";
import TopicsSlice from "../features/topics/TopicsSlice";

export default configureStore({
  reducer: {
    topics: TopicsSlice,
    quizzes: QuizzesSlice,
    cards: cardsSlice,
  },
});
