import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  quote: any;

  ngOnInit(): void {
    this.getRandomQuote();
  }

  getRandomQuote() {
    this.http
      .get('https://api.quotable.io/random')
      .subscribe((data) => (this.quote = data));
  }

  tweet() {
    const realText = `${this.quote.content} \nBy ${this.quote.author}`;
    window.location.href = `https://twitter.com/intent/tweet?text=${realText}`;
  }
}
