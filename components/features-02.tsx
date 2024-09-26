import Image from "next/image";
import Particles from "./particles";
import Highlighter, { HighlighterItem } from "./highlighter";

import FeatureImg01 from "@/public/images/feature-image-01.png";
import FeatureImg02 from "@/public/images/feature-image-02.png";
import FeatureImg03 from "@/public/images/feature-image-03.png";
import { getI18n } from "@/locale/server";
import { useI18n } from "@/locale/client";

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="bg-slate-700/25 p-4 rounded-3xl hover:bg-slate-700/50 transition-all duration-300 cursor-default">
      <div className="flex flex-row items-center gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-check text-indigo-500 shrink-0"
        >
          <path d="M20 6 9 17l-5-5"></path>
        </svg>
        <div className="flex flex-col items-start">
          <h4 className="font-medium text-slate-50">{title}</h4>
          <p className="text-sm text-slate-400">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default async function Features02() {
  const t = await getI18n();

  const featureData = [
    {
      icon: (
        <path d="M7.999 2.34a4.733 4.733 0 0 0-6.604 6.778l5.904 5.762a1 1 0 0 0 1.4 0l5.915-5.77a4.733 4.733 0 0 0-6.615-6.77Zm5.208 5.348-5.208 5.079-5.2-5.07a2.734 2.734 0 0 1 3.867-3.864c.182.19.335.404.455.638a1.04 1.04 0 0 0 1.756 0 2.724 2.724 0 0 1 5.122 1.294 2.7 2.7 0 0 1-.792 1.923Z" />
      ),
      title: t("home.features02.feature1.title"),
      description: t("home.features02.feature1.description"),
    },
    {
      icon: (
        <path d="M7.999 2.34a4.733 4.733 0 0 0-6.604 6.778l5.904 5.762a1 1 0 0 0 1.4 0l5.915-5.77a4.733 4.733 0 0 0-6.615-6.77Zm5.208 5.348-5.208 5.079-5.2-5.07a2.734 2.734 0 0 1 3.867-3.864c.182.19.335.404.455.638a1.04 1.04 0 0 0 1.756 0 2.724 2.724 0 0 1 5.122 1.294 2.7 2.7 0 0 1-.792 1.923Z" />
      ),
      title: t("home.features02.feature2.title"),
      description: t("home.features02.feature2.description"),
    },
    {
      icon: (
        <path d="M7.999 2.34a4.733 4.733 0 0 0-6.604 6.778l5.904 5.762a1 1 0 0 0 1.4 0l5.915-5.77a4.733 4.733 0 0 0-6.615-6.77Zm5.208 5.348-5.208 5.079-5.2-5.07a2.734 2.734 0 0 1 3.867-3.864c.182.19.335.404.455.638a1.04 1.04 0 0 0 1.756 0 2.724 2.724 0 0 1 5.122 1.294 2.7 2.7 0 0 1-.792 1.923Z" />
      ),
      title: t("home.features02.feature3.title"),
      description: t("home.features02.feature3.description"),
    },
    {
      icon: (
        <path d="M7.999 2.34a4.733 4.733 0 0 0-6.604 6.778l5.904 5.762a1 1 0 0 0 1.4 0l5.915-5.77a4.733 4.733 0 0 0-6.615-6.77Zm5.208 5.348-5.208 5.079-5.2-5.07a2.734 2.734 0 0 1 3.867-3.864c.182.19.335.404.455.638a1.04 1.04 0 0 0 1.756 0 2.724 2.724 0 0 1 5.122 1.294 2.7 2.7 0 0 1-.792 1.923Z" />
      ),
      title: t("home.features02.feature4.title"),
      description: t("home.features02.feature4.description"),
    },
    {
      icon: (
        <path d="M7.999 2.34a4.733 4.733 0 0 0-6.604 6.778l5.904 5.762a1 1 0 0 0 1.4 0l5.915-5.77a4.733 4.733 0 0 0-6.615-6.77Zm5.208 5.348-5.208 5.079-5.2-5.07a2.734 2.734 0 0 1 3.867-3.864c.182.19.335.404.455.638a1.04 1.04 0 0 0 1.756 0 2.724 2.724 0 0 1 5.122 1.294 2.7 2.7 0 0 1-.792 1.923Z" />
      ),
      title: t("home.features02.feature5.title"),
      description: t("home.features02.feature5.description"),
    },
    {
      icon: (
        <path d="M7.999 2.34a4.733 4.733 0 0 0-6.604 6.778l5.904 5.762a1 1 0 0 0 1.4 0l5.915-5.77a4.733 4.733 0 0 0-6.615-6.77Zm5.208 5.348-5.208 5.079-5.2-5.07a2.734 2.734 0 0 1 3.867-3.864c.182.19.335.404.455.638a1.04 1.04 0 0 0 1.756 0 2.724 2.724 0 0 1 5.122 1.294 2.7 2.7 0 0 1-.792 1.923Z" />
      ),
      title: t("home.features02.feature6.title"),
      description: t("home.features02.feature6.description"),
    },
  ];
  return (
    <section className="relative">
      <div
        className="absolute flex items-center justify-center top-24 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square"
        aria-hidden="true"
      >
        <div className="absolute inset-0 translate-z-0 bg-indigo-500 rounded-full blur-[120px] opacity-70" />
        <div className="absolute w-1/4 h-1/4 translate-z-0 bg-indigo-500 rounded-full blur-[40px]" />
      </div>
      {/* Particles animation */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 -z-10 w-80 h-80 -mt-24 -ml-32">
        <Particles
          className="absolute inset-0 -z-10"
          quantity={6}
          staticity={30}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-16 md:py-32">
          {/* Section header */}
          <div className="max-w-xl mx-auto text-center pb-12 md:pb-20">
            {/* <div>
              <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-200 pb-3">
                {t("home.features02.badgeText")}
              </div>
            </div> */}
            <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
              {t("home.features02.title")}
            </h2>
            <p className="text-lg text-slate-400">
              {t("home.features02.subtitle")}
            </p>
          </div>

          {/* Features list */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-6">
            {featureData.map((feature, index) => (
              <FeatureItem
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
