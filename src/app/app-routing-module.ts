import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashbord } from './page/dashbord/dashbord';
import { List } from './page/utilisateur/list/list';
import { Add } from './page/utilisateur/add/add';
import { Update } from './page/utilisateur/update/update';
import { Board } from './page/board/board';
 

 const routes: Routes = [
  
  { path: 'dashboard', component: Dashbord,
  
    children: [{
        path: '',
        component: Board,
        pathMatch: 'full'
    },
   { path: 'users', component: List },
  { path: 'users/add', component: Add },
  { path: 'users/edit/:id', component: Update },
  { path: '**', redirectTo: 'dashboard' }]

   },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
