import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {

    constructor(private readonly jwtService: JwtService) {}

    async createToken() {
        return this.jwtService.sign({
            id: 1,
            email: "<EMAIL>",
            name: "<NAME>",
            role: "admin"
        })
    }

    async checkToken(token: string) {
        return this.jwtService.verify(token)
    }
}