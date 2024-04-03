import { Injectable } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { UpdatePutUserDTO } from "./dto/update-put-user.dto";
import { UpdatePatchUserDTO } from "./dto/update-patch-user.dto";

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

    async list() {
        return this.prisma.user.findMany();
    }

    async show(id: string) {
        return this.prisma.user.findUnique({
            where: {
                id: id
            }
        });
    }

    async update(id: string, data: UpdatePutUserDTO) {
        return this.prisma.user.update({
            where: {
                id: id
            },
            data: data
        });
    }

    async updatePatch(id: string, data: UpdatePatchUserDTO) {
        return this.prisma.user.update({
            where: {
                id: id
            },
            data: data
        });
    }

    async delete(id: string) {
        return this.prisma.user.delete({
            where: {
                id: id
            }
        });
    }
}