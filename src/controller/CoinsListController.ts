import {BaseController} from "./BaseController";
import {AxiosResponse} from "axios";
import {CoinsList} from "../models/CoinsList";

export class CoinsListController extends BaseController{
    constructor() {
        super("/coins/list");
    }

    async getCoinsList() {
        let response: AxiosResponse<CoinsList> = await this.get()
        return response.data
    }
}