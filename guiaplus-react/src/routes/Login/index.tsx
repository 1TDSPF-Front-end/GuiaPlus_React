import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoCompleta from '../../assets/img/logo_completa.png'

export default function Login() {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [erroNome, setErroNome] = useState('');
  const [erroCpf, setErroCpf] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErroNome('');
    setErroCpf('');
    let valid = true;

    if (nome.trim().length < 2) {
      setErroNome('Erro: Preencha o campo corretamente');
      valid = false;
    }
    if (cpf.trim().length < 11) {
      setErroCpf('Erro: O campo CPF deve ser preenchido corretamente!');
      valid = false;
    }
    if (valid) {
      navigate('/pagina-inicial');
    }
  };

  return (
    <div className="body-login">
      <header className="header-login">
        <h1>Seja bem-vindo(a) ao</h1>
        <img src={logoCompleta} alt="Logo Guia+" />
      </header>

      <main>
        <section id="login">
          <div className="formulario-login">
            <form onSubmit={handleSubmit}>
              <fieldset className="form-fieldset">
                <div className="form-grupo">
                  <label htmlFor="idNome" className="form-label">Nome completo</label>
                  <input
                    type="text"
                    name="nome"
                    id="idNome"
                    placeholder="Digite seu nome completo"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="form-input"
                  />
                  {erroNome && <span className="error-msg">{erroNome}</span>}
                </div>
                <div className="form-grupo">
                  <label htmlFor="idCpf" className="form-label">CPF</label>
                  <input
                    type="text"
                    name="cpf"
                    id="idCpf"
                    placeholder="123.456.789-01"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    className="form-input"
                  />
                  {erroCpf && <span className="error-msg">{erroCpf}</span>}
                </div>
                <button type="submit" className="btn-entrar">Entrar</button>
              </fieldset>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}