import { ZodSchema } from "zod/v3";
import { Request,Response,NextFunction } from "express";

export const validate = function(schema: ZodSchema) {
  return function(req:Request,res:Response,next:NextFunction) {
    const parsed = schema.safeParse(req.body);
    if(!parsed.success) return res.status(400).json({message: "Invalid data"});

    req.body = parsed.data;
    next();
  }
}
