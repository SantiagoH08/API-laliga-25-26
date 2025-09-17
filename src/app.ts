import express, {Express, json } from "express";
import { corsMiddleware } from "./middleware/cors";
import { createPlayerRouter } from "./routes/Player";
import { PlayerModel } from "./model/supabase/Player";
import { GoalKeeperModel } from "./model/supabase/GoalKeeper";
import { createGoalKeeperRouter } from "./routes/GoalKeeper";

const app: Express = express();

app.use(json());
app.use(corsMiddleware());

app.use('/player', createPlayerRouter({ playerModel: PlayerModel }))
app.use('/goalkeeper', createGoalKeeperRouter({ goalKeeperModel: GoalKeeperModel }))

const desiredPort = process.env.PORT ?? 1234;

app.listen(desiredPort,()=>{
    console.log(`Server listening on http://localhost:${desiredPort}`)
})