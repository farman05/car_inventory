import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from '../../../service/api.service';

@Component({
  selector: 'app-model-listing',
  templateUrl: './model-listing.component.html',
  styleUrls: ['./model-listing.component.css']
})
export class ModelListingComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  responseData;
  modelList;
  modelListArray;
  selectedData = [];
  success: boolean;
  error: boolean;
  msg: boolean;
  disabled: boolean;
  constructor(private api: ApiService) { }
  @ViewChild('close') close: ElementRef;
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };

    this.getData();
  }

  getData() {
    this.api.getAllData('carmodel/modelData').subscribe((response) => {
      this.responseData = response;
      if (this.responseData.success) {
        this.modelList = this.responseData.result;
        this.modelListArray = this.responseData.result;
      }
    });
  }

  view(index) {
    console.log(this.modelListArray[index]);
    this.selectedData = [];
    this.selectedData.push(this.modelListArray[index]);
  }

  sold(id) {
    this.disabled = true;
    const data = {
          id: id
    };

    return this.api.postData('carmodel/soldModel', data).subscribe( (response) => {
      this.responseData = response;
      if (this.responseData.success) {
          this.success = true;
          this.msg = this.responseData.msg;
      } else {
        this.error = true;
          this.msg = this.responseData.msg;
      }

      setTimeout(function() {
        this.success = false;
        this.error = false;
        this.modelList = [];
        this.modelListArray = [];
        const el: HTMLElement = this.close.nativeElement as HTMLElement;
        el.click();
        this.getData();
        this.disabled = false;
    }.bind(this), 2000);

    });
  }

}
