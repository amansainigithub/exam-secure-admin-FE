import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SnackbarHelperService } from 'src/app/_helpers/snackbar-helper/snackbar-helper.service';
import { BranchService } from 'src/app/_services/branchServices/branch.service';
import { BottomCategoryService } from 'src/app/_services/categoryServices/bottom-category.service';
import { RootCategoryService } from 'src/app/_services/categoryServices/root-category.service';
import { SubCategoryService } from 'src/app/_services/categoryServices/sub-category.service';
import { ChapterService } from 'src/app/_services/chapterServices/chapter.service';
import { QuestionAnswerService } from 'src/app/_services/questionAnswerService/question-answer.service';
import { QuestionSetService } from 'src/app/_services/questionSetServices/question-set.service';
import { RootToEndService } from 'src/app/_services/root-to-end.service';

@Component({
  selector: 'app-watch-sets',
  templateUrl: './watch-sets.component.html',
  styleUrls: ['./watch-sets.component.css']
})
export class WatchSetsComponent implements OnInit {

  
  constructor(private _rte:RootToEndService,
    public dialog: MatDialog,
    private _chapter:ChapterService,
    private _bcs:BottomCategoryService,
    private _shs:SnackbarHelperService,
    private _branch:BranchService,
    private _qs:QuestionSetService,
    private _rcs:RootCategoryService,
    private _scs:SubCategoryService,
    private _qas:QuestionAnswerService) {
}


  ngOnInit(): void {
    this.getRootCategory();
  }

  rootData:any;
  getRootCategory()
  {
      this._rcs.fetchRootCategoryService().subscribe(data=>{
        this.rootData = data;
        console.log(data);
      },error=>{
        console.log(error);
        
      })
  }

  questionSetsLast:any;
  getSetsByRoot(rootId:any)
  {
      this._rcs.getAllSetsByRootId(rootId).subscribe(data=>{
        console.log(data);
        this.questionSetsLast = data;
      },error=>{
        console.log(error);
        
      })
  }





  progressBar:any ={
    dynamicValue:false
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
