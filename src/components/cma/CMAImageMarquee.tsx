'use client';

import CMAStudentCard from './CMAStudentCard';

type Student = {
  name: string;
  imageSrc: string;
  content: string;
  part1Score: number;
  part2Score: number;
};

const students: Student[] = [
  { name: 'Rajath Bhakta K', imageSrc: '/students/1.jpg', content: 'Incredible support and expert teaching helped me master CMA.', part1Score: 400, part2Score: 390 },
  { name: 'Deepthi Monteiro', imageSrc: '/students/2.jpg', content: 'NSA coaching boosted my confidence and career opportunities.', part1Score: 440, part2Score: 390 },
  { name: 'Divya R', imageSrc: '/students/3.jpg', content: 'Engaging sessions sparked my passion for strategic finance.', part1Score: 430, part2Score: 400 },
  { name: 'Yashika Goyal', imageSrc: '/students/4.jpeg', content: 'Guidance helped me overcome challenges and excel in exams.', part1Score: 430, part2Score: 400 },
  { name: 'Jenil Parikh', imageSrc: '/students/3.jpg', content: 'Interactive coaching ensured mastery and steady progress.', part1Score: 410, part2Score: 430 },
  { name: 'Shiny Mascarenhas', imageSrc: '/students/2.jpg', content: 'Support and expert teaching helped me reach my goals.', part1Score: 400, part2Score: 400 },
  { name: 'Jaysri Duraisamy', imageSrc: '/students/1.jpg', content: 'NSA coaching helped me clear challenges with confidence.', part1Score: 440, part2Score: 400 },
  { name: 'Savijit Singh', imageSrc: '/students/4.jpeg', content: 'Training empowered my success and impact at work.', part1Score: 410, part2Score: 400 },
];

// Duplicate to create seamless looping
const loopStudents = [...students, ...students, ...students];

export default function CMAImageMarquee() {
  return (
    <section className="relative py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4">
       

        {/* Top row: left to right */}
        <div className="overflow-hidden marquee-mask">
          <div className="flex items-center gap-4 min-w-max animate-marquee-ltr">
            {loopStudents.map((s, idx) => (
              <CMAStudentCard
                key={`top-${idx}`}
                name={s.name}
                imageSrc={s.imageSrc}
                content={s.content}
                part1Score={s.part1Score}
                part2Score={s.part2Score}
              />
            ))}
          </div>
        </div>

        {/* Bottom row: right to left */}
        <div className="overflow-hidden marquee-mask mt-6">
          <div className="flex items-center gap-4 min-w-max animate-marquee-rtl">
            {loopStudents.map((s, idx) => (
              <CMAStudentCard
                key={`bottom-${idx}`}
                name={s.name}
                imageSrc={s.imageSrc}
                content={s.content}
                part1Score={s.part1Score}
                part2Score={s.part2Score}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee-mask {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
        @keyframes marquee-ltr {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        @keyframes marquee-rtl {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-ltr {
          animation: marquee-ltr 40s linear infinite;
        }
        .animate-marquee-rtl {
          animation: marquee-rtl 40s linear infinite;
        }
      `}</style>
    </section>
  );
}