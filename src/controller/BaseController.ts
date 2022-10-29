import {URLSearchParams} from "url";
import {ApiClient} from "../apiClient/ApiClient";

export class BaseController{
    private readonly baseUrl = "https://api.coingecko.com/api/v3"
    private readonly endpoint: string

    constructor(private path: string) {
        this.endpoint = this.baseUrl + this.path
    }

    protected async get(queryParams?: URLSearchParams) {
        return await new ApiClient().get(this.endpoint, queryParams)
    }
}