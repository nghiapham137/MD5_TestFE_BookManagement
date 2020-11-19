import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookServiceService } from '../book-service.service';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit {

  id: any;
  currentBook: any = {
    title:'',
    author:'',
    description: ''
  }
  constructor(private service: BookServiceService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params.id;
    this.getBookById(this.id);
   }

  ngOnInit(): void {
  }

  getBookById(id) {
    this.service.getBookById(id).subscribe(res =>{
      this.currentBook = res;
    }, error=> {
      window.alert("error");
    })
  }

  deleteBook() {
    this.service.deleteBook(this.id).subscribe(res =>{
      window.alert("Delete Success!");
    }, error=> {
      window.alert("error");
    })
  }

}
