import { createSlice } from '@reduxjs/toolkit';
import { Topic } from 'shared/ts/types';

const topics: Topic[] = [];

const topicsSlice = createSlice({
  name: 'topics',
  initialState: topics,
  reducers: {
    setTopics: (_, action) => {
      return action.payload;
    },
  },
});

export const { setTopics } = topicsSlice.actions;

export const selectTopics = (state: { topics: Topic[] }) => state.topics;

export default topicsSlice.reducer;
