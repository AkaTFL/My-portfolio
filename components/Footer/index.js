import Socials from "../Socials";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 py-2 laptop:p-0 flex justify-center">
        <div>
          <div className="mt-10 flex flex-col items-center">
            <h1 className="text-4xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              LET&apos;S WORK
            </h1>
            <h1 className="text-4xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              TOGETHER
            </h1>
            <Socials className="mt-2 laptop:mt-5" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
