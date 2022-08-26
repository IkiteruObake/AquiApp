import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { BackendServicesService } from '../services/backend-services.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { basicAtoBRoute } from '../interfaces/backend-interfaces';
import { takeWhile } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-basic-map-display',
  templateUrl: './basic-map-display.component.html',
  styleUrls: ['./basic-map-display.component.css'],
  providers: [BackendServicesService, {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'legacy'}}]
})
export class BasicMapDisplayComponent implements OnInit, OnDestroy {
public confForm: FormGroup | undefined;
private alive: boolean = true;


  constructor(
    public dialogRef: MatDialogRef<BasicMapDisplayComponent>,
    private backEndService: BackendServicesService,
    @Inject(MAT_DIALOG_DATA)
    public data: basicAtoBRoute,
    public fb: FormBuilder,
    private http: HttpClient
  ) {
    dialogRef.disableClose = true;
    this.confForm = this.fb.group({
      transportMode: ['', Validators.required],
      origin: ['', Validators.required],
      destination: ['', Validators.required],
      apiKey: ['TqHEhMwVxtaTIuOXve1TRAkCdxjNjgk_3zjQdbdF8bo']
    });
   }
   mapWithAddressService = this.backEndService;
   formControl = new FormControl('', []);

  ngOnInit() {
//    this.initform();
  }
/**  initform() {
    this.confForm = this.fb.group({
      transportMode: ['', [Validators.required]],
      origin: ['', [Validators.required]],
      destination: ['', [Validators.required]]
    });
  }
  */
  ngOnDestroy(): void {
    this.alive = false;
  }

  closeDialog() {
    this.dialogRef.close();
  }

  onSubmit() {
    var formData: any = new FormData();
    formData.append("transportMode", this.confForm?.get('transportMode')?.value);
    formData.append("origin", this.confForm?.get('origin')?.value);
    formData.append("destination", this.confForm?.get('destination')?.value);
    formData.append("apiKey", this.confForm?.get('apiKey')?.value);
    this.http
    .post('https://router.hereapi.com/v8/routes', formData)
    .subscribe({
      next: (response) =>  console.log(response),
      error: (error) => console.log(error)
      
    });
  } 
 
}
