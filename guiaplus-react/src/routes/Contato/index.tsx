import { useState } from 'react';
import { useAccessibility } from '../../contexts/AccessibilityContext';

export default function Contato() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const { fontSize, highContrast } = useAccessibility();
  const sectionClassName = highContrast ? 'alto-contraste' : '';

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert('Mensagem enviada com sucesso!');
  };

  return (
    <section className={`contato-container ${sectionClassName}`} aria-label="Informacoes de Contato" style={{ fontSize: fontSize === 'large' ? '1.2rem' : '1rem' }}>
      <h2 className="contato-titulo">Contato</h2>
      <p className="contato-descricao">Se tiver alguma dúvida, sugestão ou feedback, entre em contato conosco pelos canais abaixo:</p>
      <ul className="contato-lista">
        <li><strong>Telefone:</strong> (11) 1234-5678</li>
        <li><strong>Email:</strong> suporte@exemplo.com</li>
        <li><strong>Endereço:</strong> Rua Exemplo, 123, São Paulo, SP</li>
        <li><strong>WhatsApp:</strong> (11) 91234-5678</li>
        <li><strong>Atendimento:</strong> Segunda a Sexta, 9h às 18h</li>
      </ul>

      <form className="contato-form" onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome completo:</label>
        <input type="text" id="nome" name="nome" required placeholder="Seu nome completo" value={nome} onChange={(e) => setNome(e.target.value)} />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required placeholder="seu@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="mensagem">Mensagem:</label>
        <textarea id="mensagem" name="mensagem" rows={5} required placeholder="Escreva sua mensagem aqui" value={mensagem} onChange={(e) => setMensagem(e.target.value)}></textarea>
        <button type="submit" className="botao-enviar">Enviar</button>
      </form>
    </section>
  );
}