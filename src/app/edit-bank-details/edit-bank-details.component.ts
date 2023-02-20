import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-bank-details',
  templateUrl: './edit-bank-details.component.html',
  styleUrls: ['./edit-bank-details.component.css']
})
export class EditBankDetailsComponent implements OnInit{
  constructor(private router:Router,
    private route:ActivatedRoute){}


ngOnInit(): void {
// console.log(this.route.snapshot.paramMap.get('id'))
}


// onClickback(){
// this.router.navigate(['/BankDetails'])
// }
}
