import {combineReducers, legacy_createStore} from "redux";
import {valuesReducer} from "./values-reducer";
import {newValuesReducer} from "./newValues-reducer";

const rootReducer = combineReducers({
    values: valuesReducer,
    newValues: newValuesReducer,
});

export type AppRootStateType = ReturnType<typeof rootReducer>

export const store = legacy_createStore(rootReducer)