import { Component, OnInit } from '@angular/core';
import { ConfigService } from './config.service';
import { Config } from './config.interface';

@Component({
  selector: 'app-config-list',
  templateUrl: './config-list.component.html',
  styleUrls: ['./config-list.component.css']
})
export class ConfigListComponent implements OnInit {
  configs: Config[] = [];
  loading = false;
  error: string = '';

  constructor(private configService: ConfigService) {}

  ngOnInit(): void {
    this.loadConfigs();
  }

  loadConfigs(): void {
    this.loading = true;
    this.error = '';
    this.configService.getConfigs().subscribe({
      next: (configs) => {
        this.configs = configs;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.error = 'Erreur lors du chargement des configurations';
      }
    });
  }

  onConfigClick(config: Config): void {
    alert(`Configuration sélectionnée: ${config.title}`);
  }

  trackByConfigId(index: number, config: Config): string {
    return config.id;
  }
}