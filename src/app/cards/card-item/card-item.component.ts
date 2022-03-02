import {Component, Input, OnInit} from '@angular/core';
import {Card} from "../../models/card";
import {MatDialog} from "@angular/material/dialog";
import {CardModelComponent} from "../card-model/card-model.component";

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {

  @Input() card!: Card;
  constructor(
    private dialog:MatDialog
  ) { }

  ngOnInit(): void {
  }
openUpdateCardModel(card:Card):void{
   this.dialog.open(CardModelComponent,{
     width:'400px',
     data:card
   });
}
}
