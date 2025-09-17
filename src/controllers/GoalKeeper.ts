
import {Request, Response} from 'express';


export type GoalKeeperModelType = {
  getPlayer: ({name, team}: {name: string, team: string}) => Promise<any[] | null>;
};

export class GoalKeeperController {
    private goalKeeperModel: GoalKeeperModelType;

    constructor({ goalKeeperModel }: { goalKeeperModel: GoalKeeperModelType }) {
        this.goalKeeperModel = goalKeeperModel;
    }

    getPlayer = async (req: Request, res: Response) => {
        try {
            const name = typeof req.query.name === 'string' ? req.query.name : '';
            const team = typeof req.query.team === 'string' ? req.query.team : '';
            const players = await this.goalKeeperModel.getPlayer({name, team});
            if (players) { return res.json(players)}
            return res.status(404).json({ error: 'Player not found' });
        } catch(e){
            res.status(500).json({error: (e as Error).message})
        }
    }
}