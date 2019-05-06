import {Component, OnInit} from '@angular/core';
import {BookService} from '../shared/book.service';
import {Observable} from 'rxjs';
import {BookModel} from '../shared/book-model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  public book$: Observable<BookModel[]>;
  public book: BookModel = new BookModel();

  constructor(private bookService: BookService) {

  }

  ngOnInit() {
    this.book = BookModel.emptyBookItem('12');
  }

  bookItemMentese(param: BookModel) {
    param = this.book;
    console.log(this.book);
    const ezmi = this.bookService.save(param);
    console.log(ezmi);
  }

  tesztSubmit() {
    this.book$ = this.bookService.getAll();
    console.log(this.book$);
  }

}
