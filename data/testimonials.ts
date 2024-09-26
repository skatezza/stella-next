import { getI18n } from "@/locale/server";

export type Testimonial = {
  headline: string;
  content: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
};

export const getTestimonials = async () => {
  const t = await getI18n();

  const testimonials = [
    {
      headline: t("home.testimonials.alteretgo.headline"),
      content: t("home.testimonials.alteretgo.content"),
      author: {
        name: t("home.testimonials.alteretgo.authorName"),
        role: t("home.testimonials.alteretgo.authorRole"),
        image: "/images/avatars/avatar-1.jpeg",
      },
    },
    {
      headline: t("home.testimonials.emergence.headline"),
      content: t("home.testimonials.emergence.content"),
      author: {
        name: t("home.testimonials.emergence.authorName"),
        role: t("home.testimonials.emergence.authorRole"),
        image: "/images/avatars/avatar-2.png",
      },
    },
    {
      headline: t("home.testimonials.sockdatingsim.headline"),
      content: t("home.testimonials.sockdatingsim.content"),
      author: {
        name: t("home.testimonials.sockdatingsim.authorName"),
        role: t("home.testimonials.sockdatingsim.authorRole"),
        image: "/images/avatars/avatar-3.webp",
      },
    },
    {
      headline: t("home.testimonials.topscaleai.headline"),
      content: t("home.testimonials.topscaleai.content"),
      author: {
        name: t("home.testimonials.topscaleai.authorName"),
        role: t("home.testimonials.topscaleai.authorRole"),
        image: "/images/avatars/avatar-3.png",
      },
    },
    {
      headline: t("home.testimonials.megascale.headline"),
      content: t("home.testimonials.megascale.content"),
      author: {
        name: t("home.testimonials.megascale.authorName"),
        role: t("home.testimonials.megascale.authorRole"),
        image: "/images/avatars/avatar-5.jpg",
      },
    },
    {
      headline: t("home.testimonials.lightdph.headline"),
      content: t("home.testimonials.lightdph.content"),
      author: {
        name: t("home.testimonials.lightdph.authorName"),
        role: t("home.testimonials.lightdph.authorRole"),
        image: "/images/avatars/avatar-6.png",
      },
    },
  ] as Testimonial[];

  return testimonials;
};
