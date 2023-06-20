import { CreateUserDto } from './user.dto';
import { User } from './user.entity';
export declare class UserService {
    private readonly repository;
    getAllUser(): any;
    getUser({ id }: {
        id: any;
    }): Promise<User>;
    createUser(body: CreateUserDto): Promise<User>;
    deleteUser({ id }: {
        id: any;
    }): any;
    updateUser({ id }: {
        id: any;
    }, body: CreateUserDto): Promise<User>;
}
