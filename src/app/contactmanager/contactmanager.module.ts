import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from '../shared/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ContactmanagerAppComponent } from './contactmanager-app.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { MainContentComponent } from './component/main-content/main-content.component';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { UserService } from './sercice/user.service';
import { HttpClientModule } from '@angular/common/http';
import { NotesComponent } from './component/notes/notes.component';
import { NewContactDialogComponent } from './component/new-contact-dialog/new-contact-dialog.component';

const routes: Routes = [
  { path: '', component: ContactmanagerAppComponent,
      children: [
        {path:':id', component: MainContentComponent},
        {path:'', component: MainContentComponent}
  ]},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ],

  providers: [
    UserService
  ],

  declarations: [
    ContactmanagerAppComponent, 
    ToolbarComponent, 
    MainContentComponent, 
    SidenavComponent, 
    NotesComponent, NewContactDialogComponent
  ],
  entryComponents: [
    NewContactDialogComponent
  ]
})
export class ContactmanagerModule { }