import "./css/style.css";
import Header from "@/components/ui/header";
import { GeistSans } from "geist/font/sans";
import Footer from "@/components/ui/footer";
import Providers from "@/components/Providers";
import { getI18n } from "@/locale/server";
import NextTopLoader from "nextjs-toploader";
import ClientLayout from "@/components/ClientLayout";

export async function generateMetadata(_: { params: { lang: string } }) {
  const t = await getI18n();
  return {
    title: t("home.metaTitle"),
    description: t("common.description"),
    twitter: {
      card: "summary_large_image",
      title: t("common.title"),
      description: t("common.description"),
      creator: "@_sam0411",
    },
    metadataBase: process.env.NEXT_PUBLIC_BASE_URL
      ? new URL(process.env.NEXT_PUBLIC_BASE_URL)
      : undefined,
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <html lang={locale || "en"}>
      <body
        className={`${GeistSans.variable} font-inter antialiased bg-slate-900 text-slate-100 tracking-tight`}
      >
        <Providers locale={locale}>
          <ClientLayout>
            <NextTopLoader color="#4f46e5" />
            <div
              className="gradient-blur z-50"
              style={{ inset: "0 0 auto 0", transform: "scaleY(-1)" }}
            >
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <Header />
            <div className="flex flex-col min-h-screen overflow-hidden">
              {children}
            </div>
            <Footer />
            <div className="gradient-blur">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </ClientLayout>
        </Providers>
      </body>
    </html>
  );
}
