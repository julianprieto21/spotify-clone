import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import cn from "clsx";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center group",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-1 w-full grow overflow-hidden rounded-full bg-secondary/45">
      <SliderPrimitive.Range className="absolute h-full bg-primary rounded-full group-hover:bg-green" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="hidden group-hover:block h-3 w-3 rounded-full bg-primary focus-visible:outline-none cursor-pointer" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
