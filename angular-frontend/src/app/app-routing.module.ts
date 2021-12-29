import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from './add-course/add-course.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { AddUserComponent } from './add-user/add-user.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { CartComponent } from './cart/cart.component';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { NotesComponent } from './notes/notes.component';
import { OrganizationComponent } from './organization/organization.component';

const routes: Routes = [
  { path: '', component: InitialPageComponent },
  
  { path: 'user/bookmarks', component: BookmarksComponent, data: {'tab': 0} },
  { path: 'user/cart', component: CartComponent, data: {'tab': 1} },
  { path: 'user/notes', component: NotesComponent, data: {'tab': 2} },
  { path: 'user/notes/add', component: AddNoteComponent },
  { path: 'user/notes/:id', component: EditNoteComponent },
  
  { path: 'organization', component: OrganizationComponent },
  { path: 'organization/add-course', component: AddCourseComponent },

  { path: 'register', component: AddUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
