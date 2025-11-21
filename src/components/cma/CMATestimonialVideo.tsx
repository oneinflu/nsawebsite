"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { PlayIcon, PauseIcon } from "@heroicons/react/24/solid";
import { Linkedin } from "lucide-react";

type Story = {
  id: number;
  type: "text" | "video" | "image";
  content?: string;
  name: string;
  role: string;
  company?: string;
  avatar?: string;
  thumbnail?: string;
  videoSrc?: string;
  imageUrl?: string;
  description?: string;
  link?: string;
  review?: "linkedIn" | "google";
};

const stories: Story[] = [
  {
    id: 1,
    type: "video",
    thumbnail: "/images/home/stories/simran.jpg",
    videoSrc:
      "https://northstaracademy.b-cdn.net/US%20CMA%20Qualified/I%20am%20a%20Semi%20Qualified%20CMA%20USA%20%23NorthStarAcademy%20%23CMAUSA%20%23StudentSuccess.mp4",
    name: "Simran Khatri, CMA",
    role: "CMA Graduate, KPMG",
    avatar: "/images/home/stories/Simran.jpg",
  },
  {
    id: 2,
    type: "text",
    content:
      "Starting my journey with WNS is a proud moment. NSA gave me the clarity, confidence, and push I needed to reach here.",
    avatar: "/cma-testimonial/Harini.jpg",
    name: "Harini Sri Karthikeyan, CMA",
    role: "WNS Associate",
    link: "/images/home/stories/harini-link.jpg",
    review: "linkedIn",
  },
  {
    id: 3,
    type: "image",
    imageUrl: "/cma-testimonial/pickup8.png",
    description:
      "NSA Educates people by making it more simple. NorthStar made us who we are ....",
    name: "Student Review",
    role: "",
  },
  {
    id: 4,
    type: "video",
    thumbnail: "/images/home/stories/rid.jpg",
    videoSrc:
      "https://northstaracademy.b-cdn.net/US%20CMA%20Qualified/How%20to%20Crack%20CMA%20USA%20in%20First%20Attempt%20-%20Cleared%20at%2019.mp4",
    name: "Ridwan P, CMA",
    role: "CMA Graduate, Deloitte",
    avatar: "/images/home/stories/ajais.jpg",
  },
  {
    id: 5,
    type: "text",
    content:
      "NSA's placement process was super smooth. I felt well-prepared and confident when the opportunity came. Their structure truly works.",
    avatar: "/cma-testimonial/ninad.png",
    name: "Ninad Waingankar, CMA",
    role: "Senior Analyst II",
    link: "/images/home/stories/Ninad-link.jpeg",
    review: "linkedIn",
  },
  {
    id: 6,
    type: "image",
    imageUrl: "/cma-testimonial/pickup9.png",
    description:
      "Thoroughly Enjoyable Classes by Sir that Cracks CMA (USA) with the Creating Guru of Our Time. ....",
    name: "Student Review",
    role: "",
  },
  {
    id: 7,
    type: "video",
    thumbnail: "/images/home/stories/sree.jpg",
    videoSrc:
      "https://northstaracademy.b-cdn.net/US%20CMA%20Qualified/I%20am%20a%20CMA%20USA%20Aspirant%20%23northstaracademy%20%23cmausa%20%23cmaysacourse.mp4",
    name: "Sree Vardhan Birlangi",
    role: "CMA Graduate",
    avatar: "/images/home/stories/ajais.jpg",
  },
  {
    id: 8,
    type: "text",
    content:
      "Thanks to NorthStar Academy, I didn't feel lost in the placement process. Everything was simple, sorted, and focused on results.",
    avatar: "/cma-testimonial/Anagha.jpg",
    name: "S Anagha, CMA",
    role: "E&Y Tax Analyst",
    link: "/images/home/stories/Anagha-link.jpg",
    review: "google",
  },
  {
    id: 9,
    type: "image",
    imageUrl: "/cma-testimonial/pickup3.jpeg",
    description:
      "Best CMA USA Online Classes with Good Guidance and Personal Attention....",
    name: "Student Review",
    role: "",
  },
  {
    id: 10,
    type: "video",
    thumbnail: "/images/home/stories/devika.jpg",
    videoSrc:
      "https://northstaracademy.b-cdn.net/US%20CMA%20Qualified/I%20am%20a%20Qualified%20CMA%20USA%20%23northstaracademy%20%23irfatsir%20%23cmausaqualified.mp4",
    name: "Devika Satish",
    role: "CMA Graduate",
    avatar: "/images/home/stories/ajais.jpg",
  },
  {
    id: 11,
    type: "text",
    content:
      "I'm already placed! NSA helped me build job-ready skills early. That made all the difference",
    avatar: "/cma-testimonial/sabu.jpg",
    name: "Elwin Sabu, CMA",
    role: "Paperchase Accountancy",
    link: "/images/home/stories/sabu-link.jpg",
    review: "linkedIn",
  },
  {
    id: 12,
    type: "image",
    imageUrl: "/cma-testimonial/pickup7.png",
    description:
      "Best CMA USA Online Classes with Good Guidance and Personal Attention....",
    name: "Student Review",
    role: "",
  },
  {
    id: 13,
    type: "video",
    thumbnail: "/images/home/stories/roshel.jpg",
    videoSrc: "https://northstaracademy.b-cdn.net/US%20CMA%20Qualified/I%20Got%20Offer%20from%20QX%20Global%20_%20NorthStar%20Academy%20%23cmausa%20%23northstaracademy%20%23placement.mp4",
    name: "Roshel Vaz, CMA",
    role: "CMA Graduate",
    avatar: "/images/home/stories/roshel.jpg",
  },
  {
    id: 14,
    type: "text",
    content:
      "Thanks to NorthStar Academy, I didn't feel lost in the placement process. Everything was simple, sorted, and focused on results.",
    avatar: "/cma-testimonial/anubhab.png",
    name: "Anubhab Ranjan, CMA",
    role: "TCS",
    link: "/images/home/stories/Anubhab-link.jpeg",
    review: "linkedIn",
  },
  {
    id: 15,
    type: "video",
    thumbnail: "/images/home/stories/shaz.jpg",
    videoSrc: "https://northstaracademy.b-cdn.net/US%20CMA%20Qualified/NorthStar%20Academy%20Review%20by%20CMA%20USA%20Student%20-%20Course%20Review.mp4",
    name: "Muhammed Shaz, CMA",
    role: "CMA Graduate, Sharp & Tonnan",
    avatar: "/images/home/stories/ajais.jpg",
  },
  {
    id: 16,
    type: "text",
    content:
      "Thank you Northstar Academy NSA and M Irfat Sir for the guidance and support. I feel so lucky to have been a part of this journey.",
    avatar: "/cma-testimonial/nikhil.png",
    name: "Dr. Nikhil Mehta, CMA",
    role: "CMA USA",
    link: "/images/home/stories/Nikhil-link.jpeg",
    review: "linkedIn",
  },
];

