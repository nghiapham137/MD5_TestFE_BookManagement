import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBook } from './Book';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  private readonly API_URL = "http://localhost:3000/books";
  constructor(private httpClient: HttpClient) { }

  getBooks(count = 10): Observable<IBook[]> {
    return this.httpClient.get<IBook[]>(this.API_URL).pipe(map(response => response.filter((book, i)=> i < count)));
  }

  getBookById(id: number): Observable<IBook> {
    return this.httpClient.get<IBook>(`${this.API_URL}/${id}`);
  }

  createBook(book: Partial<IBook>): Observable<IBook> {
    return this.httpClient.post<IBook>(this.API_URL, book);
  } 

  updateBook(id: number, book: IBook): Observable<any> {
    return this.httpClient.put<IBook>(`${this.API_URL}/${id}`, book );
  }

  deleteBook(id: number): Observable<any> {
    return this.httpClient.delete<IBook>(`${this.API_URL}/${id}`);
  }
}
