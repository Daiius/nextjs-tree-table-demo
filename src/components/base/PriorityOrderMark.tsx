import React from 'react';
import { OrderType } from '@/hooks/usePriorityOrder';

export type PriorityOrderMarkProps = {
  priority?: number;
  orderType?: OrderType;
}

const PriorityOrderMark: React.FC<PriorityOrderMarkProps> = ({
  priority,
  orderType,
}) => (
  <div>
    <div>{priority}</div>
    <div>{orderType}</div>
      <i className="bi bi-caret-up"/>
  </div>
);

export default PriorityOrderMark;
