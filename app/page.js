"use client";

// import { useEffect } from "react";
import MediaBanners from "@/components/mediaBanners/MediaBanners";
import Banner from "@/components/banner/Banner";
import dynamic from "next/dynamic";

// const Bootstrap = dynamic(
//   () => import("bootstrap/dist/js/bootstrap.bundle.min.js"),
//   { ssr: false }
// );

export default function Home() {
  // useEffect(() => {
  //   Bootstrap();
  // }, []);
  return (
    <div>
      <Banner mediaType="trending/movie/day?" type="banner" />
      <MediaBanners />
    </div>
  );
}
