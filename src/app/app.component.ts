import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet,
         IonHeader, IonContent, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon} from '@ionic/angular/standalone';
import { AppHeaderComponent } from './shared/components/app-header/app-header.component';
import { FooterComponent } from './shared/components/app-footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html',
  imports: [IonApp, 
            IonRouterOutlet, 
            IonContent,
            IonHeader,
            AppHeaderComponent,
            FooterComponent],
  styleUrl: 'app.component.scss',
})
export class AppComponent {
  constructor() {}
}
