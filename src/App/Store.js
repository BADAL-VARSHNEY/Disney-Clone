import { configureStore} from "@reduxjs/toolkit";
import userReducer  from "../Features/User/UserSlice";
import movieReducer from "../Features/Movie/MovieSlice";
export default configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: false,
    }),
})