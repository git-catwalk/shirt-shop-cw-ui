import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from "@angular/forms";
import { ActivatedRoute, Router} from "@angular/router";
import {PageEvent} from "@angular/material/paginator";
import {InvoiceItemsService} from "../services/invoiceitems.service";
import {InvoiceItems} from "../services/app-model";

@Component({
  selector: 'app-invoiceitems-table',
  templateUrl: './invoiceitems-table.component.html',
  styleUrls: ['./invoiceitems-table.component.scss']
})
export class InvoiceItemsTableComponent implements OnInit {

  private _currentSearchValue:string ='';
  private _currentPage: number = 1;
  private _pageSize: number = 20;
  public _dataLength: number = 0;

  dataSource:InvoiceItems[]  = [];

  tableColumns = [
    'id',
    'estimateId',
    'qty',
    'price',
    'amount',
    'action'
  ];

  constructor(private fb: FormBuilder,private service:InvoiceItemsService,private router: Router,private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.search();
  }

  public filterList(searchParam: string): void {
    this._currentSearchValue = searchParam;
    this._currentPage = 1;
    this.search();
  }

  search() {
    this.service.search(this._currentSearchValue,this._currentPage -1,this._pageSize).subscribe((p)=>{
      this.dataSource = p.content;
      this._dataLength = p.totalElements;
    })
  }

  add(){
    this.router.navigate(['/invoiceitems']);
  }

  rowClicked(row:any){
      let url = '/invoiceitems/' + row['id'];
      this.router.navigate([url]);
  }

  delete(element:any) {
      this.service.removeById(element.id).subscribe((t)=>{
        this.search();
      });
  }

  clone(element:any){
      this.service.getById(element.id).subscribe((t)=>{
        t.id = null;
        this.service.save(t).subscribe(t=>{
          this.search();
        })
      });
  }

  handlePage($event: PageEvent) {
    this._currentPage = $event.pageIndex + 1;
    this._pageSize = $event.pageSize;
    return this.search();
  }
}
