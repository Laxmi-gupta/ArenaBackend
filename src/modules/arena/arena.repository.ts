import { prisma } from "../../config/prisma.js";

export const arenaRepository = {
  createArena: (data: {title:string,description:string,creatorId:string}) => {
    return prisma.arena.create({data});
  },

   findAll: () => {
    return prisma.arena.findMany({
      include: {
        creator: {
          select: { id: true, name: true, email: true }
        }
      }
    });
  },
  
  findById: (id: string) => {
    return prisma.arena.findUnique({
      where: { id },
      include: {
        creator: {
          select: { id: true, name: true, email: true }
        },
        arenaParticipant: true
      }
    });
  },

  joinArena: (userId: string, arenaId: string) => {
    return prisma.arenaParticipant.create({
      data: { userId, arenaId }
    });
  },

  checkParticipation: (userId:string,arenaId:string) => {
    return prisma.arenaParticipant.findFirst({where: {userId,arenaId}})
  }
}