import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { BasicMapDisplayComponent } from '../basic-map-display/basic-map-display.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(public dialog: MatDialog) {
    this.zoom = 2;
    this.lat = 0;
    this.lng = 0;

  }
  zoom: number;
  lat: number;
  lng: number;

  
  handleInputChange(event: Event) {
    const target = <HTMLInputElement> event.target;
    if (target) {
      if (target.name === 'zoom') {
        this.zoom = parseFloat(target.value);
      }
      if (target.name === 'lat') {
        this.lat = parseFloat(target.value);
      }
      if (target.name === 'lng') {
        this.lng = parseFloat(target.value);
      }
    }
  }
  handleMapChange(event: H.map.ChangeEvent) {
    if (event.newValue.lookAt) {
      const lookAt = event.newValue.lookAt;
      this.zoom = lookAt.zoom;
      this.lat = lookAt.position.lat;
      this.lng = lookAt.position.lng;
    }
  }
  
  openMapWithAddressDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '800px';
    this.dialog.open(BasicMapDisplayComponent, { disableClose: false})
    .afterClosed()
  }

  ngOnInit(): void {
  }
  
}
