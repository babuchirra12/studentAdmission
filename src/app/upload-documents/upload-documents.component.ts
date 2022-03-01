import { Component, OnInit } from '@angular/core';
import { Service } from "../service/service.service";
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { Model as model } from '../model/model';
@Component({
  selector: 'app-upload-documents',
  templateUrl: './upload-documents.component.html',
  styleUrls: ['./upload-documents.component.css']
})
export class UploadDocumentsComponent implements OnInit {
  uploadDocument:model.UploadedDocument={};
  file: File = {
    lastModified: 0,
    name: '',
    webkitRelativePath: '',
    size: 0,
    type: '',
    arrayBuffer: function (): Promise<ArrayBuffer> {
      throw new Error('Function not implemented.');
    },
    slice: function (start?: number, end?: number, contentType?: string): Blob {
      throw new Error('Function not implemented.');
    },
    stream: function (): ReadableStream<any> {
      throw new Error('Function not implemented.');
    },
    text: function (): Promise<string> {
      throw new Error('Function not implemented.');
    }
  }; 
 public studentId:string | undefined;
 public requst:any;
 public applicationNumber:string | undefined;
  constructor(private router:Router, private activatedRoute:ActivatedRoute, private service: Service ) {
    console.dir(this.router.getCurrentNavigation()?.extras.state);
    this.requst=this.router.getCurrentNavigation()?.extras.state;
    this.studentId=this.requst['studentId'];
    this.applicationNumber=this.requst['applicationNumber']
   }

  ngOnInit(): void {
  }
 
  onChange(event:any,uploadType:string) {
   // alert("uploadType"+uploadType);
    this.file = event.target.files[0];
    this.fileUpload(uploadType);
}
  fileUpload(uploadType:string) {
    const formData = new FormData();  
    formData.append("file", this.file, this.file.name);
   
    this.service.post_UploadFile(19,formData).subscribe(data=>{
      if('photo'===uploadType)
      this.uploadDocument.photo=data.imagePath;
      else if('signature'===uploadType){
        this.uploadDocument.signature=data.imagePath;
      }else if('aadharNumber'===uploadType){
        this.uploadDocument.aadharNumber=data.imagePath;
      }
      else if('ssc_birthcertificate'===uploadType){
        this.uploadDocument.ssc_birthcertificate=data.imagePath;
      }
      else if('provisional_odcertificate'===uploadType){
        this.uploadDocument.provisional_odcertificate=data.imagePath;
      }
      else if('consoledate_marksmemo'===uploadType){
        this.uploadDocument.consoledate_marksmemo=data.imagePath;
      }
      else if('castCertificate'===uploadType){
        this.uploadDocument.castCertificate=data.imagePath;
      }
    }); 
   
    
  };
  uploadDocuments(){
    this.service.post_UploadDocuments(this.studentId,this.uploadDocument).subscribe(data=>{
      this.router.navigate(["admissions"]);
    });
  }

}
