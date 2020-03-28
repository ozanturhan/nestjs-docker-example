import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { DeleteResult } from 'typeorm/query-builder/result/DeleteResult';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private usersRepository: Repository<User>) {}

  async getUsers(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async getUser(id: number): Promise<User> {
    return await this.usersRepository.findOne(id);
  }

  async updateUser(user: User) {
    return this.usersRepository.save(user);
  }

  async createUser(user: User): Promise<User> {
    return this.usersRepository.save(user);
  }

  async deleteUser(user: User): Promise<DeleteResult> {
    return this.usersRepository.delete(user);
  }
}
