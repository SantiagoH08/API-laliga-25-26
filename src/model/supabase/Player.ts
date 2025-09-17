import {supabase} from '../../config/supabase';
import { SearchParams } from '../../types/search';
import { PlayerModelGlobal, PlayerData } from '../global/Player';



export class PlayerModel extends PlayerModelGlobal {

    constructor(data: PlayerData) {
        super(data);
    }

    static async getPlayer({name, team, position}: {name: string, team: string, position: string}): Promise<PlayerModel[] | null> {
        const params: SearchParams = { search_name: name, search_team: team, search_position: position };
        const { data, error } = await supabase
            .rpc('search_players', params);
        if (error) {
            if (error.code === 'PGRST116') { // No rows found
                return null;
            }
            throw new Error(`Error fetching player by name: ${error.message}`);
        }
        return (data ?? []).map((row: any) => new PlayerModel(row));
    }

}