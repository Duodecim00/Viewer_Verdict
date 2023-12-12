import { Component, OnInit } from '@angular/core';

import { InfiniteScrollCustomEvent } from '@ionic/angular';
@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  items:any = [];
  items0:any = [];

  handleRefresh(event: any) {
    setTimeout(() => {
      //aqui pones las llamadas a las funciones que quieres actualizar
      event.target.complete();
    }, 2000);
  }

  ngOnInit() {
    this.generateItems();
  }

   private generateItems() {
      //controla el primer carrusel
    const count = this.items.length + 1;
    const count0 = this.items0.length + 1;
    for (let i = 0; i < 8; i++) {
      this.items.push(`Item ${count + i}`);
    }
      //controla el segundo carrusel
    for (let i = 0; i < 8; i++) {
      this.items0.push(`Item ${count0 + i}`);
    }
  }
  //controla el scroll
  onIonInfinite(ev:Event) {
    this.generateItems();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }

  public progress = 0;

 
}
