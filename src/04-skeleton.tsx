import { classed, deriveClassed } from "@tw-classed/react";
import type { ComponentProps, VariantProps } from "@tw-classed/react";

const variants = {
  type: {
    box: "h-10 w-full rounded-sm",
    pill: "h-5 w-full rounded-lg",
    circle: "w-5 h-5 rounded-full",
  },
  variant: {
    primary: "bg-primary-050",
    secondary: "bg-primary-060",
  },
};

const SkeletonBase = classed.div({
  base: "",
  variants,
  defaultVariants: {
    type: "pill",
    variant: "primary",
  },
});

type SkeletonProps = ComponentProps<typeof SkeletonBase> & {
  className?: string;
};

export const Skeleton = deriveClassed<typeof SkeletonBase, SkeletonProps>(
  ({ className = "", ...rest }) => {
    return <SkeletonBase className={className} {...rest} />;
  }
);

export type SkeletonVariants = VariantProps<typeof Skeleton>;
