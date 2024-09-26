"use client";

import { useState } from "react";
import React from "react";
import Header from "@/components/ui/header";
import AnimatedShinyText from "@/components/shine-button";
import { Button } from "@/components/button";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/badge";
import { useI18n } from "@/locale/client";

// Define types for our pricing data
type PlanFeature = {
  name: string;
  pro: string | boolean;
  starter: string | boolean;
  enterprise: string | boolean;
};

type PricingData = {
  plans: {
    pro: { name: string; price: { monthly: number; annual: number } };
    starter: { name: string; price: { monthly: number; annual: number } };
    enterprise: { name: string; price: { monthly: number; annual: number } };
  };
  features?: PlanFeature[];
};

// New type for section titles
type SectionTitle = {
  name: string;
  startIndex: number;
};

// Pricing data
const pricingData: PricingData = {
  plans: {
    starter: { name: "Starter", price: { monthly: 2999, annual: 2499 } },
    pro: { name: "Pro", price: { monthly: 4999, annual: 4499 } },
    enterprise: { name: "Enterprise", price: { monthly: 7999, annual: 6999 } },
  },
};

// Reusable components
const PlanHeader = ({
  plan,
  annual,
}: {
  plan: keyof typeof pricingData.plans;
  annual: boolean;
}) => (
  <div className="px-6 flex flex-col justify-end">
    <div className="grow pb-4 mb-4 border-b border-slate-800">
      <div className="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-200 pb-0.5">
        {pricingData.plans[plan].name}
      </div>
      <div className="mb-1">
        <span className="text-lg font-medium text-slate-500">$</span>
        <span className="text-3xl font-bold text-slate-50">
          {annual
            ? pricingData.plans[plan].price.annual
            : pricingData.plans[plan].price.monthly}
        </span>
        <span className="text-sm text-slate-600 font-medium">/mo</span>
      </div>
      <div className="text-slate-500">Everything at your fingertips.</div>
    </div>
    <div className="pb-4 border-b border-slate-800">
      <Button
        className={`gap-2 mx-auto flex rounded-full w-full transition duration-150 ease-in-out group ${
          plan === "pro"
            ? "text-white bg-indigo-500 hover:bg-indigo-600"
            : "text-slate-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white"
        }`}
      >
        Get Started{" "}
        <MoveRight
          className={`tracking-normal ${
            plan === "pro" ? "text-indigo-300" : "text-indigo-500"
          } group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1`}
        >
          -&gt;
        </MoveRight>
      </Button>
    </div>
  </div>
);

const FeatureRow = ({ feature }: { feature: PlanFeature }) => (
  <>
    <div className="px-6 flex flex-col justify-end">
      <div className="py-2 text-slate-400 border-b border-slate-800">
        {feature.name}
      </div>
    </div>
    {["starter", "pro", "enterprise"].map((plan) => (
      <div key={plan} className="px-6 flex flex-col justify-end">
        <div
          className={`flex items-center h-full border-b border-slate-800 py-2 text-slate-400 ${
            feature[plan as keyof PlanFeature] === false ? "hidden md:flex" : ""
          }`}
        >
          {feature[plan as keyof PlanFeature] !== " " && (
            <>
              <svg
                className="shrink-0 fill-indigo-500 mr-3"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="9"
              >
                <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
              </svg>
              <span>
                {typeof feature[plan as keyof PlanFeature] === "string" ? (
                  <span className="hidden md:block">
                    {feature[plan as keyof PlanFeature]}
                  </span>
                ) : (
                  ""
                )}
                <span className="md:hidden"> {feature.name}</span>
              </span>
            </>
          )}
        </div>
      </div>
    ))}
  </>
);

// New SectionTitle component
const SectionTitle = ({ title }: { title: string }) => (
  <>
    <div className="px-6 flex flex-col justify-end">
      <div className="py-2 text-slate-50 font-medium mt-4">{title}</div>
    </div>
    <div className="px-6 flex flex-col justify-end">
      <div className="py-2 text-slate-50 font-medium mt-4 md:hidden">
        {title}
      </div>
    </div>
    <div className="px-6 flex flex-col justify-end">
      <div className="py-2 text-slate-50 font-medium mt-4 md:hidden">
        {title}
      </div>
    </div>
    <div className="px-6 flex flex-col justify-end">
      <div className="py-2 text-slate-50 font-medium mt-4 md:hidden">
        {title}
      </div>
    </div>
  </>
);

