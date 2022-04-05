import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarHelperService } from 'src/app/_helpers/snackbar-helper/snackbar-helper.service';
import { RootCategoryService } from 'src/app/_services/categoryServices/root-category.service';
import { FetchRootCategoryComponent } from '../fetch-root-category/fetch-root-category.component';

@Component({
  selector: 'app-update-root-category',
  templateUrl: './update-root-category.component.html',
  styleUrls: ['./update-root-category.component.css']
})
export class UpdateRootCategoryComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {rootCategoryId: string},
              private _rcs:RootCategoryService,
              private _snackBar: MatSnackBar,private _shs:SnackbarHelperService) {
   }

   
  progressBar:any ={
    dynamicValue:false
  }


  ngOnInit(): void {
    console.log(this.data.rootCategoryId);
    this.getRootCategoryById();
  }

  rootCategoryForm:any;


  getRootCategoryById()
  {
    this._rcs.getRootCategoryByIdService(this.data.rootCategoryId).subscribe(data=>{
      this.rootCategoryForm = data;
      console.log(data);
      
    },error=>{
      console.log(error);
    })
  }

 

  updateRootCategory()
  {
     //progress-bar-start
    this.progressBarStart();

    this._rcs.updateRootCategoryService(this.rootCategoryForm).subscribe(data=>{
      console.log(data);
       //snack bar running..
       this._shs.OpenSnackbar_horizontalPosition_start("update success","close",2000);
     
       //progress-bar-stop
       this.progressBarStop();
    },error=>{
      console.log(error);

       //progress-bar-stop
       this.progressBarStop();
    })
  }



//Progress bar
  progressBarStart()
  {
    this.progressBar.dynamicValue=true;
  }

  progressBarStop()
  {
    this.progressBar.dynamicValue=false;
  }


}
