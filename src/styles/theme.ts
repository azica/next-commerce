import { createTheme } from "@mui/material"
import { red, gray1, green, white, background, black, gray2, primary } from "styles/colors"
import { PoppinsRegular, PoppinsMedium } from "styles/fonts"
import { rgba } from "styles/mixins"

export const theme = createTheme({
  palette: {
    primary: {
      main: primary,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "0px 1px 20px rgba(0, 0, 0, 0.08)",
          borderRadius: 10,
          marginTop: 8,

          "&.select": {
            "&::-webkit-scrollbar": {
              width: "6px",
              right: "2px",
            },
            "&::-webkit-scrollbar-track": {
              background: "transperent",
              borderRadius: "4px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: rgba(gray2, 0.5),
              borderRadius: "4px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              background: gray2,
            },
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: `${PoppinsMedium} !important`,
          fontWeight: 500,
          color: black,
        },
        h1: {
          fontSize: "34px !important",
          lineHeight: "40px !important",
        },
        h2: {
          fontSize: "24px !important",
          lineHeight: "28px !important",
        },
        h3: {
          fontSize: "20px !important",
          lineHeight: "24px !important",
        },
        h4: {
          fontSize: "18px !important",
          lineHeight: "23px !important",
        },
        h5: {
          fontSize: "15px !important",
          lineHeight: "19px !important",
        },
        h6: {
          fontSize: "15px !important",
          lineHeight: "19px !important",
        },
        body1: {
          fontFamily: `${PoppinsRegular} !important`,
          fontWeight: 400,
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          outline: "none",
          minWidth: 104,
          width: "100%",

          "&.filter": {
            minWidth: 200,

            ".MuiOutlinedInput-root": {
              padding: "10px 16px",
              background: white,
              boxShadow: `0px 0px 6px transparent, inset 0px 0px 0px 1px ${gray2}`,
            },
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          background: "none",
          padding: "15px 16px",
          border: `1px solid ${gray1}`,
          "&:hover": {
            borderColor: `${primary}`,
          },

          input: {
            fontFamily: PoppinsRegular,
            fontSize: 14,
            lineHeight: "140%",
            color: black,
            padding: 0,
            transition: "all 0.25s ease-in-out",

            "&:placeholder": {
              opacity: 1,
              color: green,
            },

            // "&:-internal-autofill-selected, &:-internal-autofill-previewed": {
            //   backgroundColor: "transparent !important",
            //   WebkitBoxShadow: "none",
            //   color: `${black} !important`,
            // },
            // "&:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus": {
            //   backgroundColor: "transparent !important",
            //   WebkitBoxShadow: "none",
            //   transition: "all 0.25s ease-in-out 0s",
            // },
          },

          "&.Mui-focused": {
            background: white,

            // ".MuiOutlinedInput-notchedOutline": {
            //   boxShadow: `0px 0px 6px ${rgba(green, 0.36)}, inset 0px 0px 0px 1px ${green}`,
            // },

            // ".MuiOutlinedInput-input": {
            //   "&:-internal-autofill-selected, &:-internal-autofill-previewed": {
            //     backgroundColor: `${white} !important`,
            //     WebkitBoxShadow: `0 0 0px 1000px ${white} inset`,
            //   },
            // },
          },

          "&.Mui-error": {
            ".MuiOutlinedInput-notchedOutline": {
              boxShadow: `0px 0px 6px transparent, inset 0px 0px 0px 1px ${red}`,
            },

            "&.Mui-focused": {
              ".MuiOutlinedInput-notchedOutline": {
                boxShadow: `0px 0px 6px ${rgba(red, 0.36)}, inset 0px 0px 0px 1px ${red}`,
              },
            },
          },

          "&.Mui-disabled": {
            pointerEvents: "none",
          },

          "&.MuiInputBase-adornedStart": {
            ".adornedStart": {
              stroke: gray2,
              marginRight: 10,
              height: 20,
              width: 20,
            },
          },

          "&.MuiInputBase-readOnly": {
            pointerEvents: "none",
          },
        },
        notchedOutline: {
          border: "none",
          boxShadow: "0px 0px 6px transparent, inset 0px 0px 0px 1px transparent",
          transition: "all 0.25s ease-in-out",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          paddingRight: "20px !important",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          position: "relative",
          fontFamily: PoppinsRegular,
          fontSize: 14,
          lineHeight: "100%",
          transform: "none",
          maxWidth: "calc(100% - 24px)",
          marginBottom: "5px",
          "&.Mui-focused": {
            color: gray1,
          },

          "&.Mui-disabled": {
            opacity: 0.8,

            ".MuiFormLabel-asterisk": {
              opacity: 0,
            },
          },
        },
        shrink: {
          // transform: "translate(14px, 8px) scale(.85)",
          // "+ .MuiOutlinedInput-root .MuiOutlinedInput-input": {
          // 	transform: "translateY(9px)",
          // },
        },
        asterisk: {
          color: red,
          transition: "all 0.25s ease-in-out",
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontFamily: PoppinsRegular,
          fontSize: 12,
          lineHeight: "140%",
          color: black,
          margin: 0,
          opacity: 0,
          pointerEvents: "none",
          transition: "all 0.25s ease-in-out",
          position: "absolute",
          bottom: -20,
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          overflow: "hidden",
          width: "100%",

          "&.Mui-error": {
            color: red,
            opacity: 1,
            pointerEvents: "auto",
          },
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            pointerEvents: "auto !important",
          },
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "contained" },
          style: {
            backgroundColor: `${primary}!important`,
            color: `${white} !important`,

            "&:hover": {
              background: `${gray2} !important`,
            },

            "&.Mui-disabled": {
              background: `${gray2} !important`,
              color: `${white} !important`,
            },
          },
        },
        {
          props: { variant: "outlined" },
          style: {
            background: white,
            color: black,
            border: `1px solid ${gray2} !important`,

            "&:hover": {
              background: primary,
              color: white,
              // border: `1px solid ${green} !important`,
            },

            // "&.Mui-disabled": {
            // 	border: `1px solid ${green} !important`,
            // 	color: gray2,
            // },
          },
        },
      ],
      styleOverrides: {
        root: ({ ownerState }) => ({
          fontFamily: PoppinsMedium,
          fontSize: 16,
          textTransform: "capitalize",
          lineHeight: "130%",
          "$.MuiButton-sizeLarge": {
            padding: "25px 72px",
          },
          "&.MuiButton-sizeMedium": {
            padding: "12px 36px!important",
          },
          ...(ownerState.color === "secondary" && {
            background: white,
            color: primary,
            "&:hover": {
              background: primary,
              color: white,
            },
          }),
        }),
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          background,
          borderRadius: 8,
          border: `1px solid ${green}`,
          gap: 4,
          padding: "2px 6px",
          height: "auto",
        },
        label: {
          fontFamily: PoppinsRegular,
          fontSize: 14,
          lineHeight: "20px",
          color: gray1,
          padding: "1px 0 0",
        },
        icon: {
          margin: "0 !important",
          stroke: gray1,
          width: 15,
          height: 15,
        },
      },
    },

    MuiPaginationItem: {
      styleOverrides: {
        root: {
          margin: 0,
          background: white,
          borderWidth: "1px 0.5px",
          borderStyle: "solid",
          borderColor: green,
          borderRadius: 0,
          color: gray1,
          height: 38,
          width: 38,
          fontFamily: PoppinsMedium,
          fontSize: 14,
          lineHeight: "38px",
          textAlign: "center",
          transition: "all 0.25s ease-in-out",

          "&:hover": {
            background: green,
          },

          "&.Mui-selected": {
            background: green,
            borderColor: green,
            color: white,
            pointerEvents: "none",
          },

          "&.Mui-disabled": {
            opacity: 1,
          },

          "&.next": {
            borderRadius: "0 10px 10px 0",
          },

          "&.previous": {
            borderRadius: "10px 0 0 10px",
          },
        },

        icon: {
          height: 38,
          width: 23,
        },
      },
    },

    MuiSkeleton: {
      styleOverrides: {
        root: {
          background,
        },
      },
    },

    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(45, 49, 60, 0.25)",
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        expandIconWrapper: {
          position: "absolute",
          right: 20,

          svg: {
            stroke: black,
            width: 15,
            height: 15,
            transform: "rotate(90deg)",
          },
        },
      },
    },
  },
})
