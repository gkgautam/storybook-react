// import * as React from "react";
// import { cva, type VariantProps } from "class-variance-authority";
// import { cn } from "@/lib/utils"; // Utility for combining class names
// import { ChevronRightIcon } from "lucide-react"; // Example chevron icon

// // Define the anchor link variants
// const anchorVariants = cva(
//   "inline-flex items-center gap-2 font-medium text-sm transition-colors",
//   {
//     variants: {
//       variant: {
//         default: "text-blue-600 hover:text-blue-800", // Blue text
//         white: "text-white hover:text-gray-200", // White text
//       },
//     },
//     defaultVariants: {
//       variant: "default", // Default variant
//     },
//   }
// );

// interface AnchorLinkProps
//   extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
//     VariantProps<typeof anchorVariants> {
//   asChild?: boolean; // If true, renders as a child component (like `Slot`)
// }

// // Update the ref typing to allow both HTMLAnchorElement and HTMLDivElement
// const AnchorLink = React.forwardRef<HTMLElement, AnchorLinkProps>(
//   ({ className, variant, asChild = false, children, ...props }, ref) => {
//     // Conditionally render an 'a' or 'div' element based on asChild
//     const Comp = asChild ? "div" : "a";

//     // Ref should be compatible with both `HTMLAnchorElement` and `HTMLDivElement`
//     return (
//       <Comp
//         ref={ref as React.Ref<HTMLAnchorElement | HTMLDivElement>} // Ref can be either type
//         className={cn(anchorVariants({ variant, className }))}
//         {...props}
//       >
//         {children}
//         <ChevronRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
//       </Comp>
//     );
//   }
// );

// AnchorLink.displayName = "AnchorLink";

// export { AnchorLink, anchorVariants };
