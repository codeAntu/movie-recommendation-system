"use client";

import { useState } from "react";
import { Screen } from "../components/Screen";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {Button, } from "@nextui-org/button";
import axios from 'axios'


interface SelectProps {
  label: string;
  options: string[];
  selected: string;
  setSelected: (selected: string) => void;
}

interface Movie {
  title: string;
  genre: string[];
  mood: string[];
  duration: string
  description: string;
}

  export default function Home() {
  const [selectedGenres, setSelectedGenres] = useState<string>("");
  const [selectedDuration, setSelectedDuration] = useState<string>("");
  const [selectedMood, setSelectedMood] = useState<string>("");
  const [movies, setMovies] = useState<Movie[] | null>(null);

  async function getMovies(genres: string, duration: string, mood: string) {
    const url = "/api/getMovies?genres=" + genres + "&duration=" + duration + "&mood=" + mood;
    console.log(url);
    
    try {
      const response = await axios.get(url);
      console.log(response.data);
      setMovies(response.data.movies);
    }
    catch (error) {
      console.log(error);
      setMovies([]);
    }
  }

  return (
    <Screen className="space-y-7 text-white ">
      <div className="text-center space-y-1">
        <div className="text-xl font-bold sm:text-2xl ">
          Movie Recommendation System
        </div>
        <div className="text-sm">Find the best movies for you to watch</div>
      </div>

      <div className="bg-white/5 p-3 rounded-xl border border-white/10 space-y-3">
        <div className="text-lg sm:text-xl font-semibold text-white/70">
          Select your preferences{" "}
        </div>

        <Select
          label="Favorite Genres"
          options={["Action", "Comedy", "Drama", "Horror", "Sci-Fi", "Thriller"]}
          selected={selectedGenres}
          setSelected={setSelectedGenres}
        />

        <Select
          label="Movie Duration"
          options={["Short", "Medium", "Long"]}
          selected={selectedDuration}
          setSelected={setSelectedDuration}
        />

        <Select
          label="Your Mood"
          options={["Happy", "Sad", "Excited" , "Adventurous"]}
          selected={selectedMood}
          setSelected={setSelectedMood}
        />
      </div>

      <div className="flex justify-center">
        <Button
          className="rounded-lg bg-white/70 px-5 py-2 text-sm font-semibold transition duration-200 hover:bg-white hover:text-black"
          onClick={() => {
            getMovies(selectedGenres, selectedDuration, selectedMood);
          }}
          isDisabled={selectedGenres === "" || selectedDuration === "" || selectedMood === ""}
        >
          Get Recommendations
        </Button>
      </div>

      {movies && <Recommendation movies={movies} />}
          

    </Screen>
  );
}

function Recommendation(
    { movies }: { movies: Movie[] }
) {
  return (
    <div className="bg-white/5 p-3 rounded-xl border border-white/10 space-y-3">
      <div className="text-lg sm:text-xl font-semibold text-white/70"> 
        Recommendations for you
      </div>
      {
        movies.length === 0 ? (
          <div className="text-white/70 text-center py-4">
            No movies found with the given criteria
          </div>
        ) : ( <div className="space-y-3">
          {movies.map((movie) => (
            <Movie key={movie.title} movie={movie} />
          ))}
        </div>)
      }
    </div>
  )
}

function Movie(
  { movie }: { movie: Movie }
){
  return (
    <div className="bg-black/40 p-3 rounded-xl border border-white/5">
      <div className="">
        <div className="flex justify-between items-center"> 
        <div className="text-white/70 text-lg font-semibold">
          {movie.title}
          </div>
          <Tag text={movie.duration} />
        </div>
        <div className="text-white/70 text-sm">
          { movie.description }
        </div>
        <div className="flex space-x-2 items-center pt-2">
          {movie.genre.map((genre) => (
            <Tag key={genre} text={genre} />
          ))}
          {
            movie.mood.map((mood) => (
              <Tag key={mood} text={mood} />
            ))
          }
        </div>
      </div>
    </div>
  )
}


function Tag({ text }: { text: string }) {
  return (
    <div>
      <div className="bg-white/5 text-white/70 px-2 py-1 rounded-lg text-xs">
        {text}
      </div>
    </div>
  )

}

function Select({ label, options, selected, setSelected }: SelectProps) {
  return (
      <div className="flex justify-between items-center">
        <div
          className="font-semibold text-white/70"
        >
          {label}</div>
        <DropdownMenu>
          <DropdownMenuTrigger className={`rounded-lg bg-white/5 px-3 py-1 border  ${selected.length === 0 ? "text-white/50 border-black/10" : "text-white border-white/10"}`}>
            {selected.length === 0 ? `${label.split(" ")[1]}` : selected}
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-black/50 text-white border border-white/10 rounded-lg backdrop-blur-sm">
            {options.map((option) => (
              <DropdownMenuItem
                key={option}
                onClick={() => {
                  setSelected(option);
                }}
              >
                {option}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
  );
}
