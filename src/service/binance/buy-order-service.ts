import { Order } from "../order"
import { BuyBodyReqRaw } from "../../domain/types/buy-types"

export class BuyOrderService extends Order {

  constructor() {
    super()
  }
  async callBuy(req:BuyBodyReqRaw) {
    
    this.setOrderSide('BUY')
    await this.setParamsToCall(req)
    return this.setOrder()
  }
} 