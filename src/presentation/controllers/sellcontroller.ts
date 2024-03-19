import { Controller,HttpRequest, HttpResponse,ok} from "../protocols";
import { SellUseCase } from "../../domain/usecases/sell-usecase";

export class SaleController implements Controller {
  private useCase:any
  constructor(usecase:SellUseCase) {
    this.useCase = usecase
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const usecaseReturn = await this.useCase.handle(httpRequest)
    return ok(usecaseReturn)
  }
}