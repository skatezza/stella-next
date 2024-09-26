"use client";

import { useState } from "react";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import Particles from "./particles";
import Illustration from "@/public/images/glow-top.svg";

interface FeatureItem {
  subtitle: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface FeaturesSectionProps {
  title: string;
  description: string;
  features: FeatureItem[];
}

export default function Features() {
  const featuresData: FeaturesSectionProps = {
    title: "Why Trust Us?",
    description:
      "Define access roles for the end-users, and extend your authorization capabilities to implement dynamic access control.",
    features: [
      {
        title: "Fast & Efficient",
        subtitle:
          "We will get you from idea-stage to MVP in weeks, instead of months. You can expect a world-class product with a fast-paced development.",
        description:
          "Delegate the work to us. We will build your product under 20 days.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-gauge"
          >
            <path d="m12 14 4-4"></path>
            <path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
          </svg>
        ),
      },
      {
        title: "Scalable Technologies",
        subtitle:
          "We will select the latest technologies and coding best practices to ensure your prototype or product has the highest quality built feel.",
        description:
          "Ex-FAANG/Big Tech Product Managers, Engineers, and Designers",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-chart-no-axes-column-increasing"
          >
            <line x1="12" x2="12" y1="20" y2="10"></line>
            <line x1="18" x2="18" y1="20" y2="4"></line>
            <line x1="6" x2="6" y1="20" y2="16"></line>
          </svg>
        ),
      },
      {
        title: "Support",
        subtitle:
          "We will provide you with initial marketing support to get your MVP off the ground.",
        description: "Feature 3 description",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-feather"
          >
            <path d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z"></path>
            <path d="M16 8 2 22"></path>
            <path d="M17.5 15H9"></path>
          </svg>
        ),
      },
    ],
  };

  return <FeaturesSection {...featuresData} />;
}

const FeatureIcon: React.FC<{ icon: React.ReactNode; isActive: boolean }> = ({
  icon,
  isActive,
}) => (
  <Transition
    show={isActive}
    className="absolute"
    enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
    enterFrom="opacity-0 -rotate-[60deg]"
    enterTo="opacity-100 rotate-0"
    leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
    leaveFrom="opacity-100 rotate-0"
    leaveTo="opacity-0 rotate-[60deg]"
  >
    <div className="relative flex items-center justify-center w-16 h-16 border border-transparent rounded-2xl shadow-2xl -rotate-[14deg] [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-2xl">
      {icon}
    </div>
  </Transition>
);

const FeaturesSection: React.FC<FeaturesSectionProps> = ({
  title,
  description,
  features,
}) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Illustration */}
        <div
          className="absolute inset-0 -z-10 -mx-28 rounded-t-[3rem] pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute left-1/2 -translate-x-1/2 top-0 -z-10">
            <Image
              src={Illustration}
              className="max-w-none"
              width={1404}
              height={658}
              alt="Features Illustration"
            />
          </div>
        </div>

        <div className="pt-16 pb-12 md:pt-52 md:pb-20">
          <div>
            {/* Section content */}
            <div className="max-w-xl mx-auto md:max-w-none flex flex-col md:flex-row md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-8 space-y-reverse md:space-y-0">
              {/* Content */}
              <div
                className="md:w-7/12 lg:w-1/2 order-1 md:order-none max-md:text-center"
                data-aos="fade-down"
              >
                {/* Content #1 */}
                <div>
                  <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-200 pb-3 text-xl">
                    {title}
                  </div>
                </div>
                <h3 className="h3 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-3">
                  {features[activeTab].title}
                </h3>
                <p className="text-lg text-slate-400 mb-8">
                  {features[activeTab].subtitle}
                </p>
                <div className="mt-8 max-w-xs max-md:mx-auto space-y-2">
                  {features.map((feature, index) => (
                    <button
                      key={index}
                      className={`flex items-center text-sm font-medium text-slate-50 rounded border bg-slate-800/25 w-full px-3 py-2 transition duration-150 ease-in-out hover:opacity-100 ${
                        activeTab !== index
                          ? "border-slate-700 opacity-50"
                          : "border-indigo-700 shadow shadow-indigo-500/25"
                      }`}
                      onClick={() => setActiveTab(index)}
                    >
                      {feature.icon}
                      <span className="ml-3">{feature.title}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div
                className="md:w-5/12 lg:w-1/2"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="relative py-24 -mt-12">
                  {/* Particles animation */}
                  <Particles
                    className="absolute inset-0 -z-10"
                    quantity={8}
                    staticity={30}
                  />

                  <div className="flex items-center justify-center">
                    <div className="relative w-48 h-48 flex justify-center items-center">
                      {/* Halo effect */}
                      <svg
                        className="absolute inset-0 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 will-change-transform pointer-events-none blur-md"
                        width="480"
                        height="480"
                        viewBox="0 0 480 480"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs>
                          <linearGradient
                            id="pulse-a"
                            x1="50%"
                            x2="50%"
                            y1="100%"
                            y2="0%"
                          >
                            <stop offset="0%" stopColor="#A855F7" />
                            <stop offset="76.382%" stopColor="#FAF5FF" />
                            <stop offset="100%" stopColor="#6366F1" />
                          </linearGradient>
                        </defs>
                        <g fillRule="evenodd">
                          <path
                            className="pulse"
                            fill="url(#pulse-a)"
                            fillRule="evenodd"
                            d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z"
                          />
                          <path
                            className="pulse pulse-1"
                            fill="url(#pulse-a)"
                            fillRule="evenodd"
                            d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z"
                          />
                          <path
                            className="pulse pulse-2"
                            fill="url(#pulse-a)"
                            fillRule="evenodd"
                            d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z"
                          />
                        </g>
                      </svg>
                      {/* Grid */}
                      <div className="absolute inset-0 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none w-[500px] h-[500px] rounded-full overflow-hidden [mask-image:_radial-gradient(black,_transparent_60%)]">
                        <div className="h-[200%] animate-endless">
                          <div className="absolute inset-0 [background:_repeating-linear-gradient(transparent,_transparent_48px,_theme(colors.white)_48px,_theme(colors.white)_49px)] blur-[2px] opacity-20" />
                          <div className="absolute inset-0 [background:_repeating-linear-gradient(transparent,_transparent_48px,_theme(colors.indigo.500)_48px,_theme(colors.indigo.500)_49px)]" />
                          <div className="absolute inset-0 [background:_repeating-linear-gradient(90deg,transparent,_transparent_48px,_theme(colors.white)_48px,_theme(colors.white)_49px)] blur-[2px] opacity-20" />
                          <div className="absolute inset-0 [background:_repeating-linear-gradient(90deg,transparent,_transparent_48px,_theme(colors.indigo.500)_48px,_theme(colors.indigo.500)_49px)]" />
                        </div>
                      </div>
                      {/* Icons */}
                      {features.map((feature, index) => (
                        <FeatureIcon
                          key={index}
                          icon={feature.icon}
                          isActive={activeTab === index}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
