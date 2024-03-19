import { Router } from "express"
import { makeSellController } from "../factories/sell-factorie"
import { adaptRoute } from "../adapters/express-route-adapter"


export default (router: Router): void => {
    
  //const controller = makeCallTradeController()
  router.post('/sell-bitcoin',adaptRoute(makeSellController()))
}
