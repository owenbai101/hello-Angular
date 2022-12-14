import { Component } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent {
isFavorite:boolean;
}

onclick(){
  this.isFavorite = !this.isFavorite;
}
