import { Component, OnInit } from '@angular/core';
import { DateTime } from './models/date-time';
import { map } from 'rxjs/operators';
import { DateTimeService } from './services/date-time.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  username = 'Marco Ruch';

  datetime: string;

  constructor(private dateTimeService: DateTimeService) { }

  ngOnInit(): void {
    timer(1000, 200).subscribe(
      () => this.getDate()
    );
  }

  getDate(): void {
    this.dateTimeService.getDateTime().subscribe(date => this.datetime = date.toISOString()
    );
  }

  changeUsername(): void {
    this.username = 'Thomas';
  }
}
