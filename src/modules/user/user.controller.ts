import { Request,Response } from "express"
import { userService } from "./user.service.js";

export const userController = {
   register: async(req:Request,res:Response) => {
    console.log("body",req.body);
    try {
      const user = await userService.register(req.body);
      res.status(201).json({message: "User registered successfully", data: {
        id:user.id,name: user.name,email: user.email
      }});
    } catch(err:any) {
      res.status(400).json({
        message: err?.message,
      });
    }
  }, 
  
  login : async(req:Request,res:Response) => {
    try {
      const user = await userService.login(req.body);
      res.status(201).json({message: "User login successfully", data: {token:user.token}});
    } catch(err:any) {
      res.status(400).json({
        message: err?.message,
      });
    }
  },

  profile: async(req:Request,res:Response) => {
    try {
      const user = await userService.getProfile((req as any).userId);
      console.log(user);
      res.json(user);
    } catch(err:any) {
      res.status(400).json({
        message: err?.message,
      });
    }
  }
}