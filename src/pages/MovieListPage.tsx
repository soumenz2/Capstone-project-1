import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

// Define the types for the movie and genre data
interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
}

interface Genre {
  id: number;
  name: string;
}

interface SelectedItem {
  id: number;
  name: string;
}

const MoviesList: React.FC = () => {
  const selectedItem = useSelector((state: RootState) => state.user.category);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [genreIds, setGenreIds] = useState<{ [key: string]: number }>({});
  const [selectedGenres, setSelectedGenres] = useState<SelectedItem[]>([]);

  const bearerToken = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTc5M2M0NDM3MDM2MjE3ZjMzOWI1YTRmY2UxNjY3YyIsIm5iZiI6MTcyMDMyNDc2Ni41MzQ0MzIsInN1YiI6IjY2ODJlNjQ3NTJmN2IzN2U2OTI2MWMzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Cpu7yLQYDuddz1HteVOK-TdLxzjFHuhxQIE-AKgWwKk';

  // Retrieve selected category from Redux state
  useEffect(() => {
    if (selectedItem) {
      const categories = selectedItem.map(item => ({
        id: item.id,
        name: item.name.toLowerCase().trim()
      }));
      setSelectedGenres(categories);
    }
  }, [selectedItem]);

  // Fetch genre IDs from TMDb API
  useEffect(() => {
    const fetchGenreIds = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/genre/movie/list', {
          headers: {
            accept: 'application/json',
            Authorization: bearerToken,
          },
        });

        const genres: Genre[] = response.data.genres;
        const genreMap: { [key: string]: number } = {};
        genres.forEach(genre => {
          genreMap[genre.name.toLowerCase()] = genre.id;
        });

        setGenreIds(genreMap);
      } catch (error) {
        setError((error as Error).message);
      }
    };

    fetchGenreIds();
  }, [bearerToken]);

  // Fetch movies based on selected genres
  useEffect(() => {
    const fetchMovies = async () => {
      if (Object.keys(genreIds).length === 0 || selectedGenres.length === 0) return;

      try {
        const genreIdList = selectedGenres.map(genre => genreIds[genre.name.toLowerCase()]).filter(Boolean).join(',');

        const response = await axios.get('https://api.themoviedb.org/3/discover/movie', {
          headers: {
            accept: 'application/json',
            Authorization: bearerToken,
          },
          params: {
            with_genres: genreIdList,
          },
        });

        setMovies(response.data.results);
      } catch (error) {
        setError((error as Error).message);
      }
    };

    fetchMovies();
  }, [genreIds, selectedGenres, bearerToken]);

  return (
    <div className='bg-slate-200'>
      <Navbar />
      <h1 className='text-2xl'>Movies List</h1>
     
      {error && <p>Error: {error}</p>}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 p-4'>
        {movies.map(movie => (
          <div key={movie.id} className='md:h-56 md:w-64 h-64 w-48 border-2 bg-slate-100 rounded-2xl p-4 shadow-sm hover:bg-slate-400'>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="Poster" className="md:h-32 md:w-56 h-24 w-36 object-cover" />
            <h1>{movie.title}</h1>
            <p>Release Date: {movie.release_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
