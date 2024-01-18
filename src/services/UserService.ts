import {UploadFileRequest} from "../types/request/elastic-email/UploadFileRequest";
import {UploadFileResponse} from "../types/response/elastic-email/UploadFileResponse";
import {Configuration, FilesApi} from "@elasticemail/elasticemail-client-ts-axios";
import {GenericObjectResponseType} from "../types/response/common/GenericObjectResponseType";
import {AxiosResponse} from "axios";
import {Api} from "../utils/HttpClient";

export class UserService {
    static async uploadAvatar(request: UploadFileRequest): Promise<UploadFileResponse> {
        const config = new Configuration({
            apiKey: `${import.meta.env.VITE_ELASTIC_EMAIL_API_KEY}`,
        });
        const fileApi = new FilesApi(config);

        return (await fileApi.filesPost(request)
            .catch(() => {
                return Promise.reject(request);
            })) as unknown as UploadFileResponse;
    }

    static async updateAvatar(request: Array<any>): Promise<GenericObjectResponseType<boolean>> {
        const [userId, body] = request;

        const response: AxiosResponse = await Api("identity").put(
            `/users/${userId}/avatars`,
            body
        );

        return response.data;
    }
}
