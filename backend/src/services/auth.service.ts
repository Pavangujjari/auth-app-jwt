import { UserService } from "./user.service";
import bcrypt from "bcrypt";
import { User } from "../models/user.model";
import jwt from "jsonwebtoken";
import { env } from "../config/env";

export class authService {
  private _userService: UserService;
  constructor() {
    this._userService = new UserService();
  }

  validateUser(username: string, password: string): User | null {
    const user = this._userService.findByUsername(username);
    if (!user) {
      return null; // User not found
    }
    const isValidPassword = bcrypt.compareSync(password, user.passwordHash);
    return isValidPassword ? user : null;
  }

  signToken(payload: object) {
    return jwt.sign(payload, env.jwtSecret, { expiresIn: 1 });
  }
}
