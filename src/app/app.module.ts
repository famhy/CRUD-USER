import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from './components/button/button.component';

import {HttpClientModule} from '@angular/common/http';

// Matrial UI 

import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { UsersItemComponent } from './components/users-item/users-item.component';
import { AddUserComponent } from './components/add-user/add-user.component'

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UsersItemComponent,
    ButtonComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
