import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import ListingReducer from "./reducers/getListingSlice";

const loggerMiddleware = createLogger();
const middleware = [thunk, loggerMiddleware];

if (process.env.NODE_ENV === "development") {
  middleware.push(loggerMiddleware);
}

export default configureStore({
  reducer: { ListingReducer },
  middleware: [thunk, loggerMiddleware],
});
