import {supabase} from '../../config/supabase';
import { SearchParams } from '../../types/search';
import { GoalKeeperModelGlobal,GoalKeeperData } from '../global/GoalKeeper';

export class GoalKeeperModel extends GoalKeeperModelGlobal{

    constructor(data: GoalKeeperData) {
        super(data);
    }
    static async getPlayer({name, team}: {name: string, team: string}): Promise<GoalKeeperModel[] | null> {
        const params: SearchParams = { search_name: name, search_team: team };
        const { data, error } = await supabase
            .rpc('search_goalkeepers', params);
        if (error) {
            if (error.code === 'PGRST116') { // No rows found
                return null;
            }
            throw new Error(`Error fetching player by name: ${error.message}`);
        }
        return (data ?? []).map((row: any) => new GoalKeeperModel(row));
    }

}
