import PriorityOrderMark from '@/components/base/PriorityOrderMark';
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
  orderedData: T[];
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

  const orderedData = [...data];
  for (const order of orders.toReversed()) {
    orderedData.sort((a, b) => {
      if (
           typeof a[order.key] === 'string'
        && typeof b[order.key] === 'string'
      ) {
        const a_str = a[order.key] as string;
        const b_str = b[order.key] as string;
        return (
          (order.orderType === 'Ascending' ? 1 : -1)
          * a_str.localeCompare(b_str)
        );
      } else if (
           typeof a[order.key] === 'number'
        && typeof b[order.key] === 'number'
      ) {
        const a_num = a[order.key] as number;
        const b_num = b[order.key] as number;
        return (
          (order.orderType === 'Ascending' ? 1 : -1)
          * (a_num - b_num)
        );
      } else {
        return (
          (order.orderType === 'Ascending' ? 1 : -1)
          * JSON.stringify(a).localeCompare(JSON.stringify(b))
        );
      }
    });
  }
  
  const convertedOrders: OrderDict<T> = Object.fromEntries(
    orders.map((order, iorder) => [ order.key, { priority: iorder + 1, orderType: order.orderType }])
  ) as OrderDict<T>;

  return {
    orders: convertedOrders,
    onChange,
    orderedData,
  };
}