'use client';

import React from 'react';
import Button from "@/components/base/Button";
//import Image from "next/image";

//import PriorityOrderMark from "@/components/base/PriorityOrderMark";
import PriorityOrderFilterObjectTable from '@/components/case/PriorityOrderFilterObjectTable';

type Data = {
  id: number,
  '名前': string;
  'コメント': string;
}

const dataToShow: Data[] = [
  { id: 1, '名前': 'Jane Doe', 'コメント': 'Hello!' },
  { id: 2, '名前': 'John Doe', 'コメント': 'Nice to meet you!' },
];

const keys = [...new Set(
  dataToShow.flatMap(d => Object.keys(d))
)].filter(key => key != 'id') as (keyof Data)[];

export default function Home() {

  const [data, setData] = React.useState<Data[]>(dataToShow);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button>
        Hello, Next.js!
      </Button>
      <PriorityOrderFilterObjectTable<Data>
        data={data}
        keys={[...keys, 'テスト' as keyof Data]}
        onDataChange={(id, key, newValue) => setData(
          data.map(d => d.id === id ? { ...d, [key]: newValue} : d)
        )}
        id={(d: Data) => d.id}
      />
    </main>
  );
}
