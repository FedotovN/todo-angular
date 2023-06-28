import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppAccount } from './components/account/account.component';
const routes: Routes = [
  {
    path: 'account',
    title: 'Account',
    component: AppAccount
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
