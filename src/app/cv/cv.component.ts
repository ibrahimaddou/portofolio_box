import { Component,OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_services/projects.service';
@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CVComponent implements OnInit{
  projects= {} as Project[];
  isCollapsed: boolean =true;
  c : boolean =false;

  constructor(private titleService: Title,private projectService:ProjectsService ){
    this.titleService.setTitle('Ibrahim Addou - CV');
  }
  ngOnInit(): void {  //onInit a callback method
    //throw new Error('Method not implemented.');
    this.projects=this.projectService.getProjects();//appel   au service avec les données retourner par  la methode getProjects()
  }
  Filter(){
    let filterTags:Tag[]=[];
    if (this.c) {
      filterTags.push(Tag.C);
    }
    this.projects=this.projectService.getProjectByFilter(filterTags);
  }
}
