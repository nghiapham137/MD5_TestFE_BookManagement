import { Component, OnInit } from '@angular/core';
import { IBook } from '../Book';
import { BookServiceService } from '../book-service.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books : IBook[] = [];
  

  constructor(private service: BookServiceService) { }

  ngOnInit(): void {
    this.getAllBook();
  }

  getAllBook() {
    return this.service.getBooks().subscribe(next => (this.books = next), error => (this.books = []));
  }

}
