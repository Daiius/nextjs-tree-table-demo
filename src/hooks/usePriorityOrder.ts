import React from 'react';

export type UsePriorityOrderArgs<T> = {
  data: T[];
}

export type OrderType = 'Ascending' | 'Descending';

export type OrderDict<T> = {
  [key in keyof T]: { priority: number, orderType: OrderType }
}

export type UsePriorityOrderResult<T> = {
  orders: OrderDict<T>,
  onChange: (key: keyof T, orderType?: OrderType) => void,
}

export const usePriorityOrder = <T>(
  { data, }: UsePriorityOrderArgs<T>
): UsePriorityOrderResult<T> => {
  
  type OrderData = { key: keyof T, orderType: OrderType };
  const [orders, setOrders] = React.useState<OrderData[]>([]);

  const onChange = (key: keyof T, orderType?: OrderType) => {
    if (orderType == null) {
      setOrders(orders.filter(order => order.key !== key));
    } else {
      if (orders.some(order => order.key === key)) {
        setOrders(orders.map(order => 
          order.key === key ? { ...order, orderType } : order
        ));
      } else {
        setOrders([...orders, { key, orderType }]);
      }
    }
  };
  
  const convertedOrders: OrderDict<T> = Object.fromEntries(
    orders.map((order, iorder) => [ order.key, { priority: iorder + 1, orderType: order.orderType }])
  ) as OrderDict<T>;

  return {
    orders: convertedOrders,
    onChange,
  };
}