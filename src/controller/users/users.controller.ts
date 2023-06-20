import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User, UserDocument } from './../../schemas/users/users.schema';
import { UsersService } from './../../services/users/users.service';
import { ICreateUserDTO } from './dto/create-user.dto';

@ApiTags('users')
@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) { }

    @Get()
    @ApiOperation({ summary: 'Get all users' })
    @ApiResponse({ status: 200, description: 'Return all users.' })
    async findAll() {
        return this.userService.findAll();
    }

    @Post()
    @ApiOperation({ summary: 'Create a user' })
    @ApiResponse({ status: 201, description: 'The user has been successfully created.' })
    @ApiBody({ type: User })
    async create(@Body() user: UserDocument) {
        return this.userService.create(user);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update a user' })
    @ApiResponse({ status: 200, description: 'The user has been successfully updated.' })
    @ApiParam({ name: 'id', required: true, description: 'The id of the user' })
    @ApiBody({ type: User })
    async update(@Param('id') id: string, @Body() updatedUser: UserDocument) {
        return this.userService.update(id, updatedUser);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete a user' })
    @ApiResponse({ status: 200, description: 'The user has been successfully deleted.' })
    @ApiParam({ name: 'id', required: true, description: 'The id of the user' })
    async delete(@Param('id') id: string) {
        return this.userService.delete(id);
    }
}
