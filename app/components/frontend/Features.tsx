import { CloudRain } from "lucide-react";

const features = [
  {
    name: "Optimize Your Academic Choices",
    description:
      "With EduAI, quickly access precise evaluations and personalized professor recommendations based on real-time data. Enjoy a smooth, efficient evaluation experience tailored to your needs.",
    icon: CloudRain,
  },
  {
    name: "Intelligent Recommendations",
    description:
      "Our advanced AI system helps you discover the best professors based on your personal criteria. Analyze reviews, compare ratings, and make informed decisions for your academic journey.",
    icon: CloudRain,
  },
  {
    name: "Sentiment Analysis and Trend Tracking",
    description:
      "EduAI goes beyond recommendations; it tracks trends and analyzes sentiments to provide detailed insights into changes in professor ratings and reviews over time.",
    icon: CloudRain,
  },
  {
    name: "Easy to Use and Secure",
    description:
      "EduAI is designed to be both powerful and user-friendly. Our platform is not only quick to set up but also ensures the security of your data.",
    icon: CloudRain,
  },
];

export function Features() {
  return (
    <div className="py-24 sm:py-32">
      <div className="max-w-2xl mx-auto lg:text-center">
        <p className="font-semibold leading-7 text-primary">Discover EduAI</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Revolutionizing Academic Evaluations with AI
        </h1>
        <p className="mt-6 text-base leading-snug text-muted-foreground">
          We streamline your search by harnessing the power of artificial intelligence to analyze reviews and provide personalized recommendations in minutes.
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-16">
              <div className="text-base font-semibold leading-7">
                <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-primary">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                {feature.name}
              </div>
              <p className="mt-2 text-sm text-muted-foreground leading-snug">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
