import { Batch } from "@prisma/client"

export interface CreateAuctionDTO {
    id:  String
    start_date:  Date
    start_time:  Date
    end_time:  Date
    list_itens:  Batch[]
}
