import memojiAvatar1 from "@/assets/images/memoji-avatar-1.jpg";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.jpg";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.jpg";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.jpg";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.jpg";
import Link from "next/link";
import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "What Really Happens When You Enter a URL in the Browser?",
    position: "Behind the screens of web",
    text: "We all do it countless times a day — type a URL into our browser’s address bar and hit enter. But have you ever wondered what actually happens behind the scenes? The journey from pressing “Enter” to seeing a fully loaded webpage is a fascinating dance of technology, involving multiple steps and processes.",
    avatar: memojiAvatar1,
  },
  {
    name: "Load Balancers: The Unsung Traffic Cops of the Internet",
    position: "What Exactly Is a Load Balancer",
    text: "At its core, a load balancer is a middleman — a system that distributes incoming network traffic across multiple servers. Instead of sending all your user requests to one server (which will eventually beg for mercy), a load balancer makes sure the load is shared, fair, and efficient. It sits in front of your servers.",
    avatar: memojiAvatar2,
  },
  {
    name: "Demystifying Web Rendering: 5 Frontend Strategies Explained with Real-Life Analogies",
    position: "",
    text: "Have you ever clicked on a website and wondered how the content magically appears on your screen? Behind the scenes, different rendering strategies are at play, each with its own pros, cons, and use cases.In this post, we’ll break down five common web rendering strategies using simple analogies.",
    avatar: memojiAvatar3,
  },
  {
    name: "How to Implement Your Own DOM in JavaScript",
    position: "",
    text: "The Document Object Model (DOM) is an essential concept in web development. It represents the structure of a web page, allowing scripts to manipulate the HTML and XML documents.If you’ve ever worked with JavaScript in the browser, you’ve interacted with the DOM — whether adding an event listener to a button or dynamically updating content.",
    avatar: memojiAvatar4,
  },
  {
    name: "Supercharge Your JavaScript Performance with Memoization: A Deep Dive",
    position: "",
    text: "In JavaScript, optimizing performance can often be a game-changer, especially when dealing with expensive computations. One powerful technique to achieve this is memoization. Memoization allows you to store the results of expensive function calls and reuse them when the same inputs occur again.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Tech Blogs"
          title="A Few Things I’ve Written"
          description="Explore my thoughts, insights, and learnings across code, tools, and development."
        />
        <div className="mt-16 lg:mt-24 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4">
          <div className="flex gap-8 flex-none animate-move-left [animation-duration:20s] hover:[animation-play-state:paused] pr-8">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {" "}
                {testimonials.map(testimonial => (
                  <Link
                    href="https://medium.com/@ayogesh1214/what-really-happens-when-you-enter-a-url-in-the-browser-cb33c4da98c0"
                    target="_blank"
                    key={testimonial.name}
                  >
                    <Card
                      key={testimonial.name}
                      className="max-w-xs md:p-8 md:max-w-md p-6 hover:-rotate-3 transition duration-300 "
                    >
                      <div className="flex gap-4 items-center">
                        <div className="size-14 bg-gray-700 inline-flex rounded-full items-center justify-center flex-shrink-0">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="max-h-full"
                          />
                        </div>
                        <div>
                          <div className="font-semibold">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-white/40">
                            {testimonial.position}
                          </div>
                        </div>
                      </div>
                      <p className="mt-4 text-sm md:text-base md:mt-6">
                        {testimonial.text}
                      </p>
                    </Card>
                  </Link>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
