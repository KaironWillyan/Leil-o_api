import { Auction } from "@prisma/client"

export interface CreateBatchDTO {
    id: String
    title: String
    description: String
    minimum_bid: Number
    claimed_batch: Boolean
    price_claimed: Number
    auction?: Auction
    auction_id?:  String
}
