import type { ReactNode, SyntheticEvent } from "react"
declare global {
  type ButtonPreloader = {
    loading: boolean;
    outside?: boolean;
  };

  type Button = {
    type?: "button" | "submit" | "reset";
    size?: "large" | "medium" | "small";
    variant?: "outlined" | "contained";
    disabled?: boolean;
    children: ReactNode;
    bordered?: boolean;
    link?: string;
    loader?: boolean;
    onClick?: (e: SyntheticEvent) => void;
    isFullWidth?: boolean;
    className?: string;
    icon?: ReactNode;
    preloader?: ButtonPreloader;
    color?: "inherit" | "error" | "primary" | "secondary" | "success" | "info" | "warning" | undefined;
    secondary?: boolean;
  };

  type Validations = {
    required?: string | boolean;
    minLength?: {
      value: number;
      message: string;
    };
    maxLength?: {
      value: number;
      message: string;
    };
    pattern?: {
      value: RegExp;
      message: string;
    };
  };

  type Option = {
    id?: number | string;
    name: string;
    value: number | string;
  }
  type InputData = {
    validations: Validations;
    id: number;
    value: string | number;
    field: string;
    label?: string;
    type?: string;
    helperText?: string;
    disabled?: boolean;
    placeholder?: string;
    readOnly?: boolean;
    invalid?: boolean;
    required?: boolean;
    options?: Option[];
    mask?: string;
    maskProps?: {
      maskChar?: string | null;
      maskPlaceholder?: string | null;
    };
    dateProps?: {
      disablePast?: boolean;
      disableFuture?: boolean;
      limitFutureMonths?: number;
      limitPastMonths?: number;
    };
    suggest?: FetchType;
    personType?: PersonType;
    changeable?: boolean;
    autoComplete?: string;
    textarea?: {
      multiline: boolean;
      rows: number;
    };
    multiple?: boolean;
    inputSize?: string;
    hasLabelMark?: boolean;
    iconLeft?: boolean;
    pattern?: string;
    className?: string;
    name?: string;
    isErrorTooltip?: boolean;
    isNewInput?: boolean;
    defaultOption?: Option;
  };

  type InputOnChange = {
    (value: { field: string; value: string | number; id: number | string; }): void;
  };

  type Input = {
    endAdornment?: ReactNode;
    startAdornment?: ReactNode;
    onChange: InputOnChange;
  } & InputData;
}
