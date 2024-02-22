import { configureStore } from '@reduxjs/toolkit';
import { stateSchema } from './stateSchema';

export function createReduxStore(initialState?:stateSchema) {
    return configureStore<stateSchema>({
        reducer: {},
        devTools: IS_DEV,
        preloadedState: initialState,
    });
}

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch
