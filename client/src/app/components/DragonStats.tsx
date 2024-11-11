import { Translate } from "../localization/en";

type DragonsStatsProps = {
  dragon: Dragon;
  health?: number;
};

/**
 * Component for displaying a Dragon and it's stats
 *
 * @param health Optional parameter, only passed in battle
 */
export const DragonsStats = ({ dragon, health }: DragonsStatsProps) => (
  <article>
    <h2>
      {Translate.NAME}: {dragon.name}
    </h2>

    <p>
      {Translate.STRENGTH}: {dragon.strength}
    </p>

    {!!health && (
      <p>
        {Translate.HEALTH}: {health}
      </p>
    )}
  </article>
);
