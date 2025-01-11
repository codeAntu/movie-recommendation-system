import { NextRequest, NextResponse } from "next/server";
import movies from "@/lib/movies";

export async function GET(req: NextRequest) {
  try {
    const genres = req.nextUrl.searchParams.get('genres');
    const duration = req.nextUrl.searchParams.get('duration');
    const mood = req.nextUrl.searchParams.get('mood');

    if (!genres || !duration || !mood) {
      throw new Error("Missing required query parameters");
    }

    const moviesList = movies.filter((movie) => {
      return movie.genre.includes(genres) && movie.mood.includes(mood) && movie.duration.toLowerCase() == duration.toLowerCase();
    });

    if (moviesList.length === 0) {
      return NextResponse.json({ movies: [] }); 
    }

    return NextResponse.json({ movies: moviesList });
  } catch  (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    return NextResponse.json({ error: "An unknown error occurred" }, { status: 400 });
  }    
}