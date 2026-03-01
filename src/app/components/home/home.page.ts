import { Component, OnInit } from '@angular/core';
import { IonIcon,  IonList,IonCard, IonTabs, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonFab, IonFabButton, IonProgressBar, IonBadge } from '@ionic/angular/standalone';
import { SupabaseService } from '../../service/core/supabase/supabaseService';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [],
})
export class HomePage implements OnInit {
  matches: any[] = []; // Typé plus tard

async ionViewWillEnter() {
}
  constructor(private supabase: SupabaseService) {}
 
  goToDetails(matchId: number) {
  }
  async ngOnInit() {
    const { data, error } = await this.supabase.client.from('test').select('*').limit(1);
    if (error) {
      console.error('Supabase connexion KO :', error);
    } else {
      console.log('Supabase OK ! Réponse :', data);
    }
  }
}
