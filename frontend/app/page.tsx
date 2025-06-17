"use client";

import Link from "next/link";
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
    <main className="flex flex-col w-full h-auto items-center justify-center pt-20">
      <section className="flex flex-col w-full h-auto my-6 gap-10 justify-center items-center">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          userData?.map((note: Note) => (
            <div
              key={note.id}
              className="max-w-xl w-full h-40 border border-slate-400 rounded-md flex flex-col justify-center px-4 py-2"
            >
              <Link
                href={`/prifile/${note.id}`}
                className="text-xl font-semibold text-slate-600 capitalize"
              >
                {note.user.name}
              </Link>
              <div className="w-full h-auto py-2 border-y border-slate-400">
                <h2 className="text-2xl font-bold text-center">{note.title}</h2>
                <p className="text-sm text-justify">{note.content}</p>
              </div>
            </div>
          ))
        )}
      </section>
    </main>
  );
}
