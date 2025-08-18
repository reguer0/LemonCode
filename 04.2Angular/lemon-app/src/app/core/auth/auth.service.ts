import { Injectable, computed, signal } from '@angular/core';

export interface LoginPayload { username: string; password: string; }

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly _isLogged = signal(false);
  private readonly _username = signal<string | null>(null);

  // Lectura reactiva (signals readonly)
  readonly isLogged = computed(() => this._isLogged());
  readonly username = computed(() => this._username() ?? '');

  login({ username, password }: LoginPayload): boolean {
    const ok = username === 'master@lemoncode.net' && password === '12345678';
    this._isLogged.set(ok);
    this._username.set(ok ? username : null);
    return ok;
  }

  logout(): void {
    this._isLogged.set(false);
    this._username.set(null);
  }

  // API requerida por el enunciado
  isLoggedSync(): boolean { return this._isLogged(); }
  getUsername(): string { return this._username() ?? ''; }
}