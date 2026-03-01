import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonLabel, IonHeader,IonIcon, IonTitle, IonButtons, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, 
            IonHeader,
            IonLabel, 
            IonIcon,
            IonButton],
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
