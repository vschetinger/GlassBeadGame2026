import { useState, type ReactNode } from 'react';
import { playerText } from '../guide/parse';

export function TermTip(props: { title: string; body: string; className?: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [place, setPlace] = useState<{ left: number; top: number } | null>(null);

  function show(target: Element) {
    const rect = target.getBoundingClientRect();
    setPlace({ left: Math.max(8, Math.min(rect.left, window.innerWidth - 288)), top: rect.bottom + 8 });
    setOpen(true);
  }

  return (
    <span
      className={props.className ? `term ${props.className}` : 'term'}
      onMouseEnter={(event) => show(event.currentTarget)}
      onMouseLeave={() => setOpen(false)}
      onClick={(event) => {
        event.stopPropagation();
        event.preventDefault();
        if (open) setOpen(false);
        else show(event.currentTarget);
      }}
    >
      {props.children}
      {open && place && (
        <span className="term-card" role="tooltip" style={place}>
          <strong>{props.title}</strong>
          {playerText(props.body)}
        </span>
      )}
    </span>
  );
}
