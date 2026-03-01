import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
 import { addIcons } from 'ionicons';
import { mapOutline, searchOutline, gridOutline, chatbubbleOutline, addOutline, homeOutline, personOutline } from 'ionicons/icons';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
});

addIcons({
  'map-outline': mapOutline,
  'search-outline': searchOutline,
  'grid-outline': gridOutline,
  'home-outline': homeOutline,
  'add-outline': addOutline,
  'chatbubble-outline': chatbubbleOutline,
  'person-outline': personOutline,
});
