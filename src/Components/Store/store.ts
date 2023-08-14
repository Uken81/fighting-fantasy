import { configureStore } from '@reduxjs/toolkit';
import playerSlice from '../../features/Slices/playerSlice';
import roundResultsSlice from '../../features/Slices/roundResultsSlice';

export const store = configureStore({
  reducer: { playerSlice: playerSlice, roundResultsSlice: roundResultsSlice }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
