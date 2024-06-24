const corsOption = {
  origin: '*',

  credentials: true,
};

const ErrorHandelingMiddlewear = (
  err: { status: number; message: string },
  req: any,
  res: any,
  next: any
) => {
  const status = err.status || 500;
  const errorMessage = err.message || 'Something went wrong!!!!';

  return res.status(500).json({
    Success: false,
    status: status,
    message: errorMessage,
    data: null,
  });
};
export { corsOption, ErrorHandelingMiddlewear };
