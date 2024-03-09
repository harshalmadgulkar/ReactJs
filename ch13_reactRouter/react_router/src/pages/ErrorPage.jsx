import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function ErrorPage() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
    //   navigate(-1);
      navigate('/');
    }, 3000);
  });
  return (
    <>
      <h1>OOPS!!!Something Went Wrong</h1>
    </>
  );
}
export default ErrorPage;
