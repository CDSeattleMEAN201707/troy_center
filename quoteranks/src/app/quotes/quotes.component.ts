import { Component } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})

export class QuotesComponent {
  currquote = new Quote();
  quotes = [];
  quoteid = 0;

  submitNewQuote() {
    this.currquote.id=this.quoteid
    this.quotes.push(this.currquote)
    this.quoteid++
    this.currquote = new Quote();
  }
  processVoteUP(id) {
    console.log("Vote UP")
    this.quotes[id].votes++
  }
  processVoteDOWN(id) {
    console.log("Vote DOWN")
    this.quotes[id].votes--
  }
  processDELETE(id) {
    console.log("DELETE")
    console.log("received ID: ",id)
    this.quotes[id].active = 0;
    console.log(this.quotes)
  }
  
}
