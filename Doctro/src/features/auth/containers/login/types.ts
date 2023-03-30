export interface LoginResponse {
  phone: {value: string; error?: string};
  code: {value: string; error?: string};
  error: any;
  loading: boolean;
}

export type ContainerState = LoginResponse;
