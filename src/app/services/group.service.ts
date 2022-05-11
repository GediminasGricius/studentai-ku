import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
 

  constructor(private http:HttpClient) {  }


  public getGroups(){
    return this.http.get<{id:number,name:string,year:number}[]>("http://localhost:8080/api/group/");
  }

  public postGroups(){
    return this.http.post<{id:number,name:string,year:number}[]>("http://localhost:8080/api/group/", {});
  }


}
