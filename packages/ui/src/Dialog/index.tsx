import React from 'react';
import { clsxMerge } from '@exsui/utils';
import { DialogContext } from './DialogContext';
import { DialogContent } from './Content';
import { DialogTitle } from './Title';
import { DialogDescription } from './Description';
import { DialogClose } from './DialogClose';
import { DialogTrigger } from './Button';

export interface DialogOptions {
    open: boolean;
    setOpen: (open: boolean) => void;
    children: React.ReactNode;
    className?: string;
    contentClassName?: string;
}
/**
 * A dialog component that can be used to create a modal or a popover
 * @param boolean-open - A boolean to determine if the dialog is open
 * @returns JSX.Element - A dialog component
 * @example
 
```tsx
 <>
    <button type="button" className="-m-2.5 p-2.5 text-white xl:hidden" onClick={() => setOpenProfile(true)}>
        <span className="sr-only">Open sidebar</span>
        <AiOutlineBars className="h-5 w-5" aria-hidden="true" />  
    </button>
        <Dialog open={openProfile} setOpen={setOpenProfile}>
          <Dialog.Button className='border rounded p-2 bg-violet-500 text-gray-100'>
            My Button
          </Dialog.Button>
          <Dialog.Title className='text-2xl font-bold m-2 p-2'>
            My Title
          </Dialog.Title>
          <Dialog.Description className='text-sm m-2 p-2'>
            My Description 
          </Dialog.Description>
          <Dialog.Close className='border rounded p-2 bg-violet-500 text-gray-100'>
            My Close
          </Dialog.Close>
        </Dialog>
    </>
```
 */
export default function Dialog({
    open,
    setOpen,
    children,
    className,
    contentClassName = 'bg-white p-4 rounded-lg shadow-lg m-4 p-4',
}: DialogOptions): JSX.Element {
    return (
        <div className={className}>
            <DialogContext
                setOpen={setOpen}
                open={open}>
                <DialogContent className={clsxMerge(contentClassName)}>{children}</DialogContent>
            </DialogContext>
        </div>
    );
}
Dialog.Title = DialogTitle;
Dialog.Description = DialogDescription;
Dialog.Close = DialogClose;
Dialog.Button = DialogTrigger;
