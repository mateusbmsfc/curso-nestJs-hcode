import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdatePutUserDTO } from "./dto/update-put-user.dto";
import { UpdatePatchUserDTO } from "./dto/update-patch-user.dto";

@Controller('users')
export class UserController {
    
    @Post()
    async create( @Body() body: CreateUserDTO ) {
        return { body }
    }

    @Get()
    async read() {
        return { users: [] }
    }

    @Get(':id')
    async readOne( @Param() params ) {
        return { user: {}, params }
    }

    @Put(':id')
    async update( @Param() params, @Body() body: UpdatePutUserDTO ) {
        return {
            method: 'put',
            body,
            params
        }
    }

    @Patch(':id')
    async updatePartial( @Param() params, @Body() body: UpdatePatchUserDTO ) {
        return {
            method: 'patch',
            body,
            params
        }
    }

    @Delete(':id')
    async delete( @Param() params ) {
        return {
            params
        }
    }
}