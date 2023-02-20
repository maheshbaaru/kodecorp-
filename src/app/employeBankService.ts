import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employeBankInterface';




@Injectable()
export class EmployeService {
    
    private baseUrl = '../assets/data/employeeBankData.json';
    private httpOptions={
        headers:new HttpHeaders({
            'Content-type':'application/json'
        })
    }

    constructor(private http: HttpClient) { } 

    
    
  

    getEmployeeData() {
        return this.http.get<any>('../assets/data/employeeBankData.json')
            .toPromise()
            .then(res => <Employee[]>res.data)
            .then(data => { return data; console.log(data) });


    }

    creatEmployeDataAndPost(datas:any){
        this.http.post('../assets/data/employeeBankData.json',datas,this.httpOptions)
        console.log('succesfullyAdd')
        console.log(datas)
    }
}