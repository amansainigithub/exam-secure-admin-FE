import { Component, OnInit } from '@angular/core';
import { QuestionAnswerService } from 'src/app/_services/questionAnswerService/question-answer.service';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.css']
})
export class QuestionsListComponent implements OnInit {

  constructor(private _qas:QuestionAnswerService) { }

  ngOnInit(): void {
    this.getAllQuestionAnswer();
  }

  
  progressBar:any ={
    dynamicValue:false
  }


  questionAnswerList:any;
  public getAllQuestionAnswer()
  {
      //progress-bar-start
      this.progressBarStart();

      this._qas.getAllQuestionAnswer().subscribe(data=>{
         this.questionAnswerList=data;
         console.log(data);
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
