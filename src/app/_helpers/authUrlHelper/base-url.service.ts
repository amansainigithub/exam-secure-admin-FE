import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseUrlService {

  // public baseUrl:string = 'http://localhost:5000/api/auth/cred/oex/secure/';
  public baseUrl:string = 'https://146.190.233.4:5000/api/auth/cred/oex/secure/';
  //  public baseUrl:string = 'http://examsecure-env.eba-3xmk9bvg.us-east-1.elasticbeanstalk.com/api/auth/cred/oex/secure/';


  constructor() { }
}
