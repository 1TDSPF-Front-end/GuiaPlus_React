import { useState, useEffect } from "react";
import { useAccessibility } from '../../contexts/AccessibilityContext';
import { useNavigate } from 'react-router-dom';

type Lembrete = {
  id: string;
  texto: string;
  data: string;
  concluido: boolean;
};

export default function Lembretes() {
  const [lembretes, setLembretes] = useState<Lembrete[]>([]);
  const [novoTexto, setNovoTexto] = useState("");
  const [novaData, setNovaData] = useState("");
  const { fontSize, highContrast } = useAccessibility();
  const accessibilityClass = highContrast ? 'alto-contraste' : '';
  const navigate = useNavigate();

  // Carregar lembretes salvos usando useEffect
  useEffect(() => {
    const raw = localStorage.getItem("lembretes");
    if (raw) setLembretes(JSON.parse(raw));
  }, []);

  // Salvar lembretes usando useEffect
  useEffect(() => {
    localStorage.setItem("lembretes", JSON.stringify(lembretes));
  }, [lembretes]);

  function adicionar() {
    if (!novoTexto.trim() || !novaData) return;
    const novo: Lembrete = {
      id: crypto.randomUUID(),
      texto: novoTexto,
      data: novaData,
      concluido: false,
    };
    setLembretes([...lembretes, novo]);
    setNovoTexto("");
    setNovaData("");
  }

  function toggle(id: string) {
    setLembretes(
      lembretes.map((l) =>
        l.id === id ? { ...l, concluido: !l.concluido } : l
      )
    );
  }

  function remover(id: string) {
    setLembretes(lembretes.filter((l) => l.id !== id));
  }

  return (
    <div 
      className={`main-content ${accessibilityClass} p-4 md:p-6`} 
      style={{ fontSize: fontSize === 'large' ? '1.2rem' : '1rem' }}
    >
      <div className="max-w-2xl mx-auto w-full">
        <h2 className="text-2xl font-bold mb-4">Agendamento de Lembretes</h2>

        {/* Formulário Responsivo: flex-col no mobile, md:flex-row no desktop */}
        <div className="flex flex-col md:flex-row gap-2 mb-6">
          <input
            type="text"
            placeholder="Adicionar lembrete..."
            className="flex-1 border p-2 rounded w-full md:w-auto" // w-full para mobile
            value={novoTexto}
            onChange={(e) => setNovoTexto(e.target.value)}
          />
          <input
            type="date"
            className="border p-2 rounded w-full md:w-auto" // w-full para mobile
            value={novaData}
            onChange={(e) => setNovaData(e.target.value)}
          />
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded w-full md:w-auto hover:bg-blue-700 transition"
            onClick={adicionar}
          >
            +
          </button>
        </div>

        {/* Lista de Lembretes Responsiva */}
        <ul className="space-y-3">
          {lembretes.map((l) => (
            <li
              key={l.id}
              /* Stacks verticalmente no mobile (flex-col) e volta para linha no sm:flex-row */
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between border p-3 rounded w-full shadow bg-white"
            >
              <div className="mb-2 sm:mb-0">
                <span
                  className={`font-semibold ${
                    l.concluido ? "line-through text-gray-500" : "text-gray-900"
                  }`}
                >
                  {l.texto}
                </span>
                <div className="text-sm text-gray-600">{l.data}</div>
              </div>
              <div className="flex gap-2 mt-2 sm:mt-0">
                <button
                  className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700 transition"
                  onClick={() => toggle(l.id)}
                >
                  {l.concluido ? "Desfazer" : "✔"}
                </button>
                <button
                  className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700 transition"
                  onClick={() => remover(l.id)}
                >
                  ❌
                </button>
              </div>
            </li>
          ))}
        </ul>

        {lembretes.length === 0 && (
          <p className="text-gray-500 mt-4 p-3 border-dashed border rounded text-center">
            Nenhum lembrete adicionado ainda.
          </p>
        )}
      </div>
    </div>
  );
}