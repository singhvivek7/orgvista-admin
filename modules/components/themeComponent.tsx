'use client';

import * as React from 'react';
import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { themeSlice, useDispatch, useSelector } from '@/lib/redux';

type Checked = DropdownMenuCheckboxItemProps['checked'];

export function DropdownMenuCheckboxes() {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline'>
          {theme.slice(0, 1).toUpperCase() + theme.slice(1).toLowerCase()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuLabel>Select Theme</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={theme === 'dark'}
          onCheckedChange={() => {
            dispatch(themeSlice.actions.changeTheme('dark'));
          }}
        >
          Dark
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={theme === 'light'}
          onCheckedChange={() => {
            dispatch(themeSlice.actions.changeTheme('light'));
          }}
        >
          Light
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
