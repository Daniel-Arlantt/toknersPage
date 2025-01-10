import mobiles from "../assets/images/mobiles.png";

const Home = () => {
  return (
    <section className="flex flex-col w-full h-screen items-center mb-10">
      <div className="text-white w-[90vw] relative z-10 ">
        <p className="text-lg font-bold bg-gradient-to-b from-[#2B3087] to-[#00B4EC] bg-clip-text text-transparent">
          At Tokners we are
        </p>
        <h2 className="text-4xl font-bold my-3">
          Reimagining social media through the power of the blockchain.
        </h2>
        <p className="opacity-65">
          We are creating social media 3.0 with influencers, celebrities and
          creators being able to launch their own digital currency by simply
          creating a profile with media content posted as Non fungible Tokens
          that can be owned and traded on the Tknrs network
        </p>
        <button
          className="bg-[#22A75D] hover:bg-[#167440] text-white font-semibold py-2 px-4 rounded-full shadow-lg shadow-[#167440] mt-5 transition-transform hover:scale-105"
        >
          Learn More
        </button>
      </div>
      <div>
        <img className="scale-150 pr-16" src={mobiles} alt="mobiles" />
      </div>
    </section>
  );
};

export default Home;
