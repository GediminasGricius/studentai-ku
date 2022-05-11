import { Component, OnInit } from '@angular/core';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  public groups:{id:number,name:string,year:number}[]=[];
  public sk1:number=0;
  public sk2:number=0;

  constructor(private groupService:GroupService) { }

  ngOnInit(): void {
    this.groupService.getGroups().subscribe((response)=>{
      this.groups=response;
    });
  }

}
