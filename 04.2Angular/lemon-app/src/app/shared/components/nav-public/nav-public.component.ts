import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-public',
  standalone: true,
  imports: [MatButtonModule, RouterModule],
  templateUrl: './nav-public.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavPublicComponent {}