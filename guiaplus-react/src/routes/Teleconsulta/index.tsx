import { useAccessibility } from '../../contexts/AccessibilityContext';

export default function Teleconsultas() {
  const { fontSize, highContrast } = useAccessibility();
  const sectionClassName = highContrast ? 'alto-contraste' : '';

  return (
    <main
      className={`${sectionClassName}`}
      style={{ fontSize: fontSize === 'large' ? '1.2rem' : '1rem' }}
      aria-label="Teleconsultas"
    >
      {/* Hero azul, mesmo visual das outras páginas */}
      <section className="integrantes-hero">
        <h1>Teleconsultas</h1>
        <p>
          Veja abaixo um passo a passo simples para usar a teleconsulta. Siga as
          etapas para se preparar, entrar na chamada e finalizar com segurança.
        </p>
      </section>

      {/* Conteúdo */}
      <div className="max-w-3xl mx-auto px-4 mt-6 mb-14">
        <ol className="space-y-4">
          {/* Passo 1 */}
          <li className="bg-white/70 border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
            <div className="font-semibold text-slate-900 mb-1">1. Marcar consulta</div>
            <p className="text-slate-700">
              Peça para marcar a teleconsulta no site ou aplicativo do hospital.
              Você vai receber o dia, horário e um link para acesso.
            </p>
          </li>

          {/* Passo 2 */}
          <li className="bg-white/70 border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
            <div className="font-semibold text-slate-900 mb-1">2. Preparar antes</div>
            <p className="text-slate-700">
              No dia da consulta, deixe o celular ou computador carregado. Use um
              lugar calmo e iluminado. Tenha documentos e exames em mãos.
            </p>
          </li>

          {/* Passo 3 */}
          <li className="bg-white/70 border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
            <div className="font-semibold text-slate-900 mb-1">3. Entrar na consulta</div>
            <p className="text-slate-700">
              Pouco antes do horário, clique no link recebido. A câmera e o microfone
              podem pedir permissão. Se aparecer a pergunta na tela, clique em{" "}
              <strong>Permitir</strong>.
            </p>
          </li>

          {/* Passo 4 */}
          <li className="bg-white/70 border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
            <div className="font-semibold text-slate-900 mb-1">4. Durante a consulta</div>
            <p className="text-slate-700">
              Converse com o médico normalmente. Explique seus sintomas e, se
              necessário, mostre exames na câmera. O médico pode enviar receita
              ou atestado digital.
            </p>
          </li>

          {/* Passo 5 */}
          <li className="bg-white/70 border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
            <div className="font-semibold text-slate-900 mb-1">5. Depois</div>
            <p className="text-slate-700">
              Anote as orientações. Se precisar, peça ajuda para salvar a receita
              ou o atestado. Em caso de urgência, procure atendimento presencial.
            </p>
          </li>
        </ol>

        {/* Box de ajuda opcional no mesmo estilo */}
        <div className="mt-8 rounded-xl border border-slate-200 bg-white/60 p-5 text-slate-700">
          <p>
            Dúvidas com o acesso? Fale com o suporte do hospital pelo telefone ou
            e-mail informados na página de <strong>Contato</strong>.
          </p>
        </div>
      </div>
    </main>
  );
}
