import { Body, Controller, Post, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { Response } from 'express'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  async create(@Body() body: CreateUserDTO, @Res() res: Response) {
    try {
      let { err, data } = await this.userService.create(body);
      if (err) {
        throw "Lỗi!"
      }

      return res.status(200).json({
        message: "Tạo thành công!",
        data
      })
    } catch (err) {
      return res.status(500).json({
        message: err
      })
    }
  }
}
