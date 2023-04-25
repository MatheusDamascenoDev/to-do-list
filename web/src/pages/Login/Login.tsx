import { FormEvent, useState, useContext, useEffect } from "react";
import { ContainerLogin } from "./style";
import { useNavigate, Link } from 'react-router-dom'
import { toast } from "react-toastify";
import Axios from "axios";
import { Store } from "../../Store";

export function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;


  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const {data} = await Axios.post('/users/signin', {
        email,
        password,
      });
      ctxDispatch({ type: 'USER_SIGNIN', payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
      navigate(`/home/${userInfo._id}`);
    } catch (error: any) {
      console.log(error.response.data)
      toast.error((error.response.data));
    }
  };

  useEffect(() => {
    if (userInfo) {
      navigate(`/home/${userInfo._id}`);
    }
  }, [navigate, userInfo]);

  return (
    <ContainerLogin>
      <section className="login container">
        <header>
          <h2>Login</h2>
          <form className="form-group" action="submit" onSubmit={submitHandler}>
            <input 
              type="email" 
              placeholder="Digite seu email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input 
              type="password" 
              placeholder="Digite sua senha"
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit">
              Entrar
            </button>
          </form>

          <p>Ainda não tem uma conta? <Link to='/signup'>Clique aqui para criar a sua!</Link></p>
        </header>
      </section>
    </ContainerLogin>
  )
}