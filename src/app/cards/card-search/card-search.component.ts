import { Component} from '@angular/core';
import {CardService} from "../../services/card.service";
import {Card} from "../../models/card";

@Component({
  selector: 'app-card-search',
  templateUrl: './card-search.component.html',
  styleUrls: ['./card-search.component.scss']
})
export class CardSearchComponent {

  constructor(
    private cardService:CardService
  ) { }

search(searchText:string):void{
searchText=searchText.toLocaleLowerCase();
this.cardService.filteredCards=this.cardService.cards.filter((card:Card)=>{
  return card.bookName.toLocaleLowerCase().indexOf(searchText)>-1 || ( card.genre  && card.genre.toLocaleLowerCase().indexOf(searchText)>-1)|| ( card.author  && card.author.toLocaleLowerCase().indexOf(searchText)>-1);
});
}
}
