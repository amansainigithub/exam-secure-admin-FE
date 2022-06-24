import { Component, OnInit } from '@angular/core';
import { SnackbarHelperService } from 'src/app/_helpers/snackbar-helper/snackbar-helper.service';
import { BranchService } from 'src/app/_services/branchServices/branch.service';
import { BottomCategoryService } from 'src/app/_services/categoryServices/bottom-category.service';
import { RootCategoryService } from 'src/app/_services/categoryServices/root-category.service';
import { SubCategoryService } from 'src/app/_services/categoryServices/sub-category.service';
import { QuestionAnswerService } from 'src/app/_services/questionAnswerService/question-answer.service';
import { QuestionSetService } from 'src/app/_services/questionSetServices/question-set.service';

@Component({
  selector: 'app-bootom-category',
  templateUrl: './bootom-category.component.html',
  styleUrls: ['./bootom-category.component.css']
})
export class BootomCategoryComponent implements OnInit {

  constructor(private _bcs:BottomCategoryService,
    private _shs:SnackbarHelperService,
    private _branch:BranchService,
    private _qs:QuestionSetService,
    private _rcs:RootCategoryService,
    private _scs:SubCategoryService,
    private _qns:QuestionAnswerService) { }

    ngOnInit(): void {
       //Root
       this.fetchRootCategoryData();
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
  

   //ROOT CATEGORY LIST
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

   //selectBottomCategory
   selectRootCategory(e:any)
   {
    e.target.value;
    this.getSubCategoriesByRootCategoryId(e.target.value);
   }

   subCategoryList:any;
   getSubCategoriesByRootCategoryId(rootCategoryId:any)
 {
     //progress-bar-start
       this.progressBarStart();
 
         this._scs.getSubCategoriesByRootCategoryId(rootCategoryId).subscribe(data=>{
         this.subCategoryList=data;
         
         console.log(data);
           //progress-bar-stop
           this.progressBarStop();
       },error=>{
           console.log(error);
           //progress-bar-stop
           this.progressBarStop();
       })
 }
 
 



  // subCategoryList:any;
  // fetchSubCategoryList()
  // {
  //   this._scs.fetchSubCategoryService().subscribe(data=>{
  //     this.subCategoryList = data;
  //   },error=>{
  //     console.log(error);
      
  //   })
  // }

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
