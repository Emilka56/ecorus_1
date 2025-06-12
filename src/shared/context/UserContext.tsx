import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import ava from "../../assets/images/ava/ava.jpg";

export type User = {
  name: string;
  email: string;
  phone: string;
  avatar: string;
  city: string;
  coins: number;

  history: Array<{
    address: string;
    material: string;
    date: string;
    coins: number;
  }>;

  promos: Array<{
    value: string;
    color: string;
    date: string;
    link: string;
    showQR: boolean;
  }>;

} | null;

interface UserContextType {
  user: User;
  setUser: (user: User) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>({
    name: 'Алексей',
    email: "alex228@gmail.com",
    phone: "88008008888",
    avatar: ava,
    city: 'Казань',
    coins: 1000,
    history: [
      {
        address: "Казань, Кремлёвская, 88",
        material: "Пластик: 1 кг  •  Стекло: 2 кг  •  Бумага: 25 кг",
        date: "25.09.2021",
        coins: 1000,
      },
      {
        address: "Казань, проспект Победы, 141",
        material: "Пластик: 1 кг  •  Стекло: 3 кг  •  Бумага: 5 кг",
        date: "25.09.2021",
        coins: 900,
      },
    ],
    promos: [
      {
        value: "1000 ₽",
        color: "#51c54b",
        date: "25.09.2021",
        link: "adidas.com/clothes/WddfJfs7dt6fsHFluj5ndfsZFu...",
        showQR: true,
      },
      {
        value: "100 ₽",
        color: "#b7b7b7",
        date: "25.09.2021",
        link: "adidas.com/clothes/WddfJfs7dt6fsHFluj5ndfsZFu...",
        showQR: false,
      },
      {
        value: "400 ₽",
        color: "#b7b7b7",
        date: "25.09.2021",
        link: "adidas.com/clothes/WddfJfs7dt6fsHFluj5ndfsZFu...",
        showQR: false,
      },
    ],
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  return context;
};
