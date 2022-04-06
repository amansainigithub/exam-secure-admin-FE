import { Component, OnInit } from '@angular/core';
import { SnackbarHelperService } from 'src/app/_helpers/snackbar-helper/snackbar-helper.service';
import { BranchService } from 'src/app/_services/branchServices/branch.service';
import { ChapterService } from 'src/app/_services/chapterServices/chapter.service';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})
export class ChapterComponent implements OnInit {

  constructor(private _chapter:ChapterService,
    private _shs:SnackbarHelperService,
    private _branch:BranchService) { }

  ngOnInit(): void {
    this.getBranchList();
  }


  progressBar:any ={
    dynamicValue:false
  }


  chapterForm:any={
    "chapterName": "",
    "defaultName": "",
    "fileName": "",
    "fileUrl": "",
    "shortDescription": "",
    "longDescription": "",
    "status": true,
    "storingDateTime": "",
    "sequenceNum": "",
    "bottomCategoryCloneId":"",
    "branchModel":{
      "id":""
    },
}

  branchList:any;
  public getBranchList()
  {
      //progress-bar-start
      this.progressBarStart();

      this._branch.getAllBranchService().subscribe(data=>{
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

  branchId:any;
  selectBranchId(e:any)
  {
    this.branchId =  e.target.value;
  }


  createBranch()
{
  this.chapterForm.branchModel.id = this.branchId;
    this.chapterForm.branchCloneId = this.branchId;

    console.log(this.chapterForm);
    
          //progress-bar-start
          this.progressBarStart();

          this._chapter.saveChapter(this.chapterForm).subscribe(data=>{
            //console.log(data);

            //snack bar running..
            this._shs.OpenSnackbar_horizontalPosition_start("Chapter Created","close",2000);

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
