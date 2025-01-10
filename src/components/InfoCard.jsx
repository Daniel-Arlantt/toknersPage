import colors from "../assets/images/colors.png";

const InfoCard = () => {
  return (
    <section className="relative">
      <img className="scale-x-[-1]" src={colors} alt="" />
      <div className="relative -mt-[36vw] bg-white p-7 py-10 rounded-tr-[40vw] z-10">
        <h2 className="text-4xl font-bold my-6">
          What makes <br /> us different?
        </h2>
        <p className="opacity-70">
          <b>
            We would only launch tokens with the express permission of the
            creators.
          </b>
          <br /> <br />
          There are several thousand celebrities and creators on twitter,
          tiktok, Instagram and YouTube with followings in the millions who we
          would be actively engaging before we go viral. <br /> <br /> We would
          get them on our platform and they would see the opportunity to create
          a fan driven digital economy where their digital content can be traded
          as NFTs and their most loyal fans can have the monetary value of their
          creators currency increase significantly as they promote their digital
          currency across their channels while our native token holders benefit
          from the Weentar popularity.
        </p>
      </div>
    </section>
  );
};

export default InfoCard;
