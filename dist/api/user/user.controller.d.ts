import { CreateUserDto } from './user.dto';
import { User } from './user.entity';
export declare class UserController {
    private readonly service;
    getAllUser(): Promise<User>;
    getUser(id: number): Promise<User>;
    createUser(body: CreateUserDto): Promise<User>;
    deleteUser(id: number): Promise<any>;
    updateUser(body: CreateUserDto, id: number): Promise<any>;
}
