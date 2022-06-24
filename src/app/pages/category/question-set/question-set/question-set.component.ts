import { Component, OnInit } from '@angular/core';
import { SnackbarHelperService } from 'src/app/_helpers/snackbar-helper/snackbar-helper.service';
import { BranchService } from 'src/app/_services/branchServices/branch.service';
import { BottomCategoryService } from 'src/app/_services/categoryServices/bottom-category.service';
import { RootCategoryService } from 'src/app/_services/categoryServices/root-category.service';
import { SubCategoryService } from 'src/app/_services/categoryServices/sub-category.service';
import { ChapterService } from 'src/app/_services/chapterServices/chapter.service';
import { QuestionSetService } from 'src/app/_services/questionSetServices/question-set.service';

@Component({
  selector: 'app-question-set',
  templateUrl: './question-set.component.html',
  styleUrls: ['./question-set.component.css']
})
export class QuestionSetComponent implements OnInit {

  constructor(private _chapter:ChapterService,
    private _bcs:BottomCategoryService,
    private _shs:SnackbarHelperService,
    private _branch:BranchService,
    private _qs:QuestionSetService,
    private _rcs:RootCategoryService,
    private _scs:SubCategoryService,) { }

  ngOnInit(): void {

    //getAllBranch
   // this.getAllBranchList();

    //Root
    this.fetchRootCategoryData();
  }

  
  progressBar:any ={
    dynamicValue:false
  }

  questionSetForm:any={
    "questionSetName": "",
    "defaultName": "",
    "fileName": "",
    "fileUrl": "",
    "shortDescription": "",
    "longDescription": "",
    "status": true,
    "storingDateTime": "",
    "sequenceNum": "",
    "questionSetCloneId":"",
    "passPercentage":"",
    "questionSetDuration":"",
    "experience":"",
    "paragraph":"",
    "title":"",
    "bgColor":"",
    "chaptersModel":{
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
 
 
 selectSubCategory(e:any)
 {
   this.getBottomCategoriesBySubCategoryId(e.target.value);
 }
 
 
 
   bottomCategoryList:any;
   public getBottomCategoriesBySubCategoryId(subCategoryId:any)
   {
       //progress-bar-start
       this.progressBarStart();
 
       this._bcs.getBottomCategoriesBySubCategoryId(subCategoryId).subscribe(data=>{
          this.bottomCategoryList=data;
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
   selectBottomCategory(e:any)
   {
    e.target.value;
    this.selectBranchByBottomCategoryId(e.target.value);
   }

   branchList:any;
   selectBranchByBottomCategoryId(bottomCategoryId:any)
   {
       //progress-bar-start
         this.progressBarStart();
   
           this._branch.getBranchListByBottomCategoryId(bottomCategoryId).subscribe(data=>{
           this.branchList=data;
           
           console.log(data);
             //progress-bar-stop
             this.progressBarStop();
         },error=>{
             console.log(error);
             //progress-bar-stop
             this.progressBarStop();
         })
   }
//getBranchList
// branchList:any;
// getAllBranchList()
// {
// //progress-bar-start
// this.progressBarStart();

// this._branch.getAllBranchService().subscribe(data=>{
//    this.branchList=data;
   
//    console.log(data);
//     //progress-bar-stop
//     this.progressBarStop();
// },error=>{
//     console.log(error);
//     //progress-bar-stop
//     this.progressBarStop();
// })
// }


selectBranchId(e:any)
{
  console.log(e.target.value);
  this.getChapterListByBranchId(e.target.value);  
}


//getChapterListByBranchId
chapterList:any;
getChapterListByBranchId(branchId:any)
{
//progress-bar-start
this.progressBarStart();

this._chapter.getChaptersByBranchId(branchId).subscribe(data=>{
   this.chapterList=data;
   console.log(data);
    //progress-bar-stop
    this.progressBarStop();
},error=>{
    console.log(error);
    //progress-bar-stop
    this.progressBarStop();
})
}

selectedChapterId:any;
selectChapterId(e:any)
{
console.log(e.target.value);
this.selectedChapterId = e.target.value;

}


createQuestionSet()
{
  console.log(this.selectedChapterId);
  
  this.questionSetForm.chaptersModel.id = this.selectedChapterId;
  this.questionSetForm.questionSetCloneId = this.selectedChapterId;

    console.log(this.questionSetForm);
    
          //progress-bar-start
          this.progressBarStart();

          this._qs.saveQuestionSet(this.questionSetForm).subscribe(data=>{
            //console.log(data);

            //snack bar running..
            this._shs.OpenSnackbar_horizontalPosition_start("Question Set Created","close",2000);

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
