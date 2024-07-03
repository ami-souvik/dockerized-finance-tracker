'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import DragNdrop from '@/components/dnd';

export default function Page() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const res = await axios.get(`http://localhost:3001/records`);
    console.log(res.data);
    setData(res.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <p>this is a financial monitoring system for tracking all your investments and expenses</p>
      <p>
        this works like a charm when you upload the statements from different platforms. which can be banking platform
        e.g. ICICI, HDFC or google pay, phonepe etc.
      </p>
      <p>Currently we have support for: </p>
      <div className="flex items-center space-x-2">
        <Image src="/assets/icici-bank.png" width={120} height={500} alt="ICICI Bank" />
        <Image src="/assets/phonepe.png" width={100} height={500} alt="Phonepe" />
      </div>
      <DragNdrop />
      <div className="max-w-xs">
        <div className="flex flex-col items-start">
          <h1 className="text-xl">EXPENSE:</h1>
          <h1 className="text-xl">INVESTMENT:</h1>
        </div>
        <div className="w-screen grid grid-cols-5">
          <>
            <p className="border col-span-1 text-wrap break-all p-1 font-bold">DATE</p>
            <p className="border col-span-1 text-wrap break-all p-1 font-bold">PARTICULAR</p>
            <p className="border col-span-1 text-wrap break-all p-1 font-bold">D/W</p>
            <p className="border col-span-1 text-wrap break-all p-1 font-bold">BALANCE</p>
            <p className="border col-span-1 text-wrap break-all p-1 font-bold">DEBUG</p>
          </>
          {data.map((record) => (
            <>
              <p className="border col-span-1 text-wrap break-all p-1">{record.date}</p>
              {/* <div className={`col-span-1 border p-1 ${l.particular.id == 'UNMANAGED' && 'bg-red-500'}`}>
                <p className="text-wrap break-all">{l.particular.id}</p>
                <p className="text-wrap break-all">{l.particular.description}</p>
                <p className="text-wrap break-all text-xs">{l.particular.raw}</p>
              </div>
              <p className="border col-span-1 text-wrap break-all p-1">{l['d/w']}</p>
              <p className="border col-span-1 text-wrap break-all p-1">{l.balance}</p>
              <p className="border col-span-1 text-wrap break-all p-1">{l.debug}</p> */}
            </>
          ))}
        </div>
      </div>
    </>
  );
}
