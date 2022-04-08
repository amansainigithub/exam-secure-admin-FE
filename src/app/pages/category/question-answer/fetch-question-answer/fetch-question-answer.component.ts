import { Component, OnInit } from '@angular/core';
import { QuestionAnswerService } from 'src/app/_services/questionAnswerService/question-answer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-fetch-question-answer',
  templateUrl: './fetch-question-answer.component.html',
  styleUrls: ['./fetch-question-answer.component.css']
})
export class FetchQuestionAnswerComponent implements OnInit {

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


  removeQuestionAnswer(id:any)
  {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to delete this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        //calling delete service
        this._qas.deleteQuestionAnswerById(id).subscribe(data=>
          {
            //console.log(data);
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
            this.getAllQuestionAnswer();
          },error=>{
            console.log(error);
            
          })
      }
    })
  }



  //Change-Status
  changeStatus(status:any,node:any)
  {
    //progress-bar-start
    this.progressBarStart();
    if(status == true){
      node.status=false;
      this.changeQuestionAnswerStatus(node);
    }
    else if(status == false){
      node.status=true;
      this.changeQuestionAnswerStatus(node);
    }
    //progress-bar-stop
    this.progressBarStop();
  }

  //CHANGE-STATUS
  changeQuestionAnswerStatus(node:any)
  {
    this._qas.saveQuestionAnsersService(node).subscribe(data=>{
      this.getAllQuestionAnswer();
    },error=>{
      console.log(error);
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
