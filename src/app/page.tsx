import { BentoDemo } from "@/components/bento-grid";
import { NeonGradientCardDemo } from "@/components/card-neon";
import { LensDemo } from "@/components/lens";
import { Meteor } from "@/components/meteors";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 px-48 py-8">
      <NeonGradientCardDemo />
      <Meteor />
      <BentoDemo />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <LensDemo />
        <LensDemo />
        <LensDemo />
      </div>
    </div>
  );
}
