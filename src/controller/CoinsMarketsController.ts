import {BaseController} from "./BaseController";
import {URLSearchParams} from "url";

export class CoinsMarketsController extends BaseController{
    constructor() {
        super("/coins/markets");
    }

    async getCoinsMarkets(
        vs_currency: string,
        order?: string,
        per_page?: number,
        page?: number,
        sparkline?: boolean
    ) {
        let params = new URLSearchParams({"vs_currency": vs_currency});
        order != null ? params.append("order", order) : null
        per_page != null ? params.append("per_page", String(per_page)) : null
        page != null ? params.append("page", String(page)) : false
        sparkline != null ? params.append("sparkline", String(sparkline)) : null
        const response = await this.get(params);
        return response.data
    }
}