import MediaBanners from "@/components/mediaBanners/MediaBanners";
import Banner from "@/components/banner/Banner";

export default function Home() {
  return (
    <div>
      <Banner mediaType="trending/movie/day?" type="banner" />
      <MediaBanners />
    </div>
  );
}
