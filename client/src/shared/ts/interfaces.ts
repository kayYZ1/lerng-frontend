export interface ICustomMutationError {
  status: number;
  data: {
    error: string;
    message: string;
    statusCode: number;
  };
}

export interface IAlert {
  message: string | undefined;
  type: string;
}
