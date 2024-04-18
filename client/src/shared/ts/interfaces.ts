export interface ICustomMutationError {
  status: number;
  data: {
    error: string;
    message: string;
    statusCode: number;
  };
}
