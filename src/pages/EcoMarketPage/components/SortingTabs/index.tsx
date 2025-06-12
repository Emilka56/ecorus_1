import { type FC } from 'react';
import styles from './styles.module.scss';

type SortOption = 'popularity' | 'price' | 'new';

interface SortingTabsProps {
  active: SortOption;
  onChange: (option: SortOption) => void;
}

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: 'popularity', label: 'По популярности' },
  { value: 'price', label: 'По цене' },
  { value: 'new', label: 'По новизне' },
];

export const SortingTabs: FC<SortingTabsProps> = ({ active, onChange }) => {
  return (
    <div className={styles.tabs}>
      {SORT_OPTIONS.map(({ value, label }) => (
        <button
          key={value}
          className={`${styles.tab} ${active === value ? styles.active : ''}`}
          onClick={() => onChange(value)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}; 