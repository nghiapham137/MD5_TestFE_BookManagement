import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookServiceService } from '../book-service.service';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent implements OnInit {
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

  updateBook() {
    this.service.updateBook(this.id, this.currentBook).subscribe(res => {
      this.currentBook = res;
    }, error => window.alert('error'));
  }

}
