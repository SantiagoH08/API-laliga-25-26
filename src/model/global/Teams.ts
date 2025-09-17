import { UUID } from '../../types/uuid';

export interface TeamBaseData {
    id: UUID;
    Team: string;
    'Logo_URL': string;
}

export class TeamModelGlobal {
    id: UUID;
    name: string;
    logoUrl: string;

    constructor(data: TeamBaseData) {
        this.id = data.id;
        this.name = data.Team;
        this.logoUrl = data['Logo_URL'];
    }

    static async getTeam({team}: {team: string}): Promise<TeamModelGlobal[] | null> {
        return [];
    }
    
}