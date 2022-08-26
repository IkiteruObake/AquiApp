import { Component, ViewChild, ElementRef, Input, SimpleChanges, EventEmitter, Output } from '@angular/core';
import H from '@here/maps-api-for-javascript';

@Component({
  selector: 'app-jsmap',
  templateUrl: './jsmap.component.html',
  styleUrls: ['./jsmap.component.css']
})
export class JsmapComponent {

  private map?: H.Map;

  @ViewChild('map') mapDiv?: ElementRef; 
  @Input() public zoom = 2;
  @Input() public lat = 0;
  @Input() public lng = 0;
  private timeoutHandle: any;
  @Output() notify = new EventEmitter();

  ngOnChanges(changes: SimpleChanges) {
      clearTimeout(this.timeoutHandle);
      this.timeoutHandle = setTimeout(() => {
        if (this.map) {
          if (changes['zoom'] !== undefined) {
            this.map.setZoom(changes['zoom'].currentValue);
          }
          if (changes['lat'] !== undefined) {
            this.map.setCenter({lat: changes['lat'].currentValue, lng: this.lng});
          }
          if (changes['lng'] !== undefined) {
            this.map.setCenter({lat: this.lat, lng: changes['lng'].currentValue});
          }
        }
      }, 100);
  }


  ngAfterViewInit(): void {
    if (!this.map && this.mapDiv) {
      // instantiate a platform, default layers and a map as usual
      const platform = new H.service.Platform({
        apikey: '{TqHEhMwVxtaTIuOXve1TRAkCdxjNjgk_3zjQdbdF8bo}'
      });
      const layers = platform.createDefaultLayers();
      const map = new H.Map(
        this.mapDiv.nativeElement,
        layers.vector.normal.map,
        {
          pixelRatio: window.devicePixelRatio,
          center: {lat: 0, lng: 0},
          zoom: 2,
        },
      );
      this.map = map;
      map.addEventListener('mapviewchange', (ev: H.map.ChangeEvent) => {
        this.notify.emit(ev)
      });
      new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
      
    }
    
  }

}
