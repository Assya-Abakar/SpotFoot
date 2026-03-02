export interface Match {
    id: number;
    city: string;
    spot_name: string;
    start_time : string;
    max_players: number;
    min_players: number;
    level: string;
    creator_id: string;
    status: string;
    created_at: string;
    description: string;
    sport_type: string;
}

export interface MatchParticipant {
    id: number;
    match_id: number;
    user_id: string;
    joined_at: string;
    status: string;
}