import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BranchService } from 'src/app/_services/branchServices/branch.service';
import Swal from 'sweetalert2';
import { UploadFileBranchComponent } from '../upload-file-branch/upload-file-branch.component';


@Component({
  selector: 'app-fetch-branch',
  templateUrl: './fetch-branch.component.html',
  styleUrls: ['./fetch-branch.component.css']
})
export class FetchBranchComponent implements OnInit {

  constructor(private _branch:BranchService,public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getBranchList();
  }

  progressBar:any ={
    dynamicValue:false
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


  removeBranchById(branchId:any)
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
        this._branch.deleteBranchByIdService(branchId).subscribe(data=>
          {
            //console.log(data);
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
            this.getBranchList();
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
      this.changeBranchStatus(node);
    }
    else if(status == false){
      node.status=true;
      this.changeBranchStatus(node);
    }
    //progress-bar-stop
    this.progressBarStop();
  }

  //CHANGE-STATUS
  changeBranchStatus(node:any)
  {
    this._branch.updatebranchService(node).subscribe(data=>{
      this.getBranchList();
    },error=>{
      console.log(error);
    })
  }
 


  //UPLOAD FILE
  uploadFileBranch(id:any) {
  //console.log(id);
  const dialogRef = this.dialog.open(UploadFileBranchComponent,{
    width: '400px',
    data: {branchId: id},
  });

  dialogRef.afterClosed().subscribe(result => {
    this.getBranchList();
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
