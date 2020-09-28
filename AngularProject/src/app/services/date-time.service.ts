import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DateTime } from '../models/date-time';

@Injectable({ providedIn: 'root' })
export class DateTimeService {
    constructor(private httpClient: HttpClient) { }

    getDateTime(): Observable<Date> {
        return this.httpClient.get<DateTime>('http://date.jsontest.com/').pipe(
            map(x => new Date(`${x.date} ${x.time}`))
        );
    }
}
