import Link from "next/link";
import Logo from "@/assets/logo.svg";
import { AIGenerationDropdown } from "./ai-generation-dropdown";
import { Separator } from "@/components/ui/separator";
import { BasicInfoSection } from "./sections/basic-infos";
import { SummarySection } from "./sections/summary";
import { MultiplesSection } from "./sections/multiples";
import type { ResizePanelDensity } from "@/hooks/use-resize-panel-density";

type InfosSidebarProps = {
  layoutDensity: ResizePanelDensity;
};

export const InfosSidebar = ({ layoutDensity }: InfosSidebarProps) => {
  return (
    <aside className="w-full h-full p-6 overflow-y-auto">
      <div className="w-full flex items-center justify-between">
        <Link href="/dashboard/resumes">
          <Logo className="w-full max-w-[80px] min-w-[70px]" />
        </Link>

        <AIGenerationDropdown layoutDensity={layoutDensity} />
      </div>

      <Separator className="my-5" />

      <BasicInfoSection />

      <Separator className="my-5" />

      <SummarySection />

      <MultiplesSection />
    </aside>
  );
};
