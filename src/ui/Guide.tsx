import { useEffect, useState } from 'react';
import type { GuideView } from '../guide/walk';
import { playerText, type Note } from '../guide/parse';

export function GuideOverlay(props: {
  view: GuideView;
  paused: boolean;
  onChoose: (to: string) => void;
  onOpen: (id: string) => void;
  onDismiss: (id: string) => void;
}) {
  const stage = props.view.stage;
  const coaching = stage?.show === 'coach';
  const rect = useHook(coaching ? stage.at : undefined);

  if (props.paused) return null;
  if (!stage && props.view.banners.length === 0) return null;

  const cardStyle = coaching && rect ? placeCard(rect) : undefined;
  return (
    <div className="guide-layer">
      {stage && stage.show !== 'coach' && <div className="guide-scrim" />}
      {coaching && rect && (
        <div
          className="guide-ring"
          style={{ left: rect.left - 6, top: rect.top - 6, width: rect.width + 12, height: rect.height + 12 }}
        />
      )}
      {stage && (
        <article
          className={cardStyle ? 'guide-card anchored' : 'guide-card'}
          style={cardStyle}
          role="dialog"
          aria-modal={stage.show !== 'coach'}
          aria-label={stage.title}
        >
          <p className="guide-kicker">{kicker(stage)}</p>
          <h2>{stage.title}</h2>
          {paragraphs(stage.body).map((paragraph) => (
            <p key={paragraph}>{playerText(paragraph)}</p>
          ))}
          {props.view.choices.length > 0 && (
            <div className="actions">
              {props.view.choices.map((choice, index) => (
                <button
                  key={choice.to}
                  className={index === 0 ? 'primary' : undefined}
                  autoFocus={stage.show !== 'coach' && index === 0}
                  onClick={() => props.onChoose(choice.to)}
                >
                  {choice.label}
                </button>
              ))}
            </div>
          )}
        </article>
      )}
      {props.view.banners.length > 0 && (
        <div className="guide-banners">
          {props.view.banners.map((banner) => (
            <div className="guide-banner" key={banner.id}>
              <button className="guide-banner-open" onClick={() => props.onOpen(banner.id)}>{banner.title}</button>
              <button className="guide-banner-dismiss" aria-label={`Dismiss ${banner.title}`} onClick={() => props.onDismiss(banner.id)}>×</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function kicker(stage: Note): string {
  if (stage.show === 'coach') return 'Look here';
  if (stage.show === 'page') return 'Lesson';
  return 'Guide';
}

function paragraphs(body: string): string[] {
  return body.split(/\n\n+/).map((part) => part.trim()).filter(Boolean);
}

function useHook(name: string | undefined): DOMRect | null {
  const [rect, setRect] = useState<DOMRect | null>(null);
  useEffect(() => {
    if (!name) {
      setRect(null);
      return;
    }
    let scrolled = false;
    const measure = (allowScroll: boolean) => {
      const element = document.querySelector(`[data-hook="${CSS.escape(name)}"]`);
      if (element && allowScroll && !scrolled) {
        scrolled = true;
        element.scrollIntoView({ block: 'nearest', inline: 'nearest' });
      }
      const next = element?.getBoundingClientRect() ?? null;
      setRect((current) => {
        if (!next) return current == null ? current : null;
        if (
          current
          && Math.abs(current.x - next.x) < 0.5
          && Math.abs(current.y - next.y) < 0.5
          && Math.abs(current.width - next.width) < 0.5
          && Math.abs(current.height - next.height) < 0.5
        ) return current;
        return next;
      });
    };
    measure(true);
    const frame = window.requestAnimationFrame(() => measure(false));
    const observer = new MutationObserver(() => measure(true));
    observer.observe(document.body, { childList: true, subtree: true });
    const onMove = () => measure(false);
    window.addEventListener('resize', onMove);
    window.addEventListener('scroll', onMove, true);
    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener('resize', onMove);
      window.removeEventListener('scroll', onMove, true);
    };
  }, [name]);
  return rect;
}

function placeCard(rect: DOMRect): { left: number; top: number; width: number } {
  const width = Math.min(360, window.innerWidth - 24);
  if (rect.width > window.innerWidth * 0.55 || rect.height > window.innerHeight * 0.45) {
    return { left: Math.max(12, (window.innerWidth - width) / 2), top: Math.max(12, window.innerHeight - 210), width };
  }
  const left = Math.min(Math.max(12, rect.left), window.innerWidth - width - 12);
  const below = rect.bottom + 14;
  const top = below + 190 < window.innerHeight ? below : Math.max(12, rect.top - 200);
  return { left, top, width };
}
