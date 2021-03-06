import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BottomCategoryService } from 'src/app/_services/categoryServices/bottom-category.service';
import Swal from 'sweetalert2';
import { UpdateBootomCategoryComponent } from '../update-bootom-category/update-bootom-category.component';
import { UploadFileBottomCategoryComponent } from '../upload-file-bottom-category/upload-file-bottom-category.component';


@Component({
  selector: 'app-fetch-bootom-category',
  templateUrl: './fetch-bootom-category.component.html',
  styleUrls: ['./fetch-bootom-category.component.css']
})
export class FetchBootomCategoryComponent implements OnInit {

  progressBar:any ={
    dynamicValue:false
  }


  constructor(private _bcs:BottomCategoryService,public dialog: MatDialog) {
  }


  ngOnInit(): void {
    this.fetchBottomCategoryData();
  }


bottomCategoryList:any;
  public fetchBottomCategoryData()
  {
      //progress-bar-start
      this.progressBarStart();

      this._bcs.fetchBottomCategoryService().subscribe(data=>{
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




  removeBottomCategory(bottomCaegoryId:any)
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
        this._bcs.deleteBottomCategoryByIdService(bottomCaegoryId).subscribe(data=>
          {
            //console.log(data);
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
            this.fetchBottomCategoryData();
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
       this.changeBottomCategoryStatus(node);
     }
     else if(status == false){
       node.status=true;
       this.changeBottomCategoryStatus(node);
     }
     //progress-bar-stop
     this.progressBarStop();
   }
 
   //CHANGE-STATUS
   changeBottomCategoryStatus(node:any)
   {
     this._bcs.updateBottomCategoryService(node).subscribe(data=>{
       this.fetchBottomCategoryData();
     },error=>{
       console.log(error);
     })
   }




//UPLOAD FILE
uploadFileBottomCategory(id:any) {
  //console.log(id);
  const dialogRef = this.dialog.open(UploadFileBottomCategoryComponent,{
    width: '400px',
    data: {bottomcategoryId: id},
  });

  dialogRef.afterClosed().subscribe(result => {
    this.fetchBottomCategoryData();
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
