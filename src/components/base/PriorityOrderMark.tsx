import React, { HTMLAttributes } from 'react';
import { OrderType } from '@/hooks/usePriorityOrder';

export type PriorityOrderMarkProps = 
  & HTMLAttributes<HTMLDivElement>
  & {
    priority?: number;
    orderType?: OrderType;
  };

const PriorityOrderMark: React.FC<PriorityOrderMarkProps> = ({
  priority,
  orderType,
  className,
  ...props
}) => (
  <div className={`flex flex-row ${className}`} {...props}>
    <div className="flex flex-col">
      {orderType === 'Ascending'
        ? <i className="bi bi-caret-up-fill text-xs h-[0.75rem] font-normal"/>
        : <i className="bi bi-caret-up      text-xs h-[0.75rem] font-normal"/>
      }
      {orderType === 'Descending'
        ? <i className="bi bi-caret-down-fill text-xs h-[0.75rem] -translate-y-1 font-normal"/>
        : <i className="bi bi-caret-down      text-xs h-[0.75rem] -translate-y-1 font-normal"/>
      }
    </div>
    <div className="text-sm align-text-top font-normal">{priority}</div>
  </div>
);

export default PriorityOrderMark;
