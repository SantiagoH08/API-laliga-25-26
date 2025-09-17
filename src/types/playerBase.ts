import { UUID } from '../types/uuid';

export interface PlayerBaseData {
    id: UUID;
    Player: string;
    Team: string;
    Position: string;
    Starts: number;
    'Matches Played': number;
    'Minutes Played': number;
}

export class PlayerBase{
    id: UUID;
    name: string;
    team: string;
    position: string;
    starts: number;
    minutes: number;
    matches: number;

    constructor(data: PlayerBaseData) {
        this.id = data.id;
        this.name = data.Player;
        this.team = data.Team;
        this.position = data.Position;
        this.starts = data.Starts;
        this.matches = data['Matches Played'];
        this.minutes = data['Minutes Played'];        
    }
}