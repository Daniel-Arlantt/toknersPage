import { PiCrownSimpleFill } from "react-icons/pi";

const TwoCards = () => {
  return (
    <section className="flex flex-col gap-10 justify-center items-center w-full text-white mb-10">
      <div className="bg-[#171B29] w-[90vw] p-8 rounded-2xl flex flex-col gap-3 transition-transform hover:scale-105">
        <div className="bg-[#22A75D] w-[15vw] h-[15vw] rounded-full flex justify-center items-center text-3xl text-[#0F1320] shadow-lg shadow-[#167440]">
          <PiCrownSimpleFill />
        </div>
        <h2 className="flex gap-2 font-bold text-2xl">
          For <div className="text-[#22A75D]">Creators</div>
        </h2>
        <p className="opacity-75 text-lg">
          Creators can gain independence through a decentralised digital
          currency system that is dependent on growing and engaging with the
          community and also their star power. They own 10-15% of the total
          value of the tokens minted.
        </p>
      </div>

      <div className="bg-[#171B29] w-[90vw] p-8 rounded-2xl flex flex-col gap-3 transition-transform hover:scale-105">
        <div className="bg-[#2278D4] w-[15vw] h-[15vw] rounded-full flex justify-center items-center text-3xl text-[#0F1320] shadow-lg shadow-[#2278D4]">
          <PiCrownSimpleFill />
        </div>
        <h2 className="flex gap-2 font-bold text-2xl">
          For <div className="text-[#2278D4]">Holders</div>
        </h2>
        <p className="opacity-75 text-lg">
          Holding social tokens allows the individual to gain access to benefits
          including unreleased content, private communities, direct access to
          celebrity, early- access to tickets and more as well as the ability to
          trade with other communities in order to gain access to more creator
          content with early token buyers being the biggest winners as the value
          of the token increases with more buyers.
        </p>
      </div>
    </section>
  );
};

export default TwoCards;
