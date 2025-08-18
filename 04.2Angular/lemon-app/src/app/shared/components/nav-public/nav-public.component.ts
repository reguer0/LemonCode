import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-public',
  standalone: true,
  imports: [MatButtonModule, RouterModule],
  template: `
    <a mat-button routerLink="/home">Home</a>
    <a mat-button routerLink="/login">Login</a>
    <a mat-button routerLink="/about">Acerca de</a>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavPublicComponent {}