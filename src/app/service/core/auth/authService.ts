import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { SupabaseService } from '../supabase/supabaseService';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private sessionSubject : BehaviorSubject<any> = new BehaviorSubject(null);
  public session$ = this.sessionSubject.asObservable();

  // Observable pour indiquer si l'utilisateur est authentifié
  public isAuthenticated$ : Observable<boolean> = this.session$.pipe(
    map(session => !!session?.user)
  );

  constructor( private sb : SupabaseService) {
    // Chagement de session au démarrage
    this.sb.client.auth.getSession().then(({ data: { session } }) => {
      this.sessionSubject.next(session);
    });

    // Écoute des changements de session
    this.sb.client.auth.onAuthStateChange((event, session) => {
      this.sessionSubject.next(session);
    });
  }

  get currentUser() {
    return this.sessionSubject.getValue()?.user || null;
  }
 
  async signInWithOtp(email: string) : Promise<void> {
    const { error } = await this.sb.client.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: window.location.origin,
      },
    });
    if (error) {
      console.error('Erreur lors de la connexion :', error);
    }
  }

  async signOut() : Promise<void> {
    const { error } = await this.sb.client.auth.signOut();
    if (error) throw error;
      this.sessionSubject.next(null);
  }

}
