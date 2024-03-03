import { Injectable } from "@nestjs/common";

@Injectable({})

export class AuthService{
signIn(){
 return {
    msg:'signin'
 }
}
signUp(){
return {
    msg:'signup'
}
}
}