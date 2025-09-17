export default function Tutoriais() {
  return (
    <>
      <main>
        <section className="faq-container" aria-label="Tutoriais em vídeo">
          <h2 className="faq-titulo">Tutoriais em vídeo</h2>
          <div className="faq-lista">
            <details>
              <summary>Meu primeiro acesso no app do HC</summary>
              <video width="640" height="360" controls>
                <source src="#" type="video/mp4" />
              </video>
            </details>
            <details>
              <summary>Como acessar o portal</summary>
              <video width="640" height="360" controls>
                <source src="#" type="video/mp4" />
              </video>
            </details>
          </div>
        </section>
      </main>
    </>
  );
}
