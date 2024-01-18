import {useQuery} from "@tanstack/react-query";
import {ClientService} from "../services/ClientService";

const useShowClient = (id: string) => {
    return useQuery({
        queryKey: ['show-client', id],
        queryFn: ClientService.getClient
    })
}

export {
    useShowClient
}
