import styles from './AsteroidCardContent.module.css';
import { useContext } from 'react';
import { AsteroidsContext } from '../../asteroids_context/AsteroidsContext';

type AsteroidCardContentProps = {
  name: string;
  date: string;
  distance: {
    kilometers: number;
    lunar: number;
  };
  size: number;
  selectedDistance: boolean;
  isDangerous: boolean;
};

export const AsteroidCardContent = (props: AsteroidCardContentProps) => {
  const { name, date, distance, size, selectedDistance } = props;
  return (
    <div>
      <div className={styles.contentName}>{name}</div>
      <div className={styles.contentWrapper}>
        <div className={styles.contentDate}>{`Дата: ${date}`}</div>
        <div className={styles.contentDistance}>
          {selectedDistance
            ? `Расстояние: ${distance.kilometers}`
            : `Расстояние: ${distance.lunar}`}
        </div>
        <div className={styles.contentSize}>{`Размер: ${size} m`}</div>
      </div>
    </div>
  );
};
