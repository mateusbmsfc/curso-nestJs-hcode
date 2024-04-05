import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";

@Module({
    imports: [JwtModule.register({
        secret: "Hw1HxgnXz17gn0uz0Ac0ghdYMngM15EqtxUiBwZyMHEhBC9uJy9GUTYdKVWLu1ua"
    })]
})
export class AuthModule {
    
}