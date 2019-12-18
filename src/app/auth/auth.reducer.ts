import { createReducer, on } from '@ngrx/store';
import {
    login,
    loginSuccess,
    loginFailure,
    setStatus,
    logout
} from './auth.actions';

export interface State {
    loading: Boolean;
    error: String;
    loggedIn: Boolean;
}

const initialState: State = {
    loading: false,
    error: null,
    loggedIn: false
};

export const AuthReducer = createReducer(
    initialState,
    on(login, state => ({ ...state, loading: true })),
    on(loginSuccess, state => ({
        ...state,
        loading: false,
        loggedIn: true,
        error: null
    })),
    on(loginFailure, (state, { error }) => ({ ...state, loading: false, error})),
    on(logout, state => ({ ...state, loggedIn: false })),
    on(setStatus, (state, { status }) => ({ ...state, loggedIn: status }))
)