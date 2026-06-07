import MessageSection from "@/components/MessageSection";
import ServiceSection from "@/components/ServiceSection";
import FramerMotionSection from "@/components/FramerMotionSection";
import ProductsSection from "@/components/ProductsSection";

export default function Home() {
  return (
    <main className="relative w-full">
      <MessageSection />
      <ServiceSection className="z-[15]" />
      <FramerMotionSection className="z-[18]" />
      <ProductsSection className="z-[20]"/>
    </main>
  );
}
