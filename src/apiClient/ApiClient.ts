import axios, {AxiosInstance} from "axios";
import {URLSearchParams} from "url";

export class ApiClient{
    private axiosInstance: AxiosInstance;

    constructor() {
        this.axiosInstance = axios.create()
    }

    async get(endpoint: string, queryParams?: URLSearchParams, headers?: any) {
        return await this.axiosInstance.get(endpoint, {
            params: queryParams,
            headers: headers
        });
    }
}