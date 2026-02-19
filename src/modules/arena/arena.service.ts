import { arenaRepository } from "./arena.repository.js";

export const arenaService = {
  createArena: (data: {title:string,description:string,creatorId:string}) => {
    return arenaRepository.createArena(data);
  },

  listArenas: () => {
    return arenaRepository.findAll();
  },

  getArenaById: async(id:string) => {
    const arena = await arenaRepository.findById(id);
    if(!arena) throw new Error("Arena not found");
    return arena;
  },

  joinArena: async(userId:string,arenaId:string) => {
    const existing = await arenaRepository.checkParticipation(userId, arenaId);
    console.log("exist",existing);
    if (existing) throw new Error("Already joined");
    return arenaRepository.joinArena(userId,arenaId);
  }
}