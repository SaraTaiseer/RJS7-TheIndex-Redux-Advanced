import { combineReducers } from "redux";

import reducerAuthors from "./authors";
import reducerBooks from "./books";

const rootReducer = combineReducers({
    authorsState : reducerAuthors,
    booksState : reducerBooks
});

export default rootReducer;