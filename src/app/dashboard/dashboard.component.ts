import { Component } from '@angular/core';
import { Item } from '../../model/item';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { ItemserviceService } from 'src/services/itemservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {


  item : Item={
    id:'',
    shift:'',
    servertype:'',
    server : '',
    opco:'',
    time:0
  };

  constructor(private itemservice:ItemserviceService,private _snackBar: MatSnackBar){
  }
  add(){
    const current = new Date();
    const timestamp = current.getTime();
    this.item.time=timestamp;
    this.itemservice.add(this.item);
    // this.openSnackBar("Blog Added Sucessfully","Close")
    this.item.id="";
    this.item.shift="";
    this.item.server="";
    this.item.servertype="";
    this.item.opco="";
  }

}
