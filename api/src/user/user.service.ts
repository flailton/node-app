import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  create(createUserDto: CreateUserDto) {
    const user = createUserDto;
    if (user.birthAt) {
      user.birthAt = user.birthAt ? new Date(user.birthAt).toISOString() : null;
    }

    return this.userRepository.create(user);
  }

  findAll() {
    return this.userRepository.findAll();
  }

  find(id: number) {
    return this.userRepository.find(id);
  }

  findByParam(param: any) {
    return this.userRepository.findByParam(param);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.userExists(id);

    const user = updateUserDto;
    if (user.birthAt) {
      user.birthAt = user.birthAt ? new Date(user.birthAt).toISOString() : null;
    }

    return this.userRepository.update(id, user);
  }

  async remove(id: number) {
    await this.userExists(id);
    return this.userRepository.remove(id);
  }

  async userExists(id: number) {
    if (!(await this.userRepository.userExists(id))) {
      throw new NotFoundException();
    }
  }
}
