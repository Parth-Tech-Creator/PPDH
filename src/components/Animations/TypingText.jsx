import { useEffect, useState } from 'react';

/**
 * Cycles through `words`, typing each one out then deleting it before moving
 * to the next — a terminal/HUD-style readout rather than a generic marquee.
 */
const TypingText = ({
  words = [],
  typingSpeed = 65,
  deletingSpeed = 35,
  pauseDuration = 1400,
  className = '',
}) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [phase, setPhase] = useState('typing'); // 'typing' | 'pausing' | 'deleting'

  useEffect(() => {
    if (words.length === 0) return undefined;
    const current = words[wordIndex % words.length];

    let timeout;
    if (phase === 'typing') {
      if (text.length < current.length) {
        timeout = setTimeout(
          () => setText(current.slice(0, text.length + 1)),
          typingSpeed,
        );
      } else {
        timeout = setTimeout(() => setPhase('pausing'), pauseDuration);
      }
    } else if (phase === 'pausing') {
      timeout = setTimeout(() => setPhase('deleting'), pauseDuration / 2);
    } else if (phase === 'deleting') {
      if (text.length > 0) {
        timeout = setTimeout(
          () => setText(current.slice(0, text.length - 1)),
          deletingSpeed,
        );
      } else {
        setWordIndex((i) => (i + 1) % words.length);
        setPhase('typing');
      }
    }

    return () => clearTimeout(timeout);
  }, [text, phase, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={className}>
      {text}
      <span className="animate-blink ml-0.5 inline-block w-[2px] translate-y-[2px] bg-cyan align-middle h-[1em]" />
    </span>
  );
};

export default TypingText;
