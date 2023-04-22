import { ContainerSignup } from "./styles";
import { useNavigate, Link } from 'react-router-dom'
import { useState, useContext, useEffect } from 'react'
import Axios from 'axios';
import { toast } from 'react-toastify';
import { FormEvent } from 'react';
import { Store } from "../../Store";

interface StateProps {
  state: any,
  dispatch: any
}

export function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [tasks, setTasks] = useState('')

  const { state, dispatch: ctxDispatch } = useContext<StateProps>(Store);
  const { userInfo } = state;

  const navigate = useNavigate();

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    try {
      const { data } = await Axios.post('http://localhost:4000/users/signup', {
        name,
        email,
        password,
        tasks,
      });
      ctxDispatch({ type: 'USER_SIGNIN', payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
      console.log(data)
      navigate('/home')
    } catch (err: any) {
      toast.error((err));
    }
  };

  useEffect(() => {
    if (userInfo) {
      navigate('/home');
    }
  }, [navigate, userInfo]);

  return (
    <ContainerSignup>
      <section className="login container">
        <header>
          <h2>Cadastro de novo usuario</h2>
          <form className="form-group" action="submit" onSubmit={submitHandler}>
          <input 
              type="name" 
              placeholder="Digite seu nome"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input 
              type="email" 
              placeholder="Digite seu email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input 
              type="new-password" 
              placeholder="Digite sua senha"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input 
              type="new-password" 
              placeholder="Confirme sua senha"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            <button type="submit">
              Cadastrar
            </button>
          </form>

          <p>Já tem uma conta? <Link to='/'>Clique aqui para entrar!</Link></p>
        </header>
      </section>
    </ContainerSignup>
  )
}