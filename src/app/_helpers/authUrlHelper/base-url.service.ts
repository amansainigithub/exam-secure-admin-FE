import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseUrlService {

  // public baseUrl:string = 'http://localhost:8080/api/auth/cred/oex/secure/';
  // public baseUrl:string = 'http://103.93.16.121:33146/grabquiz/api/auth/cred/oex/secure/';
  public baseUrl:string = 'https://grabquiz.tech/api/auth/cred/oex/secure/';

 
  constructor() { }
}
 