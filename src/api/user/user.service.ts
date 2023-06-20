import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  @InjectRepository(User)
  private readonly repository: Repository<User>;

  public getAllUser(): any {
    return this.repository.find({
      order: { id: 'ASC' }
    });
  }

  public getUser({ id }): Promise<User> {
    return this.repository.findOne({ where: { id } });
  }

  public createUser(body: CreateUserDto): Promise<User> {
    const user: User = new User();

    user.name = body.name;
    user.email = body.email;

    return this.repository.save(user);
  }

  public deleteUser({ id }): any {
    return this.repository.delete(id);
  }

  public updateUser({ id }, body: CreateUserDto): Promise<User> {
    const user: User = new User();

    user.id = id;
    user.name = body.name;
    user.email = body.email;

    return this.repository.save(user);
  }
}
