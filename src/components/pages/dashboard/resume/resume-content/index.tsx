"use client";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { ResumeTemplate } from "./templates";
import { TransformControls } from "./controls";
import { NavigationHeader } from "./header";
import { useFormContext } from "react-hook-form";

export const ResumeContent = () => {
  const { watch } = useFormContext<ResumeData>();

  const data = watch();

  return (
    <section className="w-full h-full overflow-hidden flex items-center justify-center relative bg-muted dark:background">
      <TransformWrapper
        initialScale={0.45}
        minScale={0.4}
        centerOnInit
        centerZoomedOut
        limitToBounds={false}
      >
        <>
          <NavigationHeader />

          <TransformControls />

          <TransformComponent>
            <ResumeTemplate data={data} />
          </TransformComponent>
        </>
      </TransformWrapper>
    </section>
  );
};
