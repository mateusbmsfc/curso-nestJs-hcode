import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from "@nestjs/common";
import { ParamsTokenFactory } from "@nestjs/core/pipes";

@Controller('users')
export class UserController {
    
    @Post()
    async create( @Body() body) {
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
    async update( @Param() params, @Body() body ) {
        return {
            method: 'put',
            body,
            params
        }
    }

    @Patch(':id')
    async updatePartial( @Param() params, @Body() body ) {
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