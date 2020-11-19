import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookDeleteComponent } from './book-delete/book-delete.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import {BookListComponent} from './book-list/book-list.component';
import { BookServiceService } from './book-service.service';
import { BookUpdateComponent } from './book-update/book-update.component';

const routes: Routes = [
  {
    path: '',
    component: BookListComponent
  },
  {
    path:'book/create',
    component: BookCreateComponent
  },
  {
    path: 'book/:id',
    component: BookDetailComponent
  },
  {
    path: 'book/update/:id',
    component: BookUpdateComponent
  },
  {
    path: 'book/delete/:id',
    component: BookDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
