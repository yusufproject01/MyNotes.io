import prisma from "../db/pisma";

export const getNote = async () => {
  const notes = await prisma.note.findMany();
  return notes;
};

export const getNoteUser = async () => {
  try {
    const notes = await prisma.note.findMany({
      orderBy: { createdAt: "desc" },
      take: 10, // ambil 10 posting terbaru
      include: {
        user: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    });
    return notes;
  } catch (error) {
    console.error(error);
  }
};
