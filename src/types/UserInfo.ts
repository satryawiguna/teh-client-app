import {Role} from './Role';
import {Policy} from './Policy';

export type UserInfo = {
    userId: string
    secondaryId: string
    fullName: string
    email: string
    profileImageUrl: string
    roles: Array<Partial<Role>>
    policies: Array<Partial<Policy>>
    authenticatorEnabled: boolean
}
