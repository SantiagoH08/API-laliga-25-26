import {supabase} from '../../config/supabase';
import { SearchParams } from '../../types/search';
import { TeamModelGlobal, TeamBaseData } from '../global/Teams';

export class TeamModel extends TeamModelGlobal {
    constructor(data: TeamBaseData) {
        super(data);
    }
    static async getTeam({team}: {team: string}): Promise<TeamModel[] | null> {
        const params: SearchParams = { search_team: team };
        const { data, error } = await supabase
            .rpc('search_teams', params);
        if (error) {
            console.error('Error fetching team:', error);
            return null;
        }
        return (data ?? []).map((row: any) => new TeamModel(row));
    }
}