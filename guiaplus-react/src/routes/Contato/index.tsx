import React, { useState } from 'react';
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
    <section
      className={`mx-auto max-w-4xl px-4 pb-16 ${sectionClassName}`}
      aria-label="Informações de Contato"
      style={{ fontSize: fontSize === 'large' ? '1.2rem' : '1rem' }}
    >
      {/* Cabeçalho */}
      <header className="text-center mt-10 mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Contato</h2>
        <p className="mt-3 text-lg text-slate-600">
          Precisa falar com a gente? Estamos por aqui para tirar dúvidas, ouvir sugestões
          e receber seu feedback. Escolha o canal preferido abaixo ou envie uma mensagem
          pelo formulário.
        </p>
      </header>

      {/* Bloco com os canais */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white/70 backdrop-blur p-6 shadow-sm">
          <h3 className="text-xl font-semibold mb-4 text-slate-900">Canais oficiais</h3>

          <dl className="space-y-3 text-slate-700">
            <div className="flex gap-3">
              <dt className="min-w-[96px] font-medium">Telefone</dt>
              <dd>
                <a href="tel:+551112345678" className="hover:underline">(11) 1234-5678</a>
              </dd>
            </div>

            <div className="flex gap-3">
              <dt className="min-w-[96px] font-medium">Email</dt>
              <dd>
                <a href="mailto:guiaplus@gmail.com" className="hover:underline">guiaplus@gmail.com</a>
              </dd>
            </div>

            <div className="flex gap-3">
              <dt className="min-w-[96px] font-medium">Endereço</dt>
              <dd>Rua Exemplo, 123, São Paulo - SP</dd>
            </div>

            <div className="flex gap-3">
              <dt className="min-w-[96px] font-medium">WhatsApp</dt>
              <dd>
                <a href="https://wa.me/5511912345678" target="_blank" rel="noreferrer" className="hover:underline">
                  (11) 91234-5678
                </a>
              </dd>
            </div>

            <div className="flex gap-3">
              <dt className="min-w-[96px] font-medium">Atendimento</dt>
              <dd>Segunda a Sexta, 9h às 18h</dd>
            </div>
          </dl>
        </div>

        {/* Formulário */}
        <div className="rounded-2xl border border-slate-200 bg-white/70 backdrop-blur p-6 shadow-sm">
          <h3 className="text-xl font-semibold mb-4 text-slate-900">Envie uma mensagem</h3>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid gap-2">
              <label htmlFor="nome" className="font-medium text-slate-800">Nome completo</label>
              <input
                id="nome"
                name="nome"
                type="text"
                required
                placeholder="Seu nome completo"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="rounded-lg border border-slate-400 bg-slate-50 px-3 py-2 text-slate-800 
                           placeholder:text-slate-500 focus:border-indigo-500 focus:ring-2 
                           focus:ring-indigo-300 outline-none shadow-sm"
              />
            </div>

            <div className="grid gap-2">
              <label htmlFor="email" className="font-medium text-slate-800">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-lg border border-slate-400 bg-slate-50 px-3 py-2 text-slate-800 
                           placeholder:text-slate-500 focus:border-indigo-500 focus:ring-2 
                           focus:ring-indigo-300 outline-none shadow-sm"
              />
            </div>

            <div className="grid gap-2">
              <label htmlFor="mensagem" className="font-medium text-slate-800">Mensagem</label>
              <textarea
                id="mensagem"
                name="mensagem"
                rows={5}
                required
                placeholder="Escreva sua mensagem..."
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                className="rounded-lg border border-slate-400 bg-slate-50 px-3 py-2 text-slate-800 
                           placeholder:text-slate-500 focus:border-indigo-500 focus:ring-2 
                           focus:ring-indigo-300 outline-none shadow-sm"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-xl bg-indigo-600 
                         px-5 py-2.5 font-semibold text-white shadow-md hover:bg-indigo-700 
                         focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
            >
              Enviar mensagem
            </button>

            <p className="text-xs text-slate-500 mt-2">
              Respondemos em até 1 dia útil. Seus dados são usados apenas para o atendimento.
            </p>
          </form>
        </div>
      </div>

      {/* FAQ curto opcional */}
      <div className="mt-10 rounded-2xl border border-slate-200 bg-white/60 p-6">
        <h3 className="text-lg font-semibold mb-3 text-slate-900">Antes de enviar, já viu se…</h3>
        <ul className="list-disc pl-5 space-y-2 text-slate-700">
          <li>Seu assunto está na página <strong>Perguntas Frequentes</strong>?</li>
          <li>Você tem um número de protocolo? Inclua na mensagem.</li>
          <li>Se for reagendamento, informe a <strong>data</strong>.</li>
        </ul>
      </div>
    </section>
  );
}
