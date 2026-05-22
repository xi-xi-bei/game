import { GameProvider } from '@/lib/game-context';
import Game from '@/components/game/Game';

export default function Home() {
  return (
    <GameProvider>
      <Game />
    </GameProvider>
  );
}
