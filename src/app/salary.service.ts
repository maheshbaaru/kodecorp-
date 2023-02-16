
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeeData } from './employee';
@Injectable()
export class SalaryService {

    constructor(private http: HttpClient) {}

    getCarsSmall() {
        return this.http.get('/showcase/resources/data/cars-small.json')
                    .toPromise()
                    .then((res:any) => <EmployeeData[]> res.data)
                    .then(data => { return data; });
    }
}