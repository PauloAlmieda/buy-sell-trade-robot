import axios from "axios";
import crypto from 'crypto'
import * as dotenv from "dotenv";
import { BuyBodyReqRaw } from "../domain/types/buy-types";
dotenv.config();

export class Order {

  private typeOrder = ''
  private quantityOrder: number
  private type: string
  private symbol: string
  private headers: {}
  constructor() {
    this.headers = {
      'X-MBX-APIKEY': process.env.BINANCE_API_URL,
      'Content-Type': 'application/json'
    }
  }

  async setOrder():Promise<[any]> {
    const side = this.typeOrder
    const data:any = {
      symbol: this.symbol,
      side,
      type: this.type,
      quantity: this.quantityOrder,
      timestamp: Date.now(),
      recvWindow: 60000//máximo permitido, default 5000
    };

    const signature = crypto
      .createHmac('sha256', process.env.BINANCE_APY_SECRET)
      .update(`${new URLSearchParams(data)}`)
      .digest('hex');

    const newData = { ...data, signature };
    const qs = `?${new URLSearchParams(newData)}`;

    try {
        const result = await axios({
          method: 'POST',
          url: `${process.env.BINANCE_API_URL}/v3/order${qs}`,
          headers: { 'X-MBX-APIKEY': process.env.BINANCE_API_KEY }
        });
        return [ result.data]
    } catch (err) {
        console.error(err);
    }
  }
  setOrderSide (type:string) {
    this.typeOrder = type
  }
  async setParamsToCall(req:BuyBodyReqRaw) {
    this.quantityOrder = req.body.quantity
    this.symbol = req.body.symbol
    this.type = req.body.type
  }
}