const CARD_WIDTH = "w-72 md:w-80";
const CARD_HEIGHT = "h-[340px]";

const Card = ({ item }: { item: Story }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);
    return () => {
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
    };
  }, []);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) v.play();
    else v.pause();
  };

  const handleLinkClick = (link: string) => {
    if (link) window.open(link, "_blank");
  };

  // Video card
  if (item.type === "video") {
    return (
      <div className={`${CARD_WIDTH} ${CARD_HEIGHT} flex-shrink-0`}>
        <div className="rounded-2xl overflow-hidden h-full bg-black relative group">
          <video
            ref={videoRef}
            src={item.videoSrc}
            className="w-full h-full object-cover"
            playsInline
            preload="none"
            controls={false}
          />
          <button
            type="button"
            onClick={togglePlay}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 text-black flex items-center justify-center shadow hover:bg-white transition"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? (
              <PauseIcon className="w-6 h-6" />
            ) : (
              <PlayIcon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
    );
  }

  // Image card
  if (item.type === "image") {
    return (
      <div className={`${CARD_WIDTH} ${CARD_HEIGHT} flex-shrink-0`}>
        <div className="relative w-full h-full rounded-2xl overflow-hidden cursor-pointer group">
          <img
            src={item.imageUrl}
            alt={item.name || "Success Story"}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <p className="text-white text-sm">{item.description}</p>
          </div>
        </div>
      </div>
    );
  }

  // Text/Testimonial card
  return (
    <div className={`${CARD_WIDTH} ${CARD_HEIGHT} flex-shrink-0`}>
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden h-full flex flex-col relative">
        {/* Text area */}
        <div className="px-5 pt-5 flex-1">
          <p className="text-gray-800 leading-relaxed h-28 overflow-hidden">
            {item.content
              ? item.content.split(" ").length > 30
                ? item.content.split(" ").slice(0, 30).join(" ") + "..."
                : item.content
              : ""}
          </p>
        </div>

        {/* Author area */}
        <div className="px-5 pb-5 flex items-center space-x-3">
          <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
            {item.avatar ? (
              <Image
                src={item.avatar}
                alt={item.name}
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-sm text-gray-500">
                NS
              </div>
            )}
          </div>
          <div>
            <div className="font-semibold text-gray-900">{item.name}</div>
            <div className="text-sm text-gray-600">{item.role}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AutoRow = ({
  items,
  delay = 0,
  direction = "ltr",
}: {
  items: Story[];
  delay?: number;
  direction?: "ltr" | "rtl";
}) => {
  return (
    <div className="relative overflow-hidden">
      <div
        className={`flex space-x-6 ${
          direction === "rtl" ? "marquee-rtl" : "marquee"
        }`}
        style={{ animationDelay: `${delay}s` }}
      >
        {[...items, ...items].map((it, idx) => (
          <Card key={`${it.id}-${idx}`} item={it} />
        ))}
      </div>
    </div>
  );
};

const CMATestimonialVideo = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-red-50 via-red-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Hear It From Them
          </h2>
          <p className="text-gray-600">Ambitious People ❤️ NorthStar</p>
        </div>

        {/* Two-row wall of fame on all viewports */}
        <div className="space-y-8">
          <AutoRow
            items={stories.slice(0, Math.ceil(stories.length / 2))}
            direction="ltr"
          />
          <AutoRow
            items={stories.slice(Math.ceil(stories.length / 2))}
            delay={3}
            direction="rtl"
          />
        </div>
      </div>
    </section>
  );
};

export default CMATestimonialVideo;
