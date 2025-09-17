import { Router } from "express";
import { PlayerController } from "../controllers/Player";
import { PlayerModelGlobal} from '../model/global/Player';

export const createPlayerRouter = ({playerModel}: {playerModel: typeof PlayerModelGlobal})=>{
   const router = Router();
   const playerController = new PlayerController({ playerModel });
   router.get("/", playerController.getPlayer);
   return router;
}


