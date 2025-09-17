export default function FAQ() {
  return (
    <>
      <main>
        <section className="faq-container" aria-label="Perguntas Frequentes">
          <h2 className="faq-titulo">Perguntas Frequentes</h2>
          <div className="faq-lista">
            <details>
              <summary>Como ativar o modo para Idosos?</summary>
              <p>Para ativar o modo para idosos, vá ao botão de acessibilidade e selecione a opção para idosos.</p>
            </details>
            <details>
              <summary>Como ativo o modo para Deficiência Visual?</summary>
              <p>No momento, o modo para deficientes visuais, ainda está em desenvolvimento.</p>
            </details>
            <details>
              <summary>Existe um modo noturno?</summary>
              <p>No momento, o site ainda não possui um modo noturno, e não se sabe se iremos criar um.</p>
            </details>
            <details>
              <summary>Quem pode usar os recursos de acessibilidade?</summary>
              <p>Todos os usuários podem utilizar os recursos.</p>
            </details>
            <details>
              <summary>Como posso enviar sugestões para melhorar o site?</summary>
              <p>Envie via página de contato ou email suporte@exemplo.com.</p>
            </details>
            <details>
              <summary>O site é compatível com leitores de tela?</summary>
              <p>Sim, o site é compatível com os principais leitores de tela.</p>
            </details>
            <details>
              <summary>Existe um tutorial para usar os recursos de acessibilidade?</summary>
              <p>Sim, está disponível na página "Solução/Proposta".</p>
            </details>
            <details>
              <summary>O site é responsivo para dispositivos móveis?</summary>
              <p>Sim, funciona bem em celulares e tablets.</p>
            </details>
          </div>
        </section>
      </main>
    </>
  );
}
