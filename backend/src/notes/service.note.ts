import { getNote, getNoteUser } from "./repository.note";


export const getServiceNote = async() => {
    const res = await getNote();
    return res;
};

export const getServiceNoteUser = async() => {
    const res = await getNoteUser();
    return res;
}