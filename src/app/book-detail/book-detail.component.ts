import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookServiceService } from '../book-service.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
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
    this.service.getBookById(id).subscribe(respone =>{
      this.currentBook = respone;
    }, error=> {
      window.alert("error");
    })
  }

}
