import { Injectable } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class UserService {

    constructor(private readonly prisma: PrismaService) {}

    async create({ name, email, password }: CreateUserDTO) {
        return this.prisma.user.create({
            data: {
                name: name,
                email: email,
                password: password
            }
        });
    }
}