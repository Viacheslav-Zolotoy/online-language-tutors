import { Navigate } from "react-router-dom";

type Props = {
  children: React.ReactElement;
};

export default function PrivateRoute({ children }: Props) {
  //   const { token } = useSelector(selectAuth);
  const token = null;
  return token ? children : <Navigate to="/login" />;
}
