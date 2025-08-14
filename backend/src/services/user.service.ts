import { User } from "../models/user.model";
import { UserRepository } from "../repositories/user.repositories";

export class UserService {
  private _userRepository: UserRepository;
  constructor() {
    this._userRepository = new UserRepository();
  }

  findByUsername(username: string): User | undefined {
    return this._userRepository.findByUsername(username);
  }
}
