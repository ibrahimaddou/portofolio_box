import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects : Project[]=
  [ { id:0,name:'Site Portfolio Angular',summary:'Projet fait avec angular',description:'',projectLink:'https://github.com/ibrahimaddou/myAngularWebsite',tags:[Tag.ANGULAR,Tag.Bootstrap],pictures:["assets/img1.png","assets/img2.jpg"]},
    { id:1,name:'Application bancaire en C',summary:'Projet fait avec C',description:'',projectLink:'https://www.github.com/ibrahimaddou',tags:[Tag.C],pictures:["assets/img-c.jpg"]} 
  ];
  constructor() { }

  getProjects(){
    return this.projects;
  }
  getProjectById(id:number): Project{
    let project = this.projects.find(project=>project.id===id);
    if (project ===undefined) {
      throw new TypeError("cet id "+id+" n'existe pas");
      
    }
    return project;
  }
  getProjectByFilter(filterTags:Tag[]){
    let filteredProjects : Project[] =[];
    this.projects.forEach(function (project){
      let foundAll = true;
      filterTags.forEach(function(filterTag){
        if (project.tags.includes(filterTag)==false){
          foundAll=false;
        }
      });
    });
    return filteredProjects;
  }
}



