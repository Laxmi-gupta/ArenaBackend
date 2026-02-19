import { arenaService } from "./arena.service.js"
import { Request,Response } from "express";

export const arenaController = {
  create: async(req:Request,res:Response) => {
    try {
      console.log("req",req.body);
      const arena = await arenaService.createArena({...req.body,creatorId: (req as any).userId});
      res.status(200).json({message: "Arena created successfully",data:arena})
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  },

  listArenas: async (req: Request, res: Response) => {
    const arenas = await arenaService.listArenas();
    res.json(arenas);
  },

   getArenaById: async (req: Request, res: Response) => {
    try {
      const arena = await arenaService.getArenaById(req.params.id as string);
      res.status(200).json({message: "Arena fetched successfully",arena});
    } catch (err: any) {
      res.status(404).json({ message: err.message });
    }
  },

   joinArena: async (req: any, res: Response) => {
    try {
      await arenaService.joinArena(req.userId, req.body.arenaId);
      console.log("joined")
      res.status(200).json({ message: "Joined successfully" });
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }

}