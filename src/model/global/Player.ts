
import { PlayerBase,PlayerBaseData } from '../../types/playerBase';

export interface PlayerData extends PlayerBaseData {
    Goals: number;
    Assists: number;
}
export class PlayerModelGlobal extends PlayerBase {
    
    goals: number;
    assists: number;

    constructor(data: PlayerData) {
        super(data);
        this.goals = data.Goals;
        this.assists = data.Assists;
    }
    static async getPlayer({name, team, position}: {name: string, team: string, position: string}): Promise<PlayerModelGlobal[] | null> {
        return [];
    }
}