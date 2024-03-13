import { FC } from "react";

export declare global {
  type size = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

  type Modal = FC<{
    open: boolean;
    handleOpen: () => void;
    size?: size;
    header?: string;
    children: ReactNode;
    footer?: string
  }>;

  type ResponseSuccess = {
    status: string;
    message: string;
  };

  type ErrorObject = {
    attr: string;
    code: string;
    detail: string;
  };

  type ErrorResponse = {
    status: number;
    message: string;
  };

  type Routes = {
    path: string;
    id: number;
    element: JSX.Element;
    children?: {
      path: string;
      id: number;
      element: JSX.Element;
    }[];
  };

  namespace Model {
    type User = {
      name: string;
      email: string;
      password: string;
      id?: number;
      avatar?: string;
      role?: string;
    };

    type Product = {
      id: number;
      title: string;
      price: number;
      category: string;
      description: string;
      thumbnail?: string;
      images?: string[];
      brand?: string;
      stock?: number;
      discountPercentage?: number;
      rating?: number;
    };
  }

  namespace Response {
    type Tokens = {
      access_token: string;
      refresh_token: string;
    };
  }
}
