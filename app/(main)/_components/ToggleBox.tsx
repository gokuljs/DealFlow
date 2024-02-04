import React from 'react';
import ToggleButton from './toggleButton';
import clsx from 'clsx';

interface ToggleBoxProps {
    name: string;
    value: boolean;
    onChange: (value: boolean) => void;
    themeColor: string;
    roundedType: 'TOP' | 'BOTTOM';
}

const ToggleBox: React.FC<ToggleBoxProps> = ({
    name,
    value,
    onChange,
    themeColor,
    roundedType
}): JSX.Element => {
    return (
        <div
            className={clsx(
                'w-full h-14 flex items-center justify-between py-3 px-4 bg-[#6470840A]',
                roundedType === 'TOP' ? 'rounded-t-[20px]' : 'rounded-b-[20px]'
            )}
        >
            <p className='font-medium text-[13px] text-[#120713]'>{name}</p>
            <ToggleButton
                initialValue={value}
                onChange={onChange}
                themeColor={themeColor}
            />
        </div>
    );
};

export default ToggleBox;
