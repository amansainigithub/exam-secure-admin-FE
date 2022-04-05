import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { SnackbarHelperService } from 'src/app/_helpers/snackbar-helper/snackbar-helper.service';
import { RootCategoryService } from 'src/app/_services/categoryServices/root-category.service';
import { SubCategoryService } from 'src/app/_services/categoryServices/sub-category.service';

@Component({
  selector: 'app-update-sub-category',
  templateUrl: './update-sub-category.component.html',
  styleUrls: ['./update-sub-category.component.css']
})
export class UpdateSubCategoryComponent implements OnInit {

 
  constructor(private _activateRouter:ActivatedRoute,
              private _scs:SubCategoryService,
              private _rcs:RootCategoryService,
              private _snackBar: MatSnackBar, private _shs:SnackbarHelperService) {
   }

   progressBar:any ={
    dynamicValue:false
  }

  subCategoryId:any;  
  ngOnInit(): void {

    this.subCategoryId=this._activateRouter.snapshot.params.id;

    //Calling Root Category List
    this.fetchRootCategoryData();

    //Calling By Sub Category
    this.getSubCategoryById();
  }


  fetchRootCategory:any;

  public fetchRootCategoryData()
  {
      //progress-bar-start
      this.progressBarStart();

      this._rcs.fetchRootCategoryService().subscribe(data=>{
         this.fetchRootCategory=data;
         console.log(data);
          //progress-bar-stop
          this.progressBarStop();
      },error=>{
          console.log(error);
          //progress-bar-stop
          this.progressBarStop();
      })
  }

  rootCategoryId:any;
  selectRootCategory(e:any)
  {
    console.log(e.target.value);
    this.rootCategoryId = e.target.value;
  }

  subCategoryForm:any;
  getSubCategoryById()
  {
    this._scs.getSubCategoryByIdService(this.subCategoryId).subscribe(data=>{
      this.subCategoryForm = data;
      console.log(data);
      
    },error=>{
      console.log(error);
    })
  }


  updateSubCategory()
  {
    //progress-bar-start
    this.progressBarStart();
    console.log("**********");
    
    this.subCategoryForm.rootCategoryModel.id = this.rootCategoryId;
     

    this._scs.updateSubCategoryService(this.subCategoryForm).subscribe(data=>{
      console.log(data);
     
       //snack bar running..
       this._shs.OpenSnackbar_horizontalPosition_start("Update Success","close",2000);
     
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
