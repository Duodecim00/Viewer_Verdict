import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-scream-movies',
  templateUrl: './scream-movies.page.html',
  styleUrls: ['./scream-movies.page.scss'],
})
export class ScreamMoviesPage{

  stars: number[] = [1,2,3,4,5]

  selectedValue: number = 0;
  isMouseover = true;

  public data :any;

  constructor() { }



  ngOnInit() {
    console.log(this.data);
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
