import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  f = [
    {name: 'Amsterdam'},
    {name: 'Bogota'},
    {name: 'Buenos Aires'},
    {name: 'Cairo'},
    {name: 'Dhaka'},
    {name: 'Edinburgh'},
    {name: 'Geneva'},
    {name: 'Genoa'},
    {name: 'Glasgow'},
    {name: 'Hanoi'},
    {name: 'Hong Kong'},
    {name: 'Islamabad'},
    {name: 'Istanbul'},
    {name: 'Jakarta'},
    {name: 'Kiel'},
    {name: 'Kyoto'},
    {name: 'Le Havre'},
    {name: 'Lebanon'},
    {name: 'Lhasa'},
    {name: 'Lima'},
    {name: 'London'},
    {name: 'Los Angeles'},
    {name: 'Madrid'},
    {name: 'Manila'},
    {name: 'New York'},
    {name: 'Olympia'},
    {name: 'Oslo'},
    {name: 'Panama City'},
    {name: 'Peking'},
    {name: 'Philadelphia'},
    {name: 'San Francisco'},
    {name: 'Seoul'},
    {name: 'Taipeh'},
    {name: 'Tel Aviv'},
    {name: 'Tokio'},
    {name: 'Uelzen'},
    {name: 'Washington'},
  ] ;
  foodListBackup: any;
  foodList: any;
  constructor() { }

  ngOnInit() {
    this.foodList = this.f;
  }

  async filterList(evt) {
    this.foodList = this.f;
    const searchTerm = evt.srcElement.value;

    if (!searchTerm) {
      return;
    }

    this.foodList = this.foodList.filter(currentFood => {
      if (currentFood.name && searchTerm) {
        return (currentFood.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      }
    });
  }

}
