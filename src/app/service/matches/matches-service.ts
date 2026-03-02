import { Injectable } from '@angular/core';
import { SupabaseService } from '../core/supabase/supabaseService';
import { Match } from 'src/app/models/matches.model';

@Injectable({
  providedIn: 'root',
})
export class MatchesService {

  constructor(private sb : SupabaseService) { }
  
  getMatches() {
    return this.sb.client.from('matches').select('*');
  }

  createMatch(matchData: Match) {
    return this.sb.client.from('matches').insert(matchData);
  }

  joinMatch(matchId: number, userId: string) {
    return this.sb.client.from('match_participants').insert({ match_id: matchId, user_id: userId });
  }

  leaveMatch(matchId: number, userId: string) {
    return this.sb.client.from('match_participants').delete().eq('match_id', matchId).eq('user_id', userId);
  }
}
