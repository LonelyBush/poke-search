import { StatsContainerProps } from '../../../interfaces/props_interfaces';
import { darkIconCollection, iconCollection } from './icon_collection-const';
import styles from './pokemon_stats_style.module.css';
import useTheme from '../../../hooks/useTheme-hook';

function PokemonStats({ stats }: StatsContainerProps) {
  const { theme } = useTheme();
  const getOnlyMainStats = stats.filter((elem) => {
    return (
      elem.stat.name !== 'special-defense' &&
      elem.stat.name !== 'special-attack'
    );
  });
  return (
    <div className={styles['stats-container']}>
      {getOnlyMainStats.map((elem) => {
        return (
          <div key={elem.stat.name} className={styles['stat-block']}>
            <img
              className={styles['stat-icon']}
              src={
                theme === 'dark'
                  ? darkIconCollection[elem.stat.name]
                  : iconCollection[elem.stat.name]
              }
              alt="stat-icon"
            />
            <div>{`${elem.base_stat}`}</div>
          </div>
        );
      })}
    </div>
  );
}

export default PokemonStats;
