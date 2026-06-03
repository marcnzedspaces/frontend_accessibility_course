import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class RouteFocusService {
  constructor(private router: Router) {}

  init(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        setTimeout(() => {
          const heading = document.querySelector('main h1') as HTMLElement | null;
          if (heading) {
            heading.setAttribute('tabindex', '-1');
            heading.focus();
          }
        });
      });
  }
}

// Teaching note: in production, combine this with route title updates and careful testing.
