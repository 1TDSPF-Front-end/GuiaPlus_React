import { useAccessibility } from '../../contexts/AccessibilityContext';

export default function FAQ() {
  const { fontSize, highContrast } = useAccessibility();
  const sectionClassName = highContrast ? 'alto-contraste' : '';

  return (
    <section className={`faq-container ${sectionClassName}`} aria-label="Perguntas Frequentes" style={{ fontSize: fontSize === 'large' ? '1.2rem' : '1rem' }}>
      <h2 className="faq-titulo">Perguntas Frequentes</h2>
      <div className="faq-lista">
        <details><summary>O site Guia+ é seguro para idosos?</summary><p>Sim, o site Guia+ é totalmente seguro. Não compartilhamos informações pessoais, garantindo a privacidade e segurança de todos os usuários.</p></details>
        <details><summary>Quais navegadores o site suporta?</summary><p>O site Guia+ é compatível com os principais navegadores, como Google Chrome, Mozilla Firefox, Microsoft Edge e Safari, garantindo a melhor experiência para todos.</p></details>
        <details><summary>O site tem um modo noturno?</summary><p>No momento, o site ainda não possui um modo noturno, e não se sabe se iremos criar um.</p></details>
        <details><summary>Quem pode usar os recursos de acessibilidade?</summary><p>Todos os usuários podem utilizar os recursos.</p></details>
        <details><summary>Como posso enviar sugestões para melhorar o site?</summary><p>Envie via página de contato ou email suporte@exemplo.com.</p></details>
        <details><summary>O site é compatível com leitores de tela?</summary><p>Sim, o site é compatível com os principais leitores de tela.</p></details>
        <details><summary>Existe um tutorial para usar os recursos de acessibilidade?</summary><p>Sim, está disponível na página "Solução/Proposta".</p></details>
        <details><summary>O site é responsivo para dispositivos móveis?</summary><p>Sim, funciona bem em celulares e tablets.</p></details>
      </div>
    </section>
  );
}