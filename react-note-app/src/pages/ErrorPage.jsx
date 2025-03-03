import { TbError404Off } from 'react-icons/tb';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  
  return (
    <div className="container text-center py-5">
      <TbError404Off className="display-1 text-danger" />
      <h1 className="mt-3">Oops!</h1>
      <p className="lead">Sorry, an unexpected error has occurred.</p>
      <p className="text-muted">
        {error.statusText || error.message}
      </p>
    </div>
  );
};

export default ErrorPage;