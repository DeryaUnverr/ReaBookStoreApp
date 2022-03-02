import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CardsModule} from "./cards.module";
import {CardModelComponent} from "./card-model/card-model.component";
import {CardService} from "../services/card.service";
import {Card} from "../models/card";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  constructor(
    public dialog:MatDialog,
    public cardService:CardService
  ) { }

  ngOnInit(): void {
this.cardService.getCards();
  }
openAddCardModel():void{
this.dialog.open(CardModelComponent,{
    width:'400px'
  });

}

}
