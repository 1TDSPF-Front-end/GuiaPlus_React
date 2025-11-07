import { useState, useEffect } from "react";
import { useAccessibility } from "../../contexts/AccessibilityContext";
import { useNavigate } from "react-router-dom";

// 🚨 ATENÇÃO: SUBSTITUA ESTE ENDPOINT PELA URL PÚBLICA DA SUA API JAVA
const API_URL = "https://api-java-guiaplus.onrender.com/lembrete";

// --- TIPOS ADAPTADOS DA ESTRUTURA JAVA ---
// Baseado no Lembrete.java (id_lembrete, nome, descricaoLembrete, dataLembrete)
interface LembreteAPI {
  id_lembrete: number;
  nome: string;
  descricaoLembrete: string;
  dataLembrete: string; // Usamos string para o formato de data/hora do input/JSON
}

// Tipo que o Front-End USA (adiciona 'concluido' para o estado visual)
interface LembreteFrontend extends LembreteAPI {
  concluido: boolean;
}
// --- FIM DOS TIPOS ---

export default function Lembretes() {
  const [lembretes, setLembretes] = useState<LembreteFrontend[]>([]);
  const [novoTexto, setNovoTexto] = useState("");
  const [novaData, setNovaData] = useState("");
  const { fontSize, highContrast } = useAccessibility();
  const accessibilityClass = highContrast ? "alto-contraste" : "";
  const navigate = useNavigate();
  
  // ----------------------------------------------------
  // READ (GET) - Busca dados da API
  // ----------------------------------------------------
  const buscarLembretes = async () => {
    try {
      // 1. Requisita os dados com GET [cite: uploaded:tailwindcss_merged.pdf]
      const response = await fetch(API_URL); 
      
      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }
      
      const data: LembreteAPI[] = await response.json();
      
      // Mapeamento: Adiciona a flag 'concluido' (status visual do Front-End)
      const mappedData: LembreteFrontend[] = data.map(item => ({
        ...item,
        concluido: false, // Assume não concluído ao carregar
      }));
      
      setLembretes(mappedData);
      
    } catch (error) {
      console.error("Falha na API (GET):", error);
      // Feedback visual simples ao usuário
      alert("Erro ao carregar lembretes da API. Verifique a URL do servidor Java.");
    }
  };

  // Executa a busca na montagem do componente [cite: uploaded:tailwindcss_merged.pdf]
  useEffect(() => {
    buscarLembretes();
  }, []); 

  // ----------------------------------------------------
  // CREATE (POST) - Adicionar novo lembrete
  // ----------------------------------------------------
  const adicionar = async () => {
    if (!novoTexto.trim() || !novaData) return;

    const lembreteParaEnvio = {
      // Usamos 'novoTexto' para os campos que a API espera
      nome: novoTexto, 
      descricaoLembrete: novoTexto, 
      dataLembrete: novaData,
    };

    try {
      // 2. Envia os dados com POST [cite: uploaded:tailwindcss_merged.pdf]
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lembreteParaEnvio),
      });

      if (!response.ok) {
        throw new Error("Falha ao salvar lembrete.");
      }

      // Limpa os campos e recarrega a lista
      setNovoTexto("");
      setNovaData("");
      await buscarLembretes(); 

    } catch (error) {
      console.error("Falha na API (POST):", error);
      alert("Erro ao adicionar lembrete.");
    }
  };
  
  // ----------------------------------------------------
  // UPDATE (PUT) - Marcar/Desmarcar como concluído
  // ----------------------------------------------------
  const toggle = async (lembrete: LembreteFrontend) => {
    // Alterna o status localmente para a UI
    const statusConcluido = !lembrete.concluido;

    // Objeto para envio (PUT)
    const lembreteParaPut = {
      // A API espera o ID para saber qual registro atualizar
      id_lembrete: lembrete.id_lembrete,
      nome: lembrete.nome,
      descricaoLembrete: lembrete.descricaoLembrete,
      dataLembrete: lembrete.dataLembrete,
      // Se a sua API Java tiver o campo 'concluido', você o enviaria aqui:
      // concluido: statusConcluido 
    };

    try {
      // 3. Envia a atualização com PUT
      const response = await fetch(`${API_URL}/${lembrete.id_lembrete}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lembreteParaPut),
      });

      if (!response.ok) {
        throw new Error("Falha ao atualizar status.");
      }

      // Atualiza o estado local para refletir a mudança
      setLembretes(
        lembretes.map((l) =>
          l.id_lembrete === lembrete.id_lembrete ? { ...lembrete, concluido: statusConcluido } : l
        )
      );

    } catch (error) {
      console.error("Falha na API (PUT):", error);
    }
  };


  // ----------------------------------------------------
  // DELETE - Remover lembrete
  // ----------------------------------------------------
  const remover = async (id: number) => {
    try {
      // 4. Deleta o registro com DELETE
      const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });

      if (!response.ok) {
        throw new Error("Falha ao remover lembrete.");
      }

      // Remove da lista localmente
      setLembretes((prev) => prev.filter((l) => l.id_lembrete !== id));
      
    } catch (error) {
      console.error("Falha na API (DELETE):", error);
      alert("Erro ao remover lembrete.");
    }
  };

  return (
    <div
      className={`main-content ${accessibilityClass} p-4 md:p-6`}
      style={{ fontSize: fontSize === "large" ? "1.2rem" : "1rem" }}
    >
      <div className="max-w-2xl mx-auto w-full">
        <h2 className="text-2xl font-bold mb-4">Agendamento de Lembretes</h2>

        {/* Formulário */}
        <div className="flex flex-col md:flex-row gap-2 mb-6">
          <input
            type="text"
            placeholder="Adicionar lembrete..."
            className="flex-1 border p-2 rounded w-full md:w-auto"
            value={novoTexto}
            onChange={(e) => setNovoTexto(e.target.value)}
          />
          <input
            type="date"
            className="border p-2 rounded w-full md:w-auto"
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

        {/* Tutorial – bloco inserido */}
        <div className="mb-8 p-4 border rounded bg-gray-50">
          <h3 className="text-xl font-semibold mb-3">Como usar os lembretes</h3>
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <strong>Escreva o lembrete:</strong> digite no campo de texto o
              que deseja lembrar (ex.: "Consulta com o cardiologista").
            </li>
            <li>
              <strong>Escolha a data:</strong> selecione no calendário o dia do
              lembrete.
            </li>
            <li>
              <strong>Adicione:</strong> clique no botão{" "}
              <span className="font-bold">+</span> para salvar.
            </li>
            <li>
              <strong>Marcar como concluído:</strong> quando realizar a tarefa,
              clique no botão ✔.
            </li>
            <li>
              <strong>Excluir:</strong> se não precisar mais, clique no botão ❌
              para remover.
            </li>
          </ol>
        </div>

        {/* Lista de Lembretes */}
        <ul className="space-y-3">
          {lembretes.map((l) => (
            <li
              key={l.id_lembrete}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between border p-3 rounded w-full shadow bg-white"
            >
              <div className="mb-2 sm:mb-0">
                <span
                  className={`font-semibold ${
                    l.concluido ? "line-through text-gray-500" : "text-gray-900"
                  }`}
                >
                  {l.descricaoLembrete} {/* Campo Java */}
                </span>
                <div className="text-sm text-gray-600">{l.dataLembrete}</div> {/* Campo Java */}
              </div>
              <div className="flex gap-2 mt-2 sm:mt-0">
                <button
                  className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700 transition"
                  onClick={() => toggle(l)}
                >
                  {l.concluido ? "Desfazer" : "✔"}
                </button>
                <button
                  className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700 transition"
                  onClick={() => remover(l.id_lembrete)}
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