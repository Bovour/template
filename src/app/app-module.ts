import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './component/navbar/navbar';
import { Sidebar } from './component/sidebar/sidebar';
import { Dashbord } from './page/dashbord/dashbord';
import { Add } from './page/utilisateur/add/add';
import { Update } from './page/utilisateur/update/update';
import { List } from './page/utilisateur/list/list';
import { ReactiveFormsModule } from '@angular/forms';
import { Board } from './page/board/board';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Delete } from './page/utilisateur/delete/delete';

@NgModule({
  declarations: [
    App,
     Navbar,
    Sidebar,
    Dashbord,
    Add,
    Update,
    List,
    Board,
    Delete
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    AppRoutingModule,
    ReactiveFormsModule 
    
   
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
