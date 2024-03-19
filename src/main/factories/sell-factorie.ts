
import { SaleController } from "../../presentation/controllers/sellcontroller"
import { SellUseCase } from "../../domain/usecases/sell-usecase"


export const makeSellController = (): SaleController => {
  const sellUseCase = new SellUseCase()
  return new SaleController(sellUseCase)
}