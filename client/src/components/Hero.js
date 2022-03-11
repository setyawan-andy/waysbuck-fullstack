const Hero = () => {
  return <div>
      <section className="relative">
        <div className="relative container flex flex-col-reverse md:flex-row items-center mt-14 lg:mt-28 bg-hero-image bg-cover p-10 w-11/12  lg:w-9/12 bg-repeat-round gap-20 md:justify-end">
          <div className="lg:mt-14 lg:ml-16 flex flex-1 flex-col items-start gap-10 sm:mb-10">
            <h1 className="text-white font-black font-lato text-3xl md:text-4xl lg:text-7xl">WAYSBUCKS</h1>
            <h3 className="text-white font-thin font-lato text-xl md:text-2xl lg:text-3xl">Things are changing, but we’re still here for you</h3>
            <p className="text-white font-thin font-lato text-lg md:text-xl lg:text-2xl">We have temporarily closed our in-store cafes, but select grocery and drive-thru locations remaining open. <span className="font-bold">Waysbucks</span> Drivers is also available</p>
            <p className="mt-8 sm:mt-14 text-white font-thin font-lato text-lg md:text-xl lg:text-2xl">Let's Order ...</p>
          </div>
          <div className="z-1 md:-mr-28">
            <img src="../img/heropic1.svg" alt="heropic1" />
          </div>
        </div>
      </section>
  </div>;
};

export default Hero;
