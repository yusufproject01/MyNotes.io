"use client";

import { axiosInstance } from "../api/axiosInstance";
import { useQuery } from "@tanstack/react-query";

interface Note {
  id: string;
  title: string;
  content: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

export default function Home() {
  const { data: userData, isLoading } = useQuery({
    queryKey: ["notes-users"],
    queryFn: async () => {
      const res = await axiosInstance.get("/notes/explore");

      // Hapus createdAt dan updatedAt
      const filtered = res.data.map((note: any) => ({
        id: note.id,
        title: note.title,
        content: note.content,
        user: {
          id: note.user.id,
          name: note.user.name,
          email: note.user.email,
        },
      }));

      return filtered;
    },
  });

  return (
    <main className="flex flex-col w-full h-auto items-center justify-center">
      <section className="flex flex-col w-full h-auto my-6 gap-10 justify-center items-center">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          userData?.map((note: Note) => (
            <div
              key={note.id}
              className="max-w-2xl w-full h-96 border border-slate-400 rounded-md flex flex-col px-4 py-2"
            >
              <h1 className="text-xl font-semibold text-slate-600">
                Dibuat oleh: {note.user.name}
              </h1>
              <h2 className="text-2xl font-bold">{note.title}</h2>
              <p className="text-lg text-justify">{note.content}</p>
            </div>
          ))
        )}
      </section>
    </main>
  );
}
