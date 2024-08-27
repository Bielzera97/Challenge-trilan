import MainMovies from "@/components/MainMovies";
import UpComingCarousel from "@/components/UpcomingCarousel";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center p-4">
      <MainMovies/>
      <UpComingCarousel/>
    </main>
  );
}
