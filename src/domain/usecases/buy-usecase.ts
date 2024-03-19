import { BuyOrderService } from "../../service/binance/buy-order-service"
import { UseCase } from "../usecase"
import { BuyBodyReqRaw } from "../types/buy-types"

export class BuyUsecase extends UseCase<any>  {
  constructor() {
    super()
  }

  async handle(req: BuyBodyReqRaw) {
    const orderService = new BuyOrderService()
    const returnService = await orderService.callBuy(req)
    
    return returnService
  }
}