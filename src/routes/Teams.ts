import { Router } from "express";
import { TeamController } from "../controllers/Team";
import { TeamModelGlobal} from '../model/global/Teams';

export const createTeamRouter = ({teamModel}: {teamModel: typeof TeamModelGlobal})=>{
   const router = Router();
   const teamController = new TeamController(teamModel);

   router.get('/', teamController.getTeam);

   return router;
}