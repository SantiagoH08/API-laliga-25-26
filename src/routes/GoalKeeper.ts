import { Router } from "express";
import { GoalKeeperController } from "../controllers/GoalKeeper";
import { GoalKeeperModelGlobal } from "../model/global/GoalKeeper";

export const createGoalKeeperRouter = ({goalKeeperModel}: {goalKeeperModel: typeof GoalKeeperModelGlobal})=>{
   const router = Router();
   const goalKeeperController = new GoalKeeperController({ goalKeeperModel });
   router.get("/", goalKeeperController.getPlayer);
   return router;
}


