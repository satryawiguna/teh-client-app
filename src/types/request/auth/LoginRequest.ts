export type LoginRequest = {
    email: string
    password: string
    rememberMe: boolean
    otp: string | null
}
