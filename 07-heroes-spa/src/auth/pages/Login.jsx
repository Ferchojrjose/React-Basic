import { useNavigate } from "react-router";



export const Login = () => {

    const navigate = useNavigate(); // Hook de react-router-dom

    const handleLogin = () => {
        navigate('/', {
            replace: true, // Reemplaza la ruta actual
        });
    }

    return (
        <div className="container mt-5">
            <h1>Login Page</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={handleLogin}>
                Login
            </button>
        </div>
    )
}