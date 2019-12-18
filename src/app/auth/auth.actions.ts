import { createAction, props } from '@ngrx/store';
import { LoginInput, TokenResponse } from './user';
import { LoginComponent } from './login/login.component';

export const setStatus = createAction(
    "[Authentication] SetStatus",
    props<{ status: boolean }>()
);

export const login = createAction(
    "[Authentication] Login",
    props<{ user: LoginComponent }>()
);

export const loginSuccess = createAction(
    "[Authntication] LoginSuccess",
    props<{ response: TokenResponse }>()
);

export const loginFailure = createAction(
    "[Authentication] LoginFailure",
    props<{ error: String }>()
);

export const logout = createAction("[Authentication] Logout");