import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { registerLocaleData } from '@angular/common';

import localeEs from '@angular/common/locales/es';
import localeFr from '@angular/common/locales/fr';
import { LocalService } from './services/locale.service';



registerLocaleData(localeEs, 'es');
registerLocaleData(localeFr, 'fr');

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),


    {
      provide: LOCALE_ID,


      deps: [LocalService],
      useFactory: (localService: LocalService) => localService.getLocale,
      // useValue: 'fr'

    }
  ]


};
