import { ReactNode } from 'react';
import Button from '../Button';

interface TabButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    role?: string;
    onClick: () => void;
    isActive: boolean; // Indicates if this TabButton is currently active
}

function TabButton({ role, children, onClick, isActive, ...rest }: TabButtonProps) {
    return (
        <Button
            className={`px-4 py-2 focus:outline-none ${isActive ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600'}`}
            onClick={onClick}
            variant="text"
            role={role}
            Motion
            animate={{ scale: isActive ? 1.1 : 1 }}
            tabIndex={isActive ? 0 : -1}
            aria-label={rest['aria-label']}>
            {children}
        </Button>
    );
}

export default TabButton;
