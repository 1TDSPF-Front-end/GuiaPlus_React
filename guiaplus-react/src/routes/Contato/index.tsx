import { useState } from 'react';


export default function Contato() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Dados do formulário:', { nome, email, mensagem });
    alert('Mensagem enviada com sucesso!');
  };

  return (
    <>
   
      <main>
        <section className="contato-container" aria-label="Informacoes de Contato">
          <h2 className="contato-titulo">Contato</h2>
          <p className="contato-descricao">Se tiver dúvidas ou precisar de ajuda, entre em contato conosco pelos canais abaixo ou envie sua mensagem pelo formulário.</p>
          <ul className="contato-lista">
            <li><strong>Telefone:</strong> (11) 1234-5678</li>
            <li><strong>Email:</strong> suporte@exemplo.com</li>
            <li><strong>Endereço:</strong> Rua Exemplo, 123, São Paulo, SP</li>
            <li><strong>WhatsApp:</strong> (11) 91234-5678</li>
            <li><strong>Atendimento:</strong> Segunda a Sexta, 9h às 18h</li>
          </ul>

          <form className="contato-form" onSubmit={handleSubmit}>
            <label htmlFor="nome">Nome completo:</label>
            <input
              type="text"
              id="nome"
              name="nome"
              required
              placeholder="Seu nome completo"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="mensagem">Mensagem:</label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows={5}
              required
              placeholder="Escreva sua mensagem aqui"
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
            />

            <button type="submit" className="botao-enviar">Enviar</button>
          </form>
        </section>
      </main>

    </>
  );
}
