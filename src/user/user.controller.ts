import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdatePutUserDTO } from "./dto/update-put-user.dto";
import { UpdatePatchUserDTO } from "./dto/update-patch-user.dto";
import { UserService } from "./user.service";

@Controller('users')
export class UserController {

    constructor(private readonly userService: UserService) { }

    @Post()
    async create( @Body() body: CreateUserDTO ) {
        return this.userService.create(body);
    }

    @Get()
    async read() {
        return this.userService.list();
    }

    @Get(':id')
    async readOne( @Param() params ) {
        return this.userService.show(params.id);
    }

    @Put(':id')
    async update( @Param() params, @Body() body: UpdatePutUserDTO ) {
        return this.userService.update(params.id, body);
    }

    @Patch(':id')
    async updatePartial( @Param() params, @Body() body: UpdatePatchUserDTO ) {
        return this.userService.updatePatch(params.id, body);
    }

    @Delete(':id')
    async delete( @Param() params ) {
        return this.userService.delete(params.id);
    }
}