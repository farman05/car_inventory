import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {ApiService} from '../../../service/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


declare var $: any;

@Component({
  selector: 'app-manufacturerlist',
  templateUrl: './manufacturerlist.component.html',
  styleUrls: ['./manufacturerlist.component.css']
})
export class ManufacturerlistComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  manufacturerList: Array<any>;
  manufacturerForm: FormGroup;
  submitted = false;
  success: boolean;
  error: boolean;
  msg: string;
  disabled: boolean;
  responseData: any;
  constructor(private api: ApiService, private formBuilder: FormBuilder) { }
  @ViewChild('close') close: ElementRef;
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
    this.fetchData();
    this.manufacturerForm = this.formBuilder.group({
      name: ['', Validators.required]
  });
  }

   get f() { return this.manufacturerForm.controls; }

  fetchData() {
    this.api.getAllData('manufacturer/getAllManufacturers').subscribe((response) => {
          this.responseData = response;
         if (this.responseData.success) {
            this.manufacturerList = this.responseData.result;
         }
    });
  }

  onSubmit() {
    this.submitted = true;
    this.disabled = true;
    const data = this.manufacturerForm.value;
    // stop here if form is invalid
    if (this.manufacturerForm.invalid) {
        this.disabled = false;

        return;
    }

    this.api.postData('manufacturer/createManufacturer', data).subscribe((response) => {
      this.responseData = response;
          if (this.responseData .success) {
              this.msg = this.responseData .msg;
              this.success = true;
          } else {
            this.msg = this.responseData .msg;
              this.error = true;
          }

          setTimeout(function() {
            this.success = false;
            this.error = false;
            const el: HTMLElement = this.close.nativeElement as HTMLElement;
            el.click();
            this.fetchData();
            this.disabled = false;
        }.bind(this), 3000);
    });
}

openModal() {
  alert();
}

}
