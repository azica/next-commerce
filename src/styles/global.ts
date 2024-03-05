import { red, gray1, white, black, green, gray2 } from "./colors"
export const customTheme = {
  button: {
    styles: {
      base: {
        initial: {
          textTransform: "capitalize",
          fontWeight: "normal",
        },
      },
      variants: {
        filled: {
          purple: {
            background: "bg-purple-500",
            color: "text-white",
            shadow: "shadow-md shadow-purple-500/20",
            hover: "hover:shadow-lg hover:shadow-purple-500/40",
            focus: "focus:opacity-[0.85] focus:shadow-none",
            active: "active:opacity-[0.85] active:shadow-none",
          },
        },
      },
      sizes: {
        sm: {
          fontSize: "text-xs",
          py: "py-2",
          px: "px-4",
          borderRadius: "rounded-md",
        },
        md: {
          fontSize: "text-xs",
          py: "py-3",
          px: "px-6",
          borderRadius: "rounded-md",
        },
        lg: {
          fontSize: "text-xs",
          py: "py-3.5",
          px: "px-7",
          borderRadius: "rounded-md",
        },
      },
    },
  },
  select: {
    defaultProps: {
      color: "primary",
    },
  },
}
