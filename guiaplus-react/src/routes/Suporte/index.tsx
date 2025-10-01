import { useEffect } from "react";
import "../../styles/globals.css";

export default function Suporte() {
  useEffect(() => {
    if (!window.watsonAssistantChatOptions) {
      window.watsonAssistantChatOptions = {
        integrationID: "71905a70-6db4-41e4-a62c-08b60ba10cc1",
        region: "au-syd",
        serviceInstanceID: "5d3eff9f-25de-40c2-92fc-a0d53eaf10ff",
        onLoad: async (instance: any) => {
          await instance.render({
            element: document.getElementById("chat-container"),
          });
        },
      };

      const t = document.createElement("script");
      t.src =
        "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" +
        (window.watsonAssistantChatOptions.clientVersion || "latest") +
        "/WatsonAssistantChatEntry.js";
      t.async = true;
      document.head.appendChild(t);
    }
  }, []);

  return (
    <div className="suporte-container p-6">
      {/* Título centralizado e em destaque */}
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-900">
        Suporte
      </h1>

      {/* Texto introdutório */}
      <p className="text-center text-gray-700 mb-6">
        Mande uma mensagem para a nossa assistente virtual clicando no botão
        azul no canto da tela!
      </p>

      {/* Tutorial de uso do chatbot */}
      <div className="bg-blue-100 p-6 rounded-lg shadow-md max-w-2xl mx-auto">
        <h2 className="text-xl font-bold mb-4 text-center">
          Como usar o Chatbot
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>
            No canto inferior direito da tela, clique no botão azul.
          </li>
          <li>
            O chat vai abrir com a mensagem de boas-vindas do Suporte Guia+.
          </li>
          <li>
            Escolha uma das opções mostradas, como:
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>
                <strong>Funções do sistema</strong> → para conhecer os recursos
                disponíveis.
              </li>
              <li>
                <strong>Desejo me cadastrar</strong> → para aprender como criar
                uma conta.
              </li>
              <li>
                <strong>Quero ver os tutoriais</strong> → para acessar passo a
                passo detalhado.
              </li>
            </ul>
          </li>
          <li>
            Se precisar de ajuda em algo muito específico, envie sua pergunta na aba "Contato".
          </li>
        </ol>
      </div>

      <div id="chat-container" />
    </div>
  );
}
