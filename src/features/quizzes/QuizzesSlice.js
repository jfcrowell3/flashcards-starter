import { addQuizId } from "../topics/TopicsSlice";
const { createSlice } = require("@reduxjs/toolkit");

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: {
    quizzes: {}
  },
  reducers: {
    addQuiz: (state, action) => {
      const { quizId, name, topicId, cardIds } = action.payload;
      state.quizzes[quizId] = {
        id: quizId,
        name: name,
        topicId: topicId,
        cardIds: cardIds
      };
    }
  }
});

export const addQuizAndQuizId = (quiz) => {
  const { quizId, topicId } = quiz;
  return (dispatch) => {
    dispatch(addQuiz(quiz));
    dispatch(addQuizId({ quizId: quizId, topicId: topicId }));
  };
};

export const selectQuizzes = (state) => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;
