import { useAccessibility } from '../../contexts/AccessibilityContext';

export default function Tutoriais() {
  const { fontSize, highContrast } = useAccessibility();
  const sectionClassName = highContrast ? 'alto-contraste' : '';

  return (
    <section className={`faq-container ${sectionClassName}`} aria-label="Tutoriais em vídeo" style={{ fontSize: fontSize === 'large' ? '1.2rem' : '1rem' }}>
      <h2 className="faq-titulo">Tutoriais em video</h2>
      <div className="faq-lista">
        <details>
          <summary>Meu primeiro acesso no app do HC </summary>
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
  );
}