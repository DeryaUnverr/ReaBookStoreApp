import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CardService} from "../../services/card.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Card} from "../../models/card";
import {SnackbarService} from "../../services/snackbar.service";

@Component({
  selector: 'app-card-model',
  templateUrl: './card-model.component.html',
  styleUrls: ['./card-model.component.scss']
})
export class CardModelComponent implements OnInit {
cardForm!:FormGroup;
showSpinner:boolean=false;
  constructor(
    private dialogRef:MatDialogRef<CardModelComponent>,
    private fb:FormBuilder,
    private  cardService:CardService,
    private _snackBar: MatSnackBar,
    private  snackbarService: SnackbarService,
    @Inject(MAT_DIALOG_DATA)public data:Card
  ) { }

  ngOnInit(): void {
    console.log(this.data)
    this.cardForm=this.fb.group(
      {
        bookName:[this.data?.bookName || '',Validators.required],
        author:[this.data?.author || '',Validators.required],
        publisher:[this.data?.publisher || '',Validators.required],
        image:this.data?.image || '',
        description:this.data?.description || '',
        genre:this.data?.genre || ''

      });
  }
addCard():void{
this.showSpinner=true;
this.cardService.addCard(this.cardForm.value)
  .subscribe((res:any)=>{
    this.getSuccess('Kitap Ekleme İşlemi Başarılı');
  },(err:any)=>{
    this.getError("Kitap Eklenirken Bir Sorun Oluştu");
  });
}
updateCard():void
{
  this.showSpinner=true;
this.cardService.updateCard(this.cardForm.value,this.data.id)
  .subscribe((res:any)=>{
    this.getSuccess('Kitap Düzenleme İşlemi Başarılı');
  },(err:any)=>{
this.getError("Kitap Güncellenirken Bir Sorun Oluştu");
  });
}
deleteCard():void{
  this.showSpinner=true;
    this.cardService.deleteCard(this.data.id)
      .subscribe((res:any)=>{
      this.getSuccess('Kitap Silme İşlemi Başarılı')
      },(err:any)=>{
        this.getError("Kitap Silinirken Bir Sorun Oluştu");
      });
}

getSuccess(message:string):void{
 this.snackbarService.createSnackbar('success',message);
  this.cardService.getCards();
  this.showSpinner=false;
  this.dialogRef.close();
}
getError(message:string):void{
  this.snackbarService.createSnackbar('error',message);
  this.showSpinner=false;
}

}
