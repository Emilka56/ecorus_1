import { type FC } from 'react';
import styles from './styles.module.scss';
import type { FilterState } from '../../index';

interface FiltersProps {
  filters: FilterState;
  setFilters: (filters: FilterState) => void;
}

export const Filters: FC<FiltersProps> = ({ filters, setFilters }) => {
  const handleFilterChange = (category: keyof FilterState, value: string) => {
    const currentValues = filters[category];
    const newValues = currentValues.includes(value)
      ? currentValues.filter((v) => v !== value)
      : [...currentValues, value];

    setFilters({
      ...filters,
      [category]: newValues,
    });
  };

  return (
    <div className={styles.filters}>
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Пол</h3>
        <label className={styles.checkbox}>
          <input
            type="checkbox"
            checked={filters.gender.includes('Мужской')}
            onChange={() => handleFilterChange('gender', 'Мужской')}
          />
          Мужской
        </label>
        <label className={styles.checkbox}>
          <input
            type="checkbox"
            checked={filters.gender.includes('Женский')}
            onChange={() => handleFilterChange('gender', 'Женский')}
          />
          Женский
        </label>
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Тип товара</h3>
        <label className={styles.checkbox}>
          <input
            type="checkbox"
            checked={filters.type.includes('Одежда')}
            onChange={() => handleFilterChange('type', 'Одежда')}
          />
          Одежда
        </label>
        <label className={styles.checkbox}>
          <input
            type="checkbox"
            checked={filters.type.includes('Обувь')}
            onChange={() => handleFilterChange('type', 'Обувь')}
          />
          Обувь
        </label>
        <label className={styles.checkbox}>
          <input
            type="checkbox"
            checked={filters.type.includes('Аксессуары')}
            onChange={() => handleFilterChange('type', 'Аксессуары')}
          />
          Аксессуары
        </label>
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Бренд</h3>
        {['H&M', 'P&B', 'Adidas', 'Nike', 'Reebok'].map((brand) => (
          <label key={brand} className={styles.checkbox}>
            <input
              type="checkbox"
              checked={filters.brand.includes(brand)}
              onChange={() => handleFilterChange('brand', brand)}
            />
            {brand}
          </label>
        ))}
      </section>
    </div>
  );
}; 