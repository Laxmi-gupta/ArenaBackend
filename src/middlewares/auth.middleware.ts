import { Request,Response,NextFunction } from "express"
import jwt from "jsonwebtoken";

export const authMiddleware =  async(req:Request,res:Response,next:NextFunction) => {
  const header = req.headers.authorization;
  if(!header) return res.status(401).json({message:"Unauthorized"});
  const token = header.split(" ")[1] as string;
  try {
    const verify = jwt.verify(token,process.env.JWT_SECRET as string);
    (req as any).userId = (verify as any).userId;
    next();
  } catch(err:any) {
    return res.status(401).json({message:"Invalid token"});
  }
}