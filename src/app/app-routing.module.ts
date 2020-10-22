import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from './users/users.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './security/auth.guard';
import {SignInComponent} from './sign-in/sign-in.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signin',
    component: SignInComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
