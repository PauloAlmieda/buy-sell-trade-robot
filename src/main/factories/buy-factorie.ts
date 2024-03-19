
import { BuyController } from "../../presentation/controllers/buy-controller"
import { BuyUsecase } from "../../domain/usecases/buy-usecase"


export const makeBuyController = (): BuyController => {
  const buyUseCase = new BuyUsecase()
  return new BuyController(buyUseCase)
}