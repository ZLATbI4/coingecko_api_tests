import {BaseController} from "./BaseController";
import {AxiosResponse} from "axios";
import {Ping} from "../models/Ping";

export class PingController extends BaseController{
    constructor() {
        super("/ping");
    }

    async getGeckoSays() {
        let response: AxiosResponse<Ping> = await this.get()
        return response.data.gecko_says
    }
}