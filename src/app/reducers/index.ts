import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
} from "@ngrx/store";

import { AuthReducer, State as AuthState } from '../auth/auth.reducer';