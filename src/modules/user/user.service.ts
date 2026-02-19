import bcrypt from "bcrypt";
import { userRepository } from "./user.repository.js";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET as string;

export const userService = {
   register: async(data: {name:string,email:string,password:string}) => {

    const existing = await userRepository.findByEmail(data.email);

    if(existing) throw new Error("User already exists");
    const hashPassword = await bcrypt.hash(data.password,10)
    const user = await userRepository.createUser({
      ...data,password:hashPassword
    })
    return user;
  },

  login: async(data: {email:string,password:string}) => {
    const user = await userRepository.findByEmail(data.email);
    if(!user) throw new Error("User not found");

    const isValid = await bcrypt.compare(data.password,user.password)
    if(!isValid) throw new Error("Invalid credentials");
    const token = jwt.sign({userId:user.id},JWT_SECRET, { expiresIn: "1d" });

    return {token};
  },

  getProfile: async(userId:string) => {
    const user = await userRepository.findById(userId);
    if (!user) throw new Error("User not found");
    return {id:user.id,name:user.name,email:user.email};
  }
}