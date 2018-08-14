import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ApiService} from '../../../service/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-model',
  templateUrl: './add-model.component.html',
  styleUrls: ['./add-model.component.css']
})
export class AddModelComponent implements OnInit {
  addModelForm: FormGroup;
  constructor(private formbuilder: FormBuilder, private api: ApiService, private router: Router) { }
  submitted: boolean;
  yearArray: Array<String> = [];
  minYear = 1920;
  responseData;
  manufacturers = [];
  colors = [];
  dummyImg = [];
  imageSrc = '' ;
  imgSelected;
  fileInput;
  success: boolean;
  error: boolean;
  msg: String;
  ngOnInit() {
    this.addModelForm = this.formbuilder.group({
              manufacturer_id: ['', Validators.required],
              name: ['', Validators.required],
              color_id: ['', Validators.required],
              registration_number: ['', Validators.required],
              manufacturing_year: ['', Validators.required],
              note : ['', Validators.required],
              quantity : ['', Validators.required],
              file: ['', Validators.required]
    });

    this.generateYear();
    this.getInitailData();
  }

   get f() {
    return this.addModelForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.addModelForm.valid) {
        const uploadData = new FormData();
        Object.keys(this.addModelForm.controls).forEach(key => {
          if (key !== 'file') {
            uploadData.append(key, this.addModelForm.value[key]);
          }
        });
        uploadData.append('myFile', this.fileInput, this.fileInput.name);
        this.api.postData('carmodel/createModel', uploadData).subscribe((response) => {
           this.responseData = response;
           if (this.responseData.success) {
              this.msg = this.responseData.msg;
              this.success = true;
              setTimeout(function() {
                this.success = false;
                this.error = false;
                this.msg = '';
                this.router.navigate(['/model']);
            }.bind(this), 2000);
           } else {
            this.msg = this.responseData.msg;
            this.success = false;
           }

        });
    }
  }

  getInitailData() {
    this.api.getAllData('carmodel/getInfo').subscribe((response) => {
        console.log(response);
        this.responseData = response;
        if (this.responseData.success) {
          this.manufacturers = this.responseData.result.manufacturers;
          this.colors = this.responseData.result.colors;
        }
    });
  }

  generateYear() {
      const date = new Date();
      const currentYear = date.getFullYear();
       let i;
      for ( i = currentYear; i >= this.minYear; i-- ) {
          this.yearArray.push(i);
      }
  }

  onFileChanged(event) {
    this.dummyImg = [];
    this.imgSelected = true;
    const file = event.target.files[0];
    this.fileInput = file;
    if (event.srcElement.files.length) {

      let file = event.srcElement.files[0];
      let reader = new FileReader();
      reader.onloadend = () => {
              this.imageSrc = reader.result;
              this.addModelForm.patchValue({
                file: reader.result
             });
          };
      reader.readAsDataURL(file);
      // $("input").after(img);
  }

  }

}
