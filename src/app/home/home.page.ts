import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { SupabaseService } from '../core/supabase/supabase';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage implements OnInit {
  constructor(private supabase: SupabaseService) {}

  async ngOnInit() {
    const { data, error } = await this.supabase.client.from('test').select('*').limit(1);
    if (error) {
      console.error('Supabase connexion KO :', error);
    } else {
      console.log('Supabase OK ! Réponse :', data);
    }
  }
}
