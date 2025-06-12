import { useState, useMemo } from 'react';
import styles from './index.module.scss';
import { ProductCard } from './components/ProductCard';
import { Filters } from './components/Filters';
import { SortingTabs } from './components/SortingTabs';
import { BalanceCard } from './components/BalanceCard';

// Import images
import nikeAirMax2021 from '../../assets/images/products/ike-air-max-2021.jpg';
import nikeAirMax90 from '../../assets/images/products/nike-air-max-90.jpg';
import adidasAlphabounce from '../../assets/images/products/adidas-alphabounce.jpg';
import hmHoodie from '../../assets/images/products/hm-hoodie.jpg';
import nikeAirForce1 from '../../assets/images/products/nike-air-force-1.jpg';
import qrCode from '../../assets/images/products/qrcode.jpg';

export type Product = {
  id: number;
  name: string;
  brand: string;
  category: string;
  type: 'Одежда' | 'Обувь' | 'Аксессуары';
  gender: 'Мужской' | 'Женский';
  price: number;
  image: string;
};

export type FilterState = {
  gender: string[];
  type: string[];
  brand: string[];
};

// Sample product data based on the screenshot
const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Nike Air Max 2021',
    brand: 'Nike',
    category: 'Мужская обувь',
    type: 'Обувь',
    gender: 'Мужской',
    price: 1000,
    image: nikeAirMax2021,
  },
  {
    id: 2,
    name: 'Nike Air Max 90 Premium',
    brand: 'Nike',
    category: 'Мужская обувь',
    type: 'Обувь',
    gender: 'Мужской',
    price: 750,
    image: nikeAirMax90,
  },
  {
    id: 3,
    name: 'Adidas Alphabounce RC',
    brand: 'Adidas',
    category: 'Мужская обувь',
    type: 'Обувь',
    gender: 'Мужской',
    price: 1200,
    image: adidasAlphabounce,
  },
  {
    id: 4,
    name: 'H&M Худи',
    brand: 'H&M',
    category: 'Мужская одежда',
    type: 'Одежда',
    gender: 'Мужской',
    price: 1000,
    image: hmHoodie,
  },
  {
    id: 5,
    name: 'Nike Air Force 1 Low',
    brand: 'Nike',
    category: 'Мужская обувь',
    type: 'Обувь',
    gender: 'Мужской',
    price: 2100,
    image: nikeAirForce1,
  },
];

export const EcoMarketPage = () => {
  const [filters, setFilters] = useState<FilterState>({
    gender: [],
    type: [],
    brand: [],
  });
  const [sortBy, setSortBy] = useState<'popularity' | 'price' | 'new'>('popularity');
  const [showQRModal, setShowQRModal] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // Apply filters
    if (filters.gender.length > 0) {
      result = result.filter((product) => filters.gender.includes(product.gender));
    }
    if (filters.type.length > 0) {
      result = result.filter((product) => filters.type.includes(product.type));
    }
    if (filters.brand.length > 0) {
      result = result.filter((product) => filters.brand.includes(product.brand));
    }

    // Apply sorting
    switch (sortBy) {
      case 'price':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'new':
        // For demo purposes, we'll just reverse the order
        result.reverse();
        break;
      case 'popularity':
      default:
        // Keep original order for popularity
        break;
    }

    return result;
  }, [filters, sortBy]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ЭкоМаркет</h1>
      <div className={styles.content}>
        <aside className={styles.sidebar}>
          <Filters filters={filters} setFilters={setFilters} />
        </aside>
        <main className={styles.main}>
          <div className={styles.topSection}>
            <SortingTabs active={sortBy} onChange={setSortBy} />
            <BalanceCard balance={200} onGetPromo={() => setShowQRModal(true)} />
          </div>
          <div className={styles.products}>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>
      </div>
      {showQRModal && (
        <div className={styles.modalOverlay} onClick={() => setShowQRModal(false)}>
          <div className={styles.modal} onClick={e => e.stopPropagation()}>
            <h2 className={styles.modalTitle}>QR-код на покупку создан</h2>
            <p className={styles.modalText}>При оплате покажите его сотруднику на кассе</p>
            <div className={styles.qrCode}>
              <img src={qrCode} alt="QR Code" />
            </div>
            <div className={styles.promoCode}>E25GHROP</div>
            <p className={styles.modalHint}>
              Если не получается отсканировать QR-код, введите код вручную или продиктуйте сотруднику на кассе
            </p>
            <button 
              className={styles.closeButton}
              onClick={() => setShowQRModal(false)}
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

