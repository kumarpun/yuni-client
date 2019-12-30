import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthModule } from './auth/auth.module';
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { AuthService } from './services/auth.service';
import { AuthEffects } from './store/effects/auth.effects';
import { reducers } from './store/app.states';
import { SidenavComponent } from './dasboard/sidenav/sidenav.component';
import { TopnavComponent } from './dasboard/topnav/topnav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './core/material/material.module';
import { ProductModule } from './product/product.module'; 
import { FormServices } from './services/form';
import { FlexLayoutModule } from '@angular/flex-layout'


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    TopnavComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    FormsModule,
    CustomMaterialModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    EffectsModule.forRoot([AuthEffects]),
    StoreModule.forRoot(reducers, {}),
    BrowserAnimationsModule,
    ProductModule,
    FlexLayoutModule
    // EffectsModule.forRoot([])
  ],
  providers: [
    AuthService,
    FormServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
