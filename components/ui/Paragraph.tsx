import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils"; // Utility for combining class names

// Define the variants for font sizes, text colors, and text alignment
const paragraphVariants = cva(
  "text-sm font-medium leading-relaxed",
  {
    variants: {
      fontSize: {
        small: "text-sm",
        medium: "text-base",
        large: "text-lg",
      },
      color: {
        default: "text-gray-800",
        primary: "text-blue-600",
        secondary: "text-gray-600",
        danger: "text-red-600",
      },
      textAlign: {
        left: "text-left",
        center: "text-center",
        right: "text-right",
      },
    },
    defaultVariants: {
      fontSize: "medium",
      color: "default",
      textAlign: "left",
    },
  }
);

interface ParagraphProps
  extends React.HTMLProps<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {
  asChild?: boolean; // If true, allows rendering child components
  children: React.ReactNode;
}

const Paragraph = React.forwardRef<HTMLElement, ParagraphProps>(
  ({ className, fontSize, color, textAlign, asChild = false, children, ...props }, ref) => {
    // Conditionally render an element based on the asChild prop
    const Comp = asChild ? "div" : "p"; // Default to <p> if not asChild, otherwise render as <div>

    return (
      <Comp
        ref={ref}
        className={cn(paragraphVariants({ fontSize, color, textAlign, className }))}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

Paragraph.displayName = "Paragraph";

export { Paragraph, paragraphVariants };
