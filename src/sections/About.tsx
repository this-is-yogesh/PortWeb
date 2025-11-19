import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import bookImage2 from "@/assets/images/book-cover2.jpg";
import bookImage3 from "@/assets/images/book-cover3.jpg";
import Image from "next/image";
import JSIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GitIcon from "@/assets/icons/github.svg";
import ReactIcon from "@/assets/icons/react.svg";
import CSSIcon from "@/assets/icons/css3.svg";

import mapImage from "@/assets/images/map.png";
import SmileEmoji from "@/assets/images/memoji-smile.png";
import CardHeader from "@/components/CardHeader";
import ToolboxItems from "@/components/ToolboxItems";

const toolboxitems = [
  { title: "Javascript", icon: JSIcon },
  { title: "HTML", icon: HTMLIcon },
  { title: "CSS", icon: ChromeIcon },
  { title: "React", icon: GitIcon },
  { title: "NExt", icon: ReactIcon },
  { title: "Git", icon: CSSIcon },
];

const hobbies = [
  { title: "Hiking", emoji: "🎨", left: "5%", top: "5%" },
  { title: "Cycling", emoji: "🚴🏻", left: "50%", top: "5%" },
  ,
  // { title: "Hiking", emoji: "🥾", left: "35%", top: "40%" },
  ,
  { title: "Gaming", emoji: "🎮", left: "10%", top: "35%" },
  ,
  { title: "Music", emoji: "🎶", left: "70%", top: "45%" },
  ,
  { title: "Fitness", emoji: "🏋️", left: "5%", top: "65%" },
  ,
  { title: "Reading", emoji: "📖", left: "45%", top: "70% " },
];
export const AboutSection = () => {
  return (
    <div className="py-20">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="Glimpse into my world"
          description="Learn about me , who i am , what i do and what inspires me"
        />
        <div className=" mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
            <Card className="h-auto md:col-span-2">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspective"
              />

              <div className="grid grid-cols-3 gap-4 px-4 pb-4">
                {/* Top row - 3 books */}
                <div className="col-span-1">
                  <Image
                    src={bookImage}
                    alt="Book 1"
                    className="w-full h-auto rounded shadow"
                  />
                </div>
                <div className="col-span-1">
                  <Image
                    src={bookImage2}
                    alt="Book 2"
                    className="w-full h-auto rounded shadow"
                  />
                </div>
                <div className="col-span-1">
                  <Image
                    src={bookImage3}
                    alt="Book 3"
                    className="w-full h-auto rounded shadow"
                  />
                </div>

                {/* Bottom row - centered 2 books */}

              </div>
            </Card>

            <Card className="h-[320px] md:col-span-3">
              <CardHeader
                title="My Toolbox"
                description="Explore the techologies and tools i use to craft"
                className=""
              />
              <div>
                <ToolboxItems
                  toolboxitems={toolboxitems}
                  className=""
                  itemsWrapper=" animate-move-left [animation-duration:30s]"
                />
                <ToolboxItems
                  toolboxitems={toolboxitems}
                  className="mt-6 "
                  itemsWrapper="animate-move-right [animation-duration:15s]"
                />
              </div>
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the code"
                description="Explore my interest and hobbies"
                className="px-6 py-6"
              />
              <div className="relative flex-1">
                {hobbies.map(hobby => (
                  <div
                    key={hobby?.title}
                    className="inline-flex item s-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{ left: hobby?.left, top: hobby?.top }}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby?.title}
                    </span>
                    <span>{hobby?.emoji}</span>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0  relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 outline outline-2 -outline-offset-2 inset-0 outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image src={SmileEmoji} alt="smileemoji" className="size-20" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
