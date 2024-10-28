import Features from "@/components/home/features";
import Footer from "@/components/home/footer";
import Hero from "@/components/home/hero";
import PostHero from "@/components/home/post-hero";

export const dynamic = "force-static";

export default function Page() {
  return (
    <main>
      <Hero />
      <PostHero />
      <Features />
      <Footer />
    </main>
  );
}
