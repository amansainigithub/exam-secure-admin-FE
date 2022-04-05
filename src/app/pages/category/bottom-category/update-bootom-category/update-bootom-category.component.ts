import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { SnackbarHelperService } from 'src/app/_helpers/snackbar-helper/snackbar-helper.service';
import { BottomCategoryService } from 'src/app/_services/categoryServices/bottom-category.service';
import { SubCategoryService } from 'src/app/_services/categoryServices/sub-category.service';

@Component({
  selector: 'app-update-bootom-category',
  templateUrl: './update-bootom-category.component.html',
  styleUrls: ['./update-bootom-category.component.css']
})
export class UpdateBootomCategoryComponent implements OnInit {

  progressBar:any ={
    dynamicValue:false
  }

  constructor(private _activateRouter:ActivatedRoute,
                private _scs:SubCategoryService,
                private _bcs:BottomCategoryService,private _shs:SnackbarHelperService) { }

  bottomCategoryId:any;              
  ngOnInit(): void {

    this.bottomCategoryId=this._activateRouter.snapshot.params.id;

    //get Sub Category List
    this.fetchSubCategoryData();

    //get Bottom Category By Id
    this.getBottomCategoryById();


  }
 
  subCategoryList:any;
  public fetchSubCategoryData()
  {
      //progress-bar-start
      this.progressBarStart();

      this._scs.fetchSubCategoryService().subscribe(data=>{
         this.subCategoryList=data;
         //console.log(data);
          //progress-bar-stop
          this.progressBarStop();
      },error=>{
          console.log(error);
          //progress-bar-stop
          this.progressBarStop();
      })
  }


  bottomCategoryForm:any;
  public getBottomCategoryById()
  {
      //progress-bar-start
      this.progressBarStart();

      this._bcs.getBottomCategoryByIdService(this.bottomCategoryId).subscribe(data=>{
         this.bottomCategoryForm=data;
        // console.log(data);
          //progress-bar-stop
          this.progressBarStop();
      },error=>{
          console.log(error);
          //progress-bar-stop
          this.progressBarStop();
      })
  }

  subCategoryId:any;
  selectSubCategory(e:any)
  {
    this.subCategoryId =  e.target.value;
    //console.log(e.target.value);
    
    
  }


  updateBottomCategory()
  { //progress-bar-start
    this.progressBarStart();
    //console.log(this.bottomCategoryForm);
    //console.log(this.subCategoryId);

    this.bottomCategoryForm.subCategoryModel.id = this.subCategoryId;
    


     this._bcs.updateBottomCategoryService(this.bottomCategoryForm).subscribe(data=>{

      
       //snack bar running..
       this._shs.OpenSnackbar_horizontalPosition_start("Update Success","close",2000);
        //console.log(data);
         //progress-bar-stop
         this.progressBarStop();
     },error=>{
         console.log(error);
         //progress-bar-stop
         this.progressBarStop();
     })
  }


  
    //PROGRESS BAR START_STOP
    progressBarStart()
    {
      this.progressBar.dynamicValue=true;
    }
    progressBarStop()
    {
      this.progressBar.dynamicValue=false;
    }
  

}
