import { User } from "../models/user.model";
import bcrypt from "bcrypt";

const users: User[] = [
  {
    id: 1,
    username: "Pavan",
    passwordHash: bcrypt.hashSync("password", 10),
  },
];

export class UserRepository {
  findByUsername(username: string): User | undefined {
    return users.find((user) => user.username === username);
  }
}
