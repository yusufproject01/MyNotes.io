import prisma from "../db/pisma";

export const getNote = async () => {
    const notes = await prisma.note.findMany()
    return notes;
};
