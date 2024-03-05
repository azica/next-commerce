export declare global {
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
    data: { message: string; errors: ErrorObject[] };
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
      role?:string;
    };

    type Category = {
      id: number;
      name: string;
    };
    type Product = {
      id: number;
      title: string;
      price: number;
      category: Model.Category;
      description: string;
      images: string[];
    };
  }

  namespace Response {
    type Tokens = {
      access_token: string;
      refresh_token: string;
    };
  }
}
