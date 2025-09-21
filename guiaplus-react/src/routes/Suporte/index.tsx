import { useEffect } from "react";
import "../../styles/globals.css";

export default function Suporte() {
  useEffect(() => {
    if (!window.watsonAssistantChatOptions) {
      window.watsonAssistantChatOptions = {
        integrationID: "71905a70-6db4-41e4-a62c-08b60ba10cc1",
        region: "au-syd",
        serviceInstanceID: "5d3eff9f-25de-40c2-92fc-a0d53eaf10ff",
        onLoad: async (instance: any) => { // Aqui está a correção
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
    <div className="suporte-container">
      <h1 className="suporte-titulo">Suporte</h1>
      <p className="suporte-texto">
        Mande uma mensagem para a nossa assistente virtual clicando no botao azul no canto da tela!
      </p>
      <div id="chat-container" />
    </div>
  );
}