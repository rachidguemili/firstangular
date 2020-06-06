import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserComponent } from './user/user.component';
import { MenuComponent } from './menu/menu.component';


const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'signup', component: SignUpComponent },
  { path: '', component: MenuComponent }];



@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations:[]
})
export class AppRoutingModule { }
