import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

const mockConfigs = [
  { id: '1', name: 'database-config', title: 'Configuration Base de Données', icon: 'fa-database' },
  { id: '2', name: 'email-config', title: 'Configuration Email', icon: 'fa-envelope' },
  { id: '3', name: 'api-config', title: 'Configuration API', icon: 'fa-cog' },
  { id: '4', name: 'security-config', title: 'Configuration Sécurité', icon: 'fa-shield-alt' },
  { id: '5', name: 'cache-config', title: 'Configuration Cache', icon: 'fa-memory' },
];

@Injectable()
export class MockInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    const { url, method } = req;
    if (url.includes('/api/configs') && method === 'GET') {
      console.log('🔄 Intercepteur: Simulation de l\'API configs');
      return of(new HttpResponse({ status: 200, body: mockConfigs })).pipe(delay(800));
    }
    return next.handle(req);
  }
}