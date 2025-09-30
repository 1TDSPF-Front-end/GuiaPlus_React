import { useState, useEffect } from "react";

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

  // carregar lembretes salvos
  useEffect(() => {
    const raw = localStorage.getItem("lembretes");
    if (raw) setLembretes(JSON.parse(raw));
  }, []);

  // salvar lembretes
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
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Lembretes</h2>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Adicionar lembrete..."
          className="flex-1 border p-2 rounded"
          value={novoTexto}
          onChange={(e) => setNovoTexto(e.target.value)}
        />
        <input
          type="date"
          className="border p-2 rounded"
          value={novaData}
          onChange={(e) => setNovaData(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={adicionar}
        >
          +
        </button>
      </div>

      <ul className="space-y-3">
        {lembretes.map((l) => (
          <li
            key={l.id}
            className="flex items-center justify-between border p-3 rounded"
          >
            <div>
              <span
                className={`${
                  l.concluido ? "line-through text-gray-500" : ""
                }`}
              >
                {l.texto}
              </span>
              <div className="text-sm opacity-70">{l.data}</div>
            </div>
            <div className="flex gap-2">
              <button
                className="bg-green-600 text-white px-3 py-1 rounded"
                onClick={() => toggle(l.id)}
              >
                ✔
              </button>
              <button
                className="bg-red-600 text-white px-3 py-1 rounded"
                onClick={() => remover(l.id)}
              >
                ❌
              </button>
            </div>
          </li>
        ))}
      </ul>

      {lembretes.length === 0 && (
        <p className="text-gray-500 mt-4">
          Nenhum lembrete adicionado ainda.
        </p>
      )}
    </div>
  );
}
