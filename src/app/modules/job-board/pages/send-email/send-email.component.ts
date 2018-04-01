import { Component, OnInit } from '@angular/core';
import { Quote } from '../../../../core';
import { QuoteService } from '../../../../core/services';
import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent implements OnInit {
  show = false;
  quote: Quote = new Quote;
  loading = false;
  quoteSent = false;
  email = '';

  constructor(
    private quoteService: QuoteService
  ) { }

  ngOnInit() {
  }

  showForm() {
    this.show = !this.show;
  }

  submit(form: any) {
    if (!form.valid) {
      return;
    }
    this.loading = true;
    this.quoteService.create(this.quote)
      .finally(() => {
        this.loading = false;
      })
      .subscribe(
        (response) => {
          this.email = response.email;
          this.quoteSent = true;
        },
        (error) => {
        }
      );
  }

}
