import CurrentPlayer from "./CurrentPlayer";
import Grid from "./Grid";
import PlayerDisplay from "./PlayerDisplay";
import Score from "./Score";

export default function GameBody() {
  return (
    <div>
      <Score />
      <Grid />
      <div>
        <PlayerDisplay />
        <PlayerDisplay />
      </div>
      <CurrentPlayer />
    </div>
  );
}
