import { Body, Controller, Delete, Get, Inject, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  @Inject(UserService)
  private readonly service: UserService;

  @Get()
  public getAllUser(): Promise<User> {
    return this.service.getAllUser();
  }

  @Get(':id')
  public getUser(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.service.getUser({ id });
  }

  @Post()
  public createUser(@Body() body: CreateUserDto): Promise<User> {
    return this.service.createUser(body);
  }

  @Delete(':id')
  public async deleteUser(@Param('id', ParseIntPipe) id: number): Promise<any> {
    await this.service.deleteUser({ id });
    return { status: true, message: "Delete successfully" }
  }

  @Put(':id')
  public async updateUser(@Body() body: CreateUserDto, @Param('id', ParseIntPipe) id: number): Promise<any> {
    return this.service.updateUser({ id }, body);
  }
}
