import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { Observable } from "rxjs";
import { User } from  '../../models/user';
import { AppState, selectAuthState } from '../../store/app.states';
import { LogIn } from '../../store/actions/auth.actions';
import { Store, State } from '@ngrx/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  getState: Observable<any>;
  errorMessage: string | null;

 constructor(private formBuilder: FormBuilder,
             private store: Store<AppState>
  ) {
   this.createForm();
   this.getState = this.store.select(selectAuthState);
 }

 error: Observable<String>;
 loginForm: FormGroup;

 createForm() {
   this.loginForm = this.formBuilder.group({
     username: ["", Validators.required],
     password: ["", Validators.required]
   });
 }

  ngOnInit() {
    this.getState.subscribe((state) => {
      this.errorMessage = state.errorMessage;
    })
  }

  onSubmit() {
    const payload = {
      username: this.user.username,
      password: this.user.password
    };
    this.store.dispatch(new LogIn(payload));
  }

 
}