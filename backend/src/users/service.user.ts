import { getUsers } from "./repository.user";


export const getServiceUser = async() => {
    const res = await getUsers();
    return res;
};