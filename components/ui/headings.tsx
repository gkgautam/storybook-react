import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils"; // Utility to join class names

// Define variants for Heading component
const headingVariants = cva(
  "font-bold leading-tight transition-all", // Default styles
  {
    variants: {
      size: {
        h1: "text-5xl md:text-6xl",
        h2: "text-4xl md:text-5xl",
        h3: "text-3xl md:text-4xl",
        h4: "text-2xl md:text-3xl",
        h5: "text-xl md:text-2xl",
        h6: "text-lg md:text-xl",
      },
      color: {
        default: "text-black",
        primary: "text-primary",
        secondary: "text-secondary",
        danger: "text-red-500",
        white: "text-white",
        light: "text-gray-600",
      },
      weight: {
        normal: "font-normal",
        bold: "font-bold",
        semibold: "font-semibold",
      },
    },
    defaultVariants: {
      size: "h1",
      color: "default",
      weight: "bold",
    },
  }
);

interface HeadingProps
  extends Omit<React.HTMLProps<HTMLElement>, 'color' | 'size' | 'weight'>, // Omit the conflicting properties
    VariantProps<typeof headingVariants> {
  asChild?: boolean; // If true, renders as the child component (like `Slot`)
}

// Fix the ref type here to match the heading elements (h1-h6)
const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, size = "h1", color, weight, asChild = false, children, ...props }, ref) => {
    // If size is undefined, fallback to 'h1'
    const Comp = asChild ? "div" : (size as `h${1 | 2 | 3 | 4 | 5 | 6}`); // Dynamically determine the tag
    // Use the 'h1' - 'h6' as the tag name directly (e.g., h1, h2, h3)
    return (
      <Comp
        className={cn(headingVariants({ size, color, weight, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

Heading.displayName = "Heading";

export { Heading, headingVariants };
