import { Component, OnInit } from '@angular/core';
import { SnackbarHelperService } from 'src/app/_helpers/snackbar-helper/snackbar-helper.service';
import { RootCategoryService } from 'src/app/_services/categoryServices/root-category.service';
import { SubCategoryService } from 'src/app/_services/categoryServices/sub-category.service';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent implements OnInit {

  constructor(private _rcs:RootCategoryService,
              private _scs:SubCategoryService,
               private _shs:SnackbarHelperService) { }

  ngOnInit(): void {
    this.fetchRootCategoryData();
  }

  fetchRootCategory:any;

  progressBar:any ={
    dynamicValue:false
  }

  subCategoryForm:any={
    "subCategoryName": "",
    "defaultName": "",
    "fileName": "",
    "fileUrl": "",
    "shortDescription": "",
    "longDescription": "",
    "status": true,
    "storingDateTime": "",
    "sequenceNum": "",
    "bgColor":"" ,
    "rootCategoryModel":{
        "id":""
    }
    
}




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
    this.rootCategoryId =  e.target.value;
  }


  createSubCategory()
  {
     //progress-bar-start
     this.progressBarStart();

     //set root-category to sub-category form
    this.subCategoryForm.rootCategoryModel.id=this.rootCategoryId;

    this._scs.createSubCategoryService(this.subCategoryForm).subscribe(data=>{
      console.log(data);

      //snack bar running..
      this._shs.OpenSnackbar_horizontalPosition_start("Sub Category Created","close",2000);

       //progress-bar-stop
       this.progressBarStop();

    },
    error=>{
       console.log(error);
       //progress-bar-stop
       this.progressBarStop();
      
    });
      
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
