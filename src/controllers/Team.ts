import {Request, Response} from 'express';

export type TeamModelType = {
  getTeam: ({team}: {team: string}) => Promise<any[] | null>;
};

export class TeamController {
    private teamModel: TeamModelType;

    constructor(teamModel: TeamModelType) {
        this.teamModel = teamModel;
    }
    

    getTeam = async (req: Request, res: Response) => {
        try {
            const team = typeof req.query.team === 'string' ? req.query.team : '';
            const result = await this.teamModel.getTeam({ team });
            if (result) { return res.json(result); }
            return res.status(404).json({ error: 'Team not found' });
        } catch (error) {
            console.error('Error fetching team:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}