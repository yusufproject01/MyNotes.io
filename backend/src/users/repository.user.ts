import prisma from "../db/pisma";

export const getUsers = async () => {
    const users = await prisma.user.findMany()
    return users;
};

