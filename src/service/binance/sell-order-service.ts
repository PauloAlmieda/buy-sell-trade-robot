import { Order } from "../order"
import { SellBodyReqRaw } from "../../domain/types/sell-types"

export class SellOrderService extends Order {

  constructor() {
    super()
  }
  async callSale(req:SellBodyReqRaw) {
    this.setOrderSide('SELL')
    await this.setParamsToCall(req)
    return this.setOrder()
  }
} 