import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
 
export function NeonGradientCardDemo() {
  return (
    <NeonGradientCard className="max-w-lg items-center justify-center text-center mx-auto my-[200px]">
      <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
        Guido Cerqueira
				<br />
				<span className="text-2xl uppercase">Inscreva-se</span>
      </span>
    </NeonGradientCard>
  );
}