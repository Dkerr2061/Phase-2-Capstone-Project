import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate()

  function handleErrorClick() {
    navigate("/")
  }

  return ( 
    <div className="error-text">
      <h1>Oops, something went wrong.</h1>     
      <button className="error-button" onClick={handleErrorClick}>Click here to return to Main Page!</button>
    </div>
  )
}

export default ErrorPage;