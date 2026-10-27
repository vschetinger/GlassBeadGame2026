import { applyGrants, evaluatePoker, type HandId, type HandRule, type PokerCard, type SkillGrant } from './poker';

export function bestHandScore(
  cards: PokerCard[],
  rules: HandRule[],
  maxPlay: number,
  grantsForHand: (hand: HandId) => SkillGrant[] = () => [],
): number {
  const limit = Math.min(Math.max(maxPlay, 1), 5, cards.length);
  if (limit < 1) return 0;
  let best = 0;
  const walk = (start: number, picked: PokerCard[]) => {
    if (picked.length > 0) {
      const score = evaluatePoker(picked, rules);
      const granted = applyGrants(score, grantsForHand(score.category));
      if (granted.pokerSubtotal > best) best = granted.pokerSubtotal;
    }
    if (picked.length === limit) return;
    for (let index = start; index < cards.length; index += 1) walk(index + 1, picked.concat(cards[index]));
  };
  walk(0, []);
  return best;
}

export function waveScores(perfect: number, count: number, low: number, high: number, step: number): number[] {
  if (count <= 0 || perfect <= 0) return [];
  const safeStep = Math.max(1, step);
  return Array.from({ length: count }, (_, index) => {
    const span = count === 1 ? 0 : index / (count - 1);
    const raw = perfect * (low + (high - low) * span);
    const snapped = Math.max(safeStep, Math.round(raw / safeStep) * safeStep);
    if (index === 0) return Math.min(snapped, Math.max(1, Math.floor(perfect)));
    return snapped;
  });
}
