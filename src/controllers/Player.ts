
import {Request, Response} from 'express';


export type PlayerModelType = {
  getPlayer: ({name, team, position}: {name: string, team: string, position: string}) => Promise<any[] | null>;
};

export class PlayerController {
    private playerModel: PlayerModelType;

    constructor({ playerModel }: { playerModel: PlayerModelType }) {
        this.playerModel = playerModel;
    }
    getPlayer = async (req: Request, res: Response) => {
        try {
            const name = typeof req.query.name === 'string' ? req.query.name : '';
            const team = typeof req.query.team === 'string' ? req.query.team : '';
            const position = typeof req.query.position === 'string' ? req.query.position : '';
            const players = await this.playerModel.getPlayer({name, team, position});
            if (players) { return res.json(players)}
            return res.status(404).json({ error: 'Player not found' });
        } catch(e){
            res.status(500).json({error: (e as Error).message})
        }
    }
}