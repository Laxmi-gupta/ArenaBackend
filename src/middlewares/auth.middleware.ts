import { Request,Response,NextFunction } from "express"
import jwt from "jsonwebtoken";

export const authMiddleware =  async(req:Request,res:Response,next:NextFunction) => {
  const token = req.headers.authorization;
  if(!token) return res.status(401).json({message:"Unauthorized"});
  try {
    const verify = jwt.verify(token,process.env.JWT_SECRET as string);
    (req as any).userId = (verify as any).userId;
    next();
  } catch(err:any) {
    return res.status(401).json({message:"Invalid token"});
  }
}