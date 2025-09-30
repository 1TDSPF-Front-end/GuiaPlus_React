export default function Teleconsultas() {
  return (
    <main className="p-6 max-w-3xl mx-auto">
      {/* Faixa azul com título */}
      <section
        className="rounded-md p-5 mb-8"
        style={{ background: "#b9d8ea" }}
      >
        <h1 className="text-2xl font-semibold mb-1">Teleconsultas</h1>
        <p>
          Aqui vamos explicar de forma simples como usar a teleconsulta.
          É só seguir o passo a passo.
        </p>
      </section>

      {/* Tutorial passo a passo */}
      <ol className="space-y-6 text-lg leading-relaxed">
        <li>
          <div className="font-semibold mb-1">1. Marcar consulta</div>
          <p>
            Peça para marcar a teleconsulta no site ou aplicativo do hospital.
            Você vai receber o dia, horário e um link (endereço da internet).
          </p>
        </li>

        <li>
          <div className="font-semibold mb-1">2. Preparar antes</div>
          <p>
            No dia da consulta, deixe o celular ou computador carregado.
            Use um lugar calmo e iluminado. Tenha seus documentos e exames em mãos.
          </p>
        </li>

        <li>
          <div className="font-semibold mb-1">3. Entrar na consulta</div>
          <p>
            Pouco antes do horário, clique no link que recebeu. Vai abrir a câmera e o microfone.
            Se aparecer uma pergunta na tela, clique em “Permitir”.
          </p>
        </li>

        <li>
          <div className="font-semibold mb-1">4. Durante a consulta</div>
          <p>
            Converse com o médico normalmente, como se estivesse no hospital.
            Conte seus sintomas e mostre exames, se precisar.
            O médico pode mandar receita ou atestado digital.
          </p>
        </li>

        <li>
          <div className="font-semibold mb-1">5. Depois</div>
          <p>
            Anote as orientações. Se precisar, peça ajuda para salvar a receita ou atestado.
            Em caso de urgência, procure o hospital presencialmente.
          </p>
        </li>
      </ol>

      <div className="mt-8 text-base opacity-80">
        📌 Dica: Se tiver dificuldade, peça ajuda a um familiar para entrar na chamada.  
        Em caso de problemas técnicos, fale com o suporte do hospital.
      </div>
    </main>
  );
}
