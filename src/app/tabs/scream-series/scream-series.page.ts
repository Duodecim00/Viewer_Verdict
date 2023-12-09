import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scream-series',
  templateUrl: './scream-series.page.html',
  styleUrls: ['./scream-series.page.scss'],
})
export class ScreamSeriesPage implements OnInit{

  items:any = [];
  itemsVideo:any = [];
  itemsSeasons:any = [];

  ngOnInit() {
    for (let i = 1; i < 9; i++) {
      this.items.push(`${i}`);
    }

    for (let i = 1; i < 4; i++) {
      this.itemsVideo.push(`${i}`);
    }
    for (let i = 1; i < 7; i++) {
      this.itemsSeasons.push(`${i}`);
    }

    console.log(this.data);
  }

  stars: number[] = [1,2,3,4,5]

  selectedValue: number = 0;
  isMouseover = true;

  public data :any;

  constructor() { }


  //control del modal
  isModalRating = false;
  isModalAudience = false;
  isModalCritics = false

  setOpenAudience(isOpen: boolean) {
    this.isModalAudience = isOpen;
  }

  setOpenCritics(isOpen: boolean) {
    this.isModalCritics = isOpen;
  }

  setOpenRating(isOpen: boolean) {
    this.isModalRating = isOpen;
  }

  //counting stars
  countStar(star: number){
    this.isMouseover = false;
    this.selectedValue = star;
    this.data = this.selectedValue;
    console.log(this.data);
  }

  //for adding star

  addClass(star:number){
    if(this.isMouseover){
      this.selectedValue = star;
      console.log(this.selectedValue); 
    }
  }

  //for removing star
  removeClass(){
    if(this.isMouseover){
      this.selectedValue = 0;
      console.log(this.selectedValue);
    }
  }

}