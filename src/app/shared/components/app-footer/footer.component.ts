import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonFooter, IonIcon,IonButton} from '@ionic/angular/standalone';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [IonFooter, IonIcon, IonButton, CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent  {

tabs = [
  { id: 'home', icon: 'home-outline', label: 'Accueil', aria_label: 'Alle à l\'accueil' },
  { id: 'spots', icon: 'map-outline', label: 'Spots', aria_label: 'Voir les spots' },
  { id: 'create', icon: 'add-outline', label: 'Créer', aria_label: 'Créer un match', isSpecial: true},
  { id: 'chat', icon: 'chatbubble-outline', label: 'Chat', aria_label: 'Ouvrir le chat' },
  { id: 'profile', icon: 'person-outline', label: 'Profil', aria_label: 'Voir le profil' },
];
constructor(private router: Router) {}

  public go(path: string) : void {
    this.router.navigateByUrl(`/${path}`);
  }

  public isActive(path: string): boolean {
    return this.router.url.includes(path);
  }

}
