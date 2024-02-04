import React from 'react';
import ToggleButton from './toggleButton';

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
    themeColor
}): JSX.Element => {
    console.log(themeColor, 'sssss');
    return (
        <div className='w-full h-14 flex items-center justify-between'>
            <p>{name}</p>
            <ToggleButton
                initialValue={value}
                onChange={onChange}
                themeColor={themeColor}
            />
        </div>
    );
};

export default ToggleBox;
