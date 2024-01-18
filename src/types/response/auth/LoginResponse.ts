import {Token} from "../../Token";
import {Role} from "../../Role";
import {Policy} from "../../Policy";


export type LoginResponse = {
    tokens: Token
    userId: string
    secondaryId: string
    fullName: string
    email: string
    profileImageUrl: string
    roles: Array<Partial<Role>>
    policies: Array<Partial<Policy>>
    authenticatorEnabled: boolean
}
