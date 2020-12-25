import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { IndexComponent } from './index.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LogoutComponent } from './logout.component';

let myRoutes: Routes=[
  {path:"",component:LoginComponent},
  {path:"index",component:IndexComponent},
  {path:"logout",component:LogoutComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(myRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
