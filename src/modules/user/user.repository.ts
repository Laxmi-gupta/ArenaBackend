import { prisma } from "../../config/prisma.js";

export const userRepository = {
  findByEmail: (email:string) => {
    return prisma.user.findUnique({
        where: { email }
      })
  },

  createUser: (data: {name:string,email:string,password:string}) => {
    return prisma.user.create({data});
  },

  findById: (id:string) => {
    return prisma.user.findUnique({where: {id}})
  }
}