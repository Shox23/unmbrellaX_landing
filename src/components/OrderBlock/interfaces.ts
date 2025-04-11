export interface OrderBlockProps {
  title: string;
  space?: "base" | "small";
  data: {
    titles: string[];
    items: P2pOrder[] | MyOrder[];
  };
}

export interface P2pOrder {
  finance: string;
  orderCount: number;
  total: string;
  orderAmount: string;
}

export interface MyOrder {
  amount: string;
  bonus: string;
  myFinance: string;
  hasBtn: boolean
}
