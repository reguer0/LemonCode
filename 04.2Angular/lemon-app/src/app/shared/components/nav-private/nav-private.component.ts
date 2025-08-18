import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-private',
  standalone: true,
  imports: [MatButtonModule, RouterModule],
  template: `
    <a mat-button routerLink="/dashboard">Dashboard</a>
    <a mat-button routerLink="/gallery">Galería</a>
    <a mat-button routerLink="/crud">CRUD</a>
    <a mat-button routerLink="/profile">Profile</a>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavPrivateComponent {}