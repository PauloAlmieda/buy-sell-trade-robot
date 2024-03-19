
import { SellOrderService } from "../../service/binance/sell-order-service"
import { UseCase } from "../usecase"
import { SellBodyReqRaw } from "../types/sell-types"

export class SellUseCase extends UseCase<any>  {
  constructor() {
    super()
  }

  async handle(req: SellBodyReqRaw) {

    const orderService = new SellOrderService()
    const returnService = await orderService.callSale(req)
    
    return returnService
  }
}