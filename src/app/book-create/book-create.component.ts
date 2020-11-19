import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../book-service.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  book: any = {
    title: '',
    author: '',
    description: ''
  }
  submitted = false;

  constructor(private service: BookServiceService) { }

  ngOnInit(): void {
  }

  createBook() {
    this.service.createBook(this.book).subscribe(
      respone => {
        this.submitted = true;
        this.book.reset({
          title:'',
          author: '',
          description: ''
        })
      }, error => {
        console.log("error")
      } 
    )
  }

}
