import { Wallet } from "@prisma/client"

export interface CreateUserDTO {
    id: String
    email: String
    name: String
    birth_date: Date
    address: String
    telephone_number: String
    carteira:  Wallet[]
}
