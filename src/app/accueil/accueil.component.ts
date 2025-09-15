import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  featuredProject = {} as Project;
  constructor(private titleService: Title,private projectService :ProjectsService ){
    this.titleService.setTitle('Ibrahim Addou - Accueil');
  }
  ngOnInit(): void {
    this.featuredProject=this.projectService.getProjectById(0);
    
  }
}
