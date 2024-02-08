import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/CounterSlice'
import Logger from "./middleware/logger";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },

//   devTools :false,
middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(Logger),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch