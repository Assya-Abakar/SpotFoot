import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase : SupabaseClient;
  
  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseAnonKey
    );
  }

  get client(): SupabaseClient {
    return this.supabase;
  }

  async getCurrentUser() : Promise<any> {
    const { data, error } = await this.supabase.auth.getUser();
    if (error) throw error;
    return data.user;
  }


  async signOut() {
    await this.supabase.auth.signOut();
  }
}