export default function Pricing() {
  const [annual, setAnnual] = useState<boolean>(true);
  const t = useI18n();

  // Add section titles
  const sectionTitles: SectionTitle[] = [
    { name: t("pricing.sectionTitle1"), startIndex: 0 },
    { name: t("pricing.sectionTitle2"), startIndex: 6 },
    { name: t("pricing.sectionTitle3"), startIndex: 10 },
  ];

  const pricingData: PricingData = {
    plans: {
      starter: {
        name: t("pricing.plans.starter.name"),
        price: { monthly: 2999, annual: 2499 },
      },
      pro: { name: "Pro", price: { monthly: 4999, annual: 4499 } },
      enterprise: {
        name: "Enterprise",
        price: { monthly: 7999, annual: 6999 },
      },
    },
    features: [
      {
        name: t("pricing.features.feature1"),
        starter: t("pricing.features.feature1.starter"),
        pro: t("pricing.features.feature1.pro"),
        enterprise: t("pricing.features.feature1.enterprise"),
      },
      {
        name: t("pricing.features.feature2"),
        starter: t("pricing.features.feature2.starter"),
        pro: t("pricing.features.feature2.pro"),
        enterprise: t("pricing.features.feature2.enterprise"),
      },
      {
        name: t("pricing.features.feature3"),
        starter: t("pricing.features.feature3.starter"),
        pro: t("pricing.features.feature3.pro"),
        enterprise: t("pricing.features.feature3.enterprise"),
      },
      {
        name: t("pricing.features.feature4"),
        starter: t("pricing.features.feature4.starter"),
        pro: t("pricing.features.feature4.pro"),
        enterprise: t("pricing.features.feature4.enterprise"),
      },
      {
        name: t("pricing.features.feature5"),
        starter: t("pricing.features.feature5.starter"),
        pro: t("pricing.features.feature5.pro"),
        enterprise: t("pricing.features.feature5.enterprise"),
      },
      {
        name: t("pricing.features.feature6"),
        starter: t("pricing.features.feature6.starter"),
        pro: t("pricing.features.feature6.pro"),
        enterprise: t("pricing.features.feature6.enterprise"),
      },
      {
        name: t("pricing.features.feature7"),
        starter: t("pricing.features.feature7.starter"),
        pro: t("pricing.features.feature7.pro"),
        enterprise: t("pricing.features.feature7.enterprise"),
      },
      {
        name: t("pricing.features.feature8"),
        starter: t("pricing.features.feature8.starter"),
        pro: t("pricing.features.feature8.pro"),
        enterprise: t("pricing.features.feature8.enterprise"),
      },
      {
        name: t("pricing.features.feature9"),
        starter: t("pricing.features.feature9.starter"),
        pro: t("pricing.features.feature9.pro"),
        enterprise: t("pricing.features.feature9.enterprise"),
      },
      {
        name: t("pricing.features.feature10"),
        starter: t("pricing.features.feature10.starter"),
        pro: t("pricing.features.feature10.pro"),
        enterprise: t("pricing.features.feature10.enterprise"),
      },
      {
        name: t("pricing.features.feature11"),
        starter: t("pricing.features.feature11.starter"),
        pro: t("pricing.features.feature11.pro"),
        enterprise: t("pricing.features.feature11.enterprise"),
      },
      {
        name: t("pricing.features.feature12"),
        starter: t("pricing.features.feature12.starter"),
        pro: t("pricing.features.feature12.pro"),
        enterprise: t("pricing.features.feature12.enterprise"),
      },
      {
        name: t("pricing.features.feature13"),
        starter: t("pricing.features.feature13.starter"),
        pro: t("pricing.features.feature13.pro"),
        enterprise: t("pricing.features.feature13.enterprise"),
      },
      {
        name: t("pricing.features.feature14"),
        starter: t("pricing.features.feature14.starter"),
        pro: t("pricing.features.feature14.pro"),
        enterprise: t("pricing.features.feature14.enterprise"),
      },
      {
        name: t("pricing.features.feature15"),
        starter: t("pricing.features.feature15.starter"),
        pro: t("pricing.features.feature15.pro"),
        enterprise: t("pricing.features.feature15.enterprise"),
      },
    ],
  };

  return (
    <>
      <Header />

      <section className="relative">
        {/* Radial gradient */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none -z-10"
          aria-hidden="true"
        >
          <div className="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 w-1/3 aspect-square">
            <div className="absolute inset-0 translate-z-0 bg-indigo-500 rounded-full blur-[120px] opacity-50" />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Content */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <div>
                <div className="inline-flex font-medium pb-3 ">
                  <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-200 pb-3">
                    {t("pricing.badgeText")}
                  </div>
                </div>
              </div>
              <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
                {t("pricing.title")}
              </h2>
              <p className="text-lg text-slate-400">
                {t("pricing.description")}
              </p>
            </div>
            {/* Pricing tabs */}
            <div className="relative">
              {/* Blurred shape */}
              <div
                className="max-md:hidden absolute bottom-0 -mb-20 left-2/3 -translate-x-1/2 blur-2xl opacity-70 pointer-events-none"
                aria-hidden="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="434"
                  height="427"
                >
                  <defs>
                    <linearGradient
                      id="bs5-a"
                      x1="19.609%"
                      x2="50%"
                      y1="14.544%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#6366F1" />
                      <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#bs5-a)"
                    fillRule="evenodd"
                    d="m661 736 461 369-284 58z"
                    transform="matrix(1 0 0 -1 -661 1163)"
                  />
                </svg>
              </div>
              {/* Content */}
              <div className="grid md:grid-cols-4 xl:-mx-6 text-sm [&>div:nth-of-type(-n+4)]:py-6 [&>div:nth-last-of-type(-n+4)]:pb-6 max-md:[&>div:nth-last-of-type(-n+4)]:mb-8 max-md:[&>div:nth-of-type(-n+4):nth-of-type(n+1)]:rounded-t-3xl max-md:[&>div:nth-last-of-type(-n+4)]:rounded-b-3xl md:[&>div:nth-of-type(2)]:rounded-tl-3xl md:[&>div:nth-of-type(4)]:rounded-tr-3xl md:[&>div:nth-last-of-type(3)]:rounded-bl-3xl md:[&>div:nth-last-of-type(1)]:rounded-br-3xl [&>div]:bg-slate-700/20 [&>div:nth-of-type(4n+1)]:bg-transparent max-md:[&>div:nth-of-type(4n+5)]:hidden max-md:[&>div:nth-of-type(4n+2)]:order-1 max-md:[&>div:nth-of-type(4n+3)]:order-2 max-md:[&>div:nth-of-type(4n+4)]:order-3 max-md:md:[&>div:nth-of-type(n)]:mb-0 [&>div:nth-of-type(4n+3)]:relative before:[&>div:nth-of-type(4n+3)]:absolute before:[&>div:nth-of-type(4n+3)]:-inset-px before:[&>div:nth-of-type(4n+3)]:rounded-[inherit] before:[&>div:nth-of-type(4n+3)]:border-x-2 before:[&>div:nth-of-type(3)]:border-t-2 before:[&>div:nth-last-of-type(2)]:border-b-2 before:[&>div:nth-of-type(4n+3)]:border-indigo-500 before:[&>div:nth-of-type(4n+3)]:-z-10 before:[&>div:nth-of-type(4n+3)]:pointer-events-none">
                {/* Pricing toggle */}
                <div className="px-6 flex flex-col justify-end">
                  <div className="pb-4 md:border-b border-slate-800">
                    {/* Toggle switch */}
                    <div className="max-md:text-center">
                      <div className="inline-flex items-center whitespace-nowrap">
                        <div className="text-sm text-slate-500 font-medium mr-2 md:max-lg:hidden">
                          Monthly
                        </div>
                        <div className="relative">
                          <input
                            type="checkbox"
                            id="toggle"
                            className="peer sr-only"
                            checked={annual}
                            onChange={() => setAnnual(!annual)}
                          />
                          <label
                            htmlFor="toggle"
                            className="relative flex h-6 w-11 cursor-pointer items-center rounded-full bg-slate-400 px-0.5 outline-slate-400 transition-colors before:h-5 before:w-5 before:rounded-full before:bg-white before:shadow-sm before:transition-transform before:duration-150 peer-checked:bg-indigo-500 peer-checked:before:translate-x-full peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gray-400 peer-checked:peer-focus-visible:outline-indigo-500"
                          >
                            <span className="sr-only">Pay Quarterly</span>
                          </label>
                        </div>
                        <div className="text-sm text-slate-500 font-medium ml-2">
                          Quarterly{" "}
                          <span className="text-teal-500">(-20%)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Plan headers */}
                <PlanHeader plan="starter" annual={annual} />
                <PlanHeader plan="pro" annual={annual} />
                <PlanHeader plan="enterprise" annual={annual} />

                {/* Features with section titles */}
                {pricingData.features &&
                  pricingData.features.map((feature, index) => (
                    <React.Fragment key={index}>
                      {sectionTitles.find(
                        (section) => section.startIndex === index
                      ) && (
                        <SectionTitle
                          title={
                            sectionTitles.find(
                              (section) => section.startIndex === index
                            )!.name
                          }
                        />
                      )}
                      <FeatureRow feature={feature} />
                    </React.Fragment>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
