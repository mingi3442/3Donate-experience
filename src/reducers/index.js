import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import login from "./loginReducer";
import post from "./postsReducer";
import mypage from "./mypageReducer";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  mypage,
  login,
  post,
});

export default persistReducer(persistConfig, rootReducer);
