export default interface MyError {
  message: string;
  error: {
    errors: {
      name: {
        name: string;
        message: string;
        properties: {
          message: string;
          type: string;
          path: string;
        };
        kind: string;
        path: string;
      };
    };
    _message: string;
    name: string;
    message: string;
  };
}
