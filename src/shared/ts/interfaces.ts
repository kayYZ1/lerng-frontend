export interface ICustomQueryError {
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

export interface ICloseModal {
  setOpen: (value: boolean) => void;
}
