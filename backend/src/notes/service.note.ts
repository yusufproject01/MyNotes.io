import { getNote } from "./repository.note";


export const getServiceNote = async() => {
    const res = await getNote();
    return res;
};