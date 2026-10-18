import { Accordion as TamaguiAccordion } from "@tamagui/accordion";
import { Square } from "@tamagui/shapes";
import React from "react";

import { ChevronDown, ChevronUp } from "./icons";

export function Accordion({ ...props }: React.ComponentPropsWithoutRef<typeof TamaguiAccordion>) {
  return <TamaguiAccordion {...props} />;
}

export function AccordionItem({ ...props }: React.ComponentPropsWithoutRef<typeof TamaguiAccordion.Item>) {
  return <TamaguiAccordion.Item {...props} />;
}

export function AccordionTrigger({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof TamaguiAccordion.Trigger>) {
  return (
    <TamaguiAccordion.Trigger flexDirection="row" justifyContent="space-between" alignItems="center" {...props}>
      {({ open }: { open: boolean }) => (
        <>
          {children}
          <Square transparent>{open ? <ChevronUp size={24} /> : <ChevronDown size={24} />}</Square>
        </>
      )}
    </TamaguiAccordion.Trigger>
  );
}

export function AccordionContent({ ...props }: React.ComponentPropsWithoutRef<typeof TamaguiAccordion.Content>) {
  return <TamaguiAccordion.Content {...props} />;
}

export function AccordionHeader({ ...props }: React.ComponentPropsWithoutRef<typeof TamaguiAccordion.Header>) {
  return <TamaguiAccordion.Header {...props} />;
}

export function AccordionHeightAnimator({
  ...props
}: React.ComponentPropsWithoutRef<typeof TamaguiAccordion.HeightAnimator>) {
  return <TamaguiAccordion.HeightAnimator {...props} />;
}
