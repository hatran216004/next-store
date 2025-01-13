'use client';
import { Input } from '../ui/input';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

export default function NavSearch() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const searchValue = searchParams.get('search') || '';
  const [search, setSearch] = useState(searchValue);

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set('search', value);
    } else {
      params.delete('search');
    }
    replace(`/products?${params.toString()}`);
  }, 300);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
    handleSearch(e.target.value);
  }

  return (
    <Input
      value={search}
      onChange={handleChange}
      type="search"
      placeholder="search product..."
      className="max-w-xs dark:bg-muted "
    />
  );
}
