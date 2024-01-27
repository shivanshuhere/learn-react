import { Card } from "../components";

function Hero() {
  return (
    <div
      className="
      md:flex-row md:flex-wrap md:justify-center
      md:px-8
    min-h-screen flex flex-col  items-center gap-4 md:gap-7 py-8 bg-[url('src/assets/foody-zone-bg.png')] bg-fixed bg-no-repeat bg-cover"
    >
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default Hero;
