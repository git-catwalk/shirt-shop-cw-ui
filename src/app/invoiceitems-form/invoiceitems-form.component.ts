import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from "@angular/forms";
import { ActivatedRoute, Router} from "@angular/router";
import {InvoiceItemsService} from "../services/invoiceitems.service";
import {InvoiceItems} from "../services/app-model";

@Component({
  selector: 'app-invoiceitems-form',
  templateUrl: './invoiceitems-form.component.html',
  styleUrls: ['./invoiceitems-form.component.scss']
})
export class InvoiceItemsFormComponent implements OnInit {
  item:InvoiceItems;
  form:FormGroup;

  constructor(private fb: FormBuilder,private service:InvoiceItemsService,private router: Router,private route: ActivatedRoute) {
    this.item = this.emptyItem();
    this.form = this.createForm();
  }

  ngOnInit(): void {
     let id = this.route.snapshot.paramMap.get('id');
     if(id){
         this.service.getById(id).subscribe(i=>{
             this.item = i;
             this.form = this.createForm();
         });
     }
  }

  public save() {
    this.service.save(Object.assign({}, this.item,this.form.getRawValue())).subscribe(()=>{
        this.back();
    });
  }

  public back(){
     this.router.navigate(['/invoiceitemss']).then();
  }

  public emptyItem():InvoiceItems{
    return {
			id:null,
			estimateId:0,
			qty:0,
			price:0,
			amount:0,
			description:'',
		};
  }

  public createForm():FormGroup{
     return this.fb.group({
        "estimateId": [this.item.estimateId],
        "qty": [this.item.qty],
        "price": [this.item.price],
     });
  }
}
