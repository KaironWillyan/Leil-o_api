import { User } from "@prisma/client"

export class CreateWalletDto {
    id:  String
    wallet_number: String
    balance: Number
    user?: User
    userId?: String
}
