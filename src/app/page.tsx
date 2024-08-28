import Actors from "@/components/Actors";
import MainMovies from "@/components/MainMovies";
import RecMovies from "@/components/RecMovies";
import UpComingCarousel from "@/components/UpcomingCarousel";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center ">
      <MainMovies/>
      <UpComingCarousel/>
      <RecMovies/>
      <Actors/>
    </main>
  );
}
