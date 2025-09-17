
import { PlayerBase,PlayerBaseData} from '../../types/playerBase';


export interface GoalKeeperData extends PlayerBaseData {
    "Goals Against": number;
    "Shots on target":number;
    Saves: number;
    "Saves %": number;
}
export class GoalKeeperModelGlobal extends PlayerBase {
    saves: number;
    goals_against: number;
    shots_faced: number;
    saves_percentage: number;

    constructor(data: GoalKeeperData) {
        super(data);
        this.saves = data.Saves;
        this.goals_against = data['Goals Against'];
        this.shots_faced = data['Shots on target'];
        this.saves_percentage = data['Saves %'];
    }
    static async getPlayer({name, team}: {name: string, team: string}): Promise<GoalKeeperModelGlobal[] | null> {
        return [];
    }
    
}
