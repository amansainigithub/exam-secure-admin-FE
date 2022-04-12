import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SubCategoryService } from 'src/app/_services/categoryServices/sub-category.service';
import Swal from 'sweetalert2';
import { UpdateSubCategoryComponent } from '../update-sub-category/update-sub-category.component';
import { UploadFileSubCategoryComponent } from '../upload-file-sub-category/upload-file-sub-category.component';

@Component({
  selector: 'app-fetch-sub-category',
  templateUrl: './fetch-sub-category.component.html',
  styleUrls: ['./fetch-sub-category.component.css']
})
export class FetchSubCategoryComponent implements OnInit {

  progressBar:any ={
    dynamicValue:false
  }

  constructor(private _scs:SubCategoryService,public dialog: MatDialog) {
  }


  ngOnInit(): void {
    this.fetchSubCategoryData();
  }

  fetchSubCategory:any;

  public fetchSubCategoryData()
  {
      //progress-bar-start
      this.progressBarStart();

      this._scs.fetchSubCategoryService().subscribe(data=>{
         this.fetchSubCategory=data;
         console.log(data);
          //progress-bar-stop
          this.progressBarStop();
      },error=>{
          console.log(error);
          //progress-bar-stop
          this.progressBarStop();
      })
  }


  // updateSubCategory(subCategoryId:any)
  // {
  //   //console.log(id);
  //   const dialogRef = this.dialog.open(UpdateSubCategoryComponent,{
  //     width: '650px',
  //     data: {subCategoryId: subCategoryId},
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     this.fetchSubCategoryData();
  //   });
    
  // }

  removeSubCategory(subCategoryId:any)
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
        this._scs.removeSubCategoryService(subCategoryId).subscribe(data=>
          {
            console.log(data);
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
            this.fetchSubCategoryData();
          },error=>{
            console.log(error);
            
          })
      }
    })
  }


   //UPLOAD FILE
   uploadFileSubCategory(id:any) {
    //console.log(id);
    const dialogRef = this.dialog.open(UploadFileSubCategoryComponent,{
      width: '400px',
      data: {subCategoryId: id},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.fetchSubCategoryData();
    });

  }

   //Change-Status
   changeStatus(status:any,node:any)
   {
     //progress-bar-start
     this.progressBarStart();
     if(status == true){
       node.status=false;
       this.changeSubCategoryStatus(node);
     }
     else if(status == false){
       node.status=true;
       this.changeSubCategoryStatus(node);
     }
     //progress-bar-stop
     this.progressBarStop();
   }
 
   //CHANGE-STATUS
   changeSubCategoryStatus(node:any)
   {
     this._scs.updateSubCategoryService(node).subscribe(data=>{
       this.fetchSubCategoryData();
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
