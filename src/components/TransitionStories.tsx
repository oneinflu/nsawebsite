
import Image from 'next/image';
import TransitionCard from './TransitionCard';
import StatsCard from './StatsCard';

const TransitionStories = () => {
  return (
    <section className="py-16 bg-white">
      <div className="mx-40 px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-red-500 text-sm font-medium tracking-wider uppercase mb-2">
            TRANSITION STORIES
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Learners who made it!
          </h2>
        </div>

        {/* Main Banner Image */}
        <div className="mb-8 rounded-lg">
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=300&fit=crop&crop=center"
            alt="Success Stories Banner"
            width={1200}
            height={300}
            className="w-full h-full"
          />
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Transition Card 1 */}
          <TransitionCard
            personName="S.Reddy"
            fromRole="Data Engineer"
            toRole="Data Analyst Swiggy"
            salaryHike="55% hike ↗"
            hikeColor="bg-green-500"
          />

          {/* Transition Card 2 */}
          <TransitionCard
            personName="S.Reddy"
            fromRole="Digital Administrator"
            toRole="Senior Administrator LifeCare Hospitals"
            salaryHike="Transitioned ↗"
            hikeColor="bg-green-500"
            textColor="text-white"
          />

          {/* Stats Card */}
          <StatsCard
            backgroundColor="bg-cyan-200"
            mainStat="~2X"
            subText="Average Salary Increase"
            textColor="text-black"
          />

          {/* Stats Card 2 */}
          <StatsCard
            backgroundColor="bg-orange-200"
            mainStat="62%"
            subText="Average Salary Hike"
            textColor="text-black"
          />

          {/* Transition Card 3 */}
          <TransitionCard
            personName="B.Swamy"
            fromRole="Junior Research Associate"
            toRole="Financial Analyst"
            salaryHike="Transitioned ↗"
            hikeColor="bg-green-500"
            textColor="text-white"
          />

          {/* Transition Card 4 */}
          <TransitionCard
            personName="A.Fernandes"
            fromRole="Senior Manager"
            toRole="Executive Manager"
            salaryHike="Transitioned ↗"
            hikeColor="bg-green-500"
          />
        </div>
        
        {/* Download Career Report Button */}
        <div className="flex justify-center mt-8">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors duration-200">
            Download Career Report
          </button>
        </div>
      </div>
    </section>
  );
};

export default TransitionStories;