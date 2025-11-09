import { useAccessibility } from '../../contexts/AccessibilityContext';

export default function FAQ() {
  const { fontSize, highContrast } = useAccessibility();
  const sectionClassName = highContrast ? 'alto-contraste' : '';

  return (
    <section
      className={`faq-container ${sectionClassName}`}
      aria-label="Perguntas Frequentes"
      style={{ fontSize: fontSize === 'large' ? '1.2rem' : '1rem' }}
    >
      <div className="faq-header">
        <h1>Perguntas Frequentes</h1>
        <p>
          Nesta seção, reunimos as dúvidas mais comuns sobre o Guia+, como
          segurança, acessibilidade e compatibilidade. Aqui você encontra
          respostas rápidas e claras para aproveitar melhor o site.
        </p>
      </div>

      <div className="faq-lista">
        <details>
          <summary>O site Guia+ é seguro para idosos?</summary>
          <p>
            Sim, o site Guia+ é totalmente seguro. Não compartilhamos informações
            pessoais, garantindo a privacidade e segurança de todos os usuários.
          </p>
        </details>

        <details>
          <summary>Quais navegadores o site suporta?</summary>
          <p>
            O site Guia+ é compatível com os principais navegadores, como Google
            Chrome, Mozilla Firefox, Microsoft Edge e Safari.
          </p>
        </details>

        <details>
          <summary>O site tem um modo noturno?</summary>
          <p>
            No momento, o site ainda não possui um modo noturno, e não há previsão
            de lançamento dessa funcionalidade.
          </p>
        </details>

        <details>
          <summary>Quem pode usar os recursos de acessibilidade?</summary>
          <p>
            Todos os usuários podem utilizar os recursos de acessibilidade do Guia+,
            especialmente aqueles com dificuldades visuais, motoras ou cognitivas.
          </p>
        </details>

        <details>
          <summary>Como posso enviar sugestões para melhorar o site?</summary>
          <p>
            Você pode enviar suas sugestões pela página de contato ou diretamente
            pelo e-mail <strong>guiaplus@gmail.com</strong>.
          </p>
        </details>

        <details>
          <summary>O site é compatível com leitores de tela?</summary>
          <p>
            Sim, o Guia+ foi desenvolvido seguindo boas práticas de acessibilidade e
            é compatível com os principais leitores de tela.
          </p>
        </details>

        <details>
          <summary>Existe um tutorial para usar os recursos de acessibilidade?</summary>
          <p>
            Sim, há um tutorial completo disponível na seção “Solução/Proposta” do
            site, com orientações passo a passo.
          </p>
        </details>

        <details>
          <summary>O site é responsivo para dispositivos móveis?</summary>
          <p>
            Sim, o Guia+ é totalmente responsivo e se adapta a telas de celulares e
            tablets.
          </p>
        </details>
      </div>
    </section>
  );
}
