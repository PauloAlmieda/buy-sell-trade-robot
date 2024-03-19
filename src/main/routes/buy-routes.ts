import { Router } from "express"
import { makeBuyController } from "../factories/buy-factorie"
import { adaptRoute } from "../adapters/express-route-adapter"


export default (router: Router): void => {
    
  //const controller = makeCallTradeController()
  router.post('/buy-bitcoin',adaptRoute(makeBuyController()))
}