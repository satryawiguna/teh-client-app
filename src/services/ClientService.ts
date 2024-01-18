import {QueryFunctionContext} from "@tanstack/react-query";
import {GenericObjectResponseType} from "../types/response/common/GenericObjectResponseType";
import {Client} from "../types/Client";
import {AxiosResponse} from "axios";
import {Api} from "../utils/HttpClient";

export class ClientService {
    static async getClient(request: QueryFunctionContext<[string, string]>): Promise<GenericObjectResponseType<Client>> {
        const [id] = request.queryKey

        const response: AxiosResponse = await Api("client").get(`/client/${id}`)

        return response.data
    }
}
