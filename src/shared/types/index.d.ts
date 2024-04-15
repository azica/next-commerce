export declare global {
  type size = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

  type Object = {
    [string]: any;
  }

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
      id?: number;
      name: string;
      email: string;
      avatar?: string;
      role?: string;
      accessTokenExpires: number
      access_token: string;
      refresh_token: string;

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
      expires: string;
    };

    type GetProducts = {
      products: Model.Product[];
      total: number;
      skip: number;
      limit: number;
    }
  }
}
