import logoTokners from "../assets/images/logoTokners.png";
import mobileHand from "../assets/images/mobileHand.png";

const TokIsComing = () => {
  return (
    <section className="text-white p-5 relative">
      <img
        className="scale-[150vw] z-10 relative"
        src={mobileHand}
        alt="mobileHand"
      />
      <div className="bg-[#171b29] rounded-3xl z-0 absolute right-5  top-10 w-[80vw] h-[47vh]"></div>

      <h2 className="flex items-center text-2xl font-bold mb-5">
        <img className="scale-75" src={logoTokners} alt="" />
        Tokner is coming
      </h2>
      <p className="opacity-75">
        <b>
          Cryptocurrency adoption is at less than 1% of the global world
          population with some countries and entities actively fighting against
          its mass adoption and the smartest developers and nerds holding the
          fort.
        </b>
        <br />
        <br />
        Bitcoin was the first, and it has since grown to thousands of tokens
        launched all aiming to fix one problem or the other with some quite
        simply FOMOing the moment. Our goal is to bring mass adoption to the
        cryptocurrency space by dumbing it down. How far down? So down that even
        a celebrity can explain it in simple words to their followers and have
        them download an app, buy into the social currency of their favourite
        person and watch their investment as is with other crypto currency
        project. <br />
        <br />
        <b>
          A new digital economy is coming. People would be just as powerful as
          countries and creators would be paid beyond the peanuts that
          conventional social media platforms can offer.{" "}
        </b>{" "}
        <br /> <br />
        There would be new markets and advertisers with little to offer would
        not find home there. Like Kanye said, <br /> <br />
        <b>
          {" "}
          "Personalities would become the new currency, and services would be
          built on top of them"
        </b>{" "}
        <br /> <br />
        Well, Kanye didn't exactly say that, but it sounds like something we
        hope he would say. <br /> <br />
        Currency is digital, it has been that way for a while now, but this time
        there would be no dead presidents on the money, there would people like
        you on the money, and you would own it because it would make the most
        sense in the world.
      </p>
    </section>
  );
};

export default TokIsComing;
