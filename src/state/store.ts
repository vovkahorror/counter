import {combineReducers, legacy_createStore} from "redux";
import {valuesReducer} from "./values-reducer";
import {newValuesReducer} from "./newValues-reducer";
import {commonReducer} from "./common-reducer";

const rootReducer = combineReducers({
    values: valuesReducer,
    newValues: newValuesReducer,
    common: commonReducer,
});

export type AppRootStateType = ReturnType<typeof rootReducer>

export const store = legacy_createStore(rootReducer);