import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDTO } from './dto/create-user.dto';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService){}

    async create(data: CreateUserDTO) {
        try {
            let user = await this.prisma.user.create({
                data
            })
            return {
                data: user
            }
        }catch(err) {
            return {
                err
            }
        }
    }
}
