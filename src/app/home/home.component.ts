import { HousingService } from './../housing.service';
import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocationComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService  = inject(HousingService);
  filteredLocationList: HousingLocation[] = [];

  constructor(){
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.filteredLocationList = this.housingService.getAllHousingLocations();
  }

  filterResults(text: string){
    if(!text){
      this.filteredLocationList = this.housingLocationList;
    }else{
      this.filteredLocationList = this.housingLocationList.filter(
        housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
                            || housingLocation?.state.toLowerCase().includes(text.toLowerCase())
      );
    }
  }
}
