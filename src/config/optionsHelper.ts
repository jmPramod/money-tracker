const corsOption = {
  origin: 'https://shopmore-nextjs.netlify.app/',

  credentials: true,
};

const ErrorHandelingMiddlewear = (
  err: { status: number; message: string },
  req: any,
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: {
        (arg0: { Success: boolean; status: any; message: any }): any;
        new (): any;
      };
    };
  },
  next: any
) => {
  const statusCode = err.status || 500;
  const errorMessage = err.message || 'Something went wrong!!!!';

  return res.status(500).json({
    Success: false,
    status: statusCode,
    message: errorMessage,
  });
};
export { corsOption, ErrorHandelingMiddlewear };
