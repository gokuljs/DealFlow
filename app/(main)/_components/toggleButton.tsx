'use client';

import clsx from 'clsx';
import { useEffect, useState } from 'react';

interface ToggleButtonProps {
    initialValue?: boolean;
    onChange: (value: boolean) => void;
    themeColor?: string;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
    initialValue,
    onChange,
    themeColor
}): JSX.Element => {
    const [checked, setChecked] = useState(initialValue ?? false);
    useEffect(() => {
        if (initialValue !== undefined) {
            setChecked(initialValue);
        }
    }, [initialValue]);
    return (
        <div
            style={{ backgroundColor: checked ? themeColor : '' }}
            className={clsx(
                'h-6 w-10 rounded-[100px] px-1 py-0 flex items-center transition-all duration-150 ease-in-out',
                checked ? `justify-end` : 'justify-start bg-[#64708414]'
            )}
        >
            <div
                className='h-5 w-5 bg-white rounded-full cursor-pointer'
                onClick={() => {
                    onChange(!checked);
                }}
            />
        </div>
    );
};

export default ToggleButton;
