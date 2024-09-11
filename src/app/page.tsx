import Actors from "@/components/Actors";
import MainMovies from "@/components/MainMovies";
import RecMovies from "@/components/RecMovies";
import UpComingCarousel from "@/components/UpcomingCarousel";

export default function Home() {
  return (
    <main className="px-6">
        <MainMovies />
        <UpComingCarousel />
        <RecMovies />
        <Actors />
    </main>

  );
}
