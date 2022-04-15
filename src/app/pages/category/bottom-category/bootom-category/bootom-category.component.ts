import { Component, OnInit } from '@angular/core';
import { SnackbarHelperService } from 'src/app/_helpers/snackbar-helper/snackbar-helper.service';
import { BottomCategoryService } from 'src/app/_services/categoryServices/bottom-category.service';
import { SubCategoryService } from 'src/app/_services/categoryServices/sub-category.service';

@Component({
  selector: 'app-bootom-category',
  templateUrl: './bootom-category.component.html',
  styleUrls: ['./bootom-category.component.css']
})
export class BootomCategoryComponent implements OnInit {

  constructor(private _bcs:BottomCategoryService,
    private _scs:SubCategoryService,
    private _shs:SnackbarHelperService) { }

    ngOnInit(): void {
      this.fetchSubCategoryList();
    }
  

    progressBar:any ={
      dynamicValue:false
    }


    bottomCategoryForm:any={
      "bottomCategoryName": "",
      "defaultName": "",
      "fileName": "",
      "fileUrl": "",
      "shortDescription": "",
      "longDescription": "",
      "status": true,
      "storingDateTime": "",
      "sequenceNum": "",
      "subCategoryCloneId":"",
      "bgColor":"" ,
      "subCategoryModel":{
        "id":""
      },
  }
  

  subCategoryList:any;

  fetchSubCategoryList()
  {
    this._scs.fetchSubCategoryService().subscribe(data=>{
      this.subCategoryList = data;
    },error=>{
      console.log(error);
      
    })
  }

  subCategoryId:any;
  selectSubCategory(e:any)
  {
    this.subCategoryId =  e.target.value;
    console.log(this.subCategoryId);
    
  }


  createBottomCategory()
  {
    this.bottomCategoryForm.subCategoryModel.id = this.subCategoryId;
    this.bottomCategoryForm.subCategoryCloneId = this.subCategoryId;

    console.log(this.bottomCategoryForm);
    
          //progress-bar-start
          this.progressBarStart();

          this._bcs.createBottomCategoryService(this.bottomCategoryForm).subscribe(data=>{
            //console.log(data);

            //snack bar running..
            this._shs.OpenSnackbar_horizontalPosition_start("Bottom Category Created","close",2000);

              //progress-bar-stop
              this.progressBarStop();

          },
          error=>{
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
