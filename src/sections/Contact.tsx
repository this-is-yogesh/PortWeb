import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center relative overflow-hidden z-0 md:text-left">
          <div
            className="absolute top-0 right-0 bottom-0 left-0 opacity-5 -z-10"
            style={{ backgroundImage: `url(${grainImage.src})` }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 items-center md:gap-16">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let`s create something better together
              </h2>
              <p className="text-sm mt-2 md:text-base">
                Ready to bring your next project to life ? I can help you do it
                with my immense skill set and deep experience
              </p>
            </div>
            <div>
              <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 mt-8 w-max border border-gray-900">
                <span className="font-semibold">Contact me </span>
                <ArrowUpRight className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
