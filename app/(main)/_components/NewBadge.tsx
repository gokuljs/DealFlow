import React from 'react';

export interface NewBadeProps {
    textColor: string;
    backgroundColor: string;
}

const NewBadge: React.FC<NewBadeProps> = ({
    textColor,
    backgroundColor
}): JSX.Element => {
    return (
        <div
            style={{
                color: textColor,
                backgroundColor: backgroundColor
            }}
            className={`w-[42px] h-6 flex items-center justify-center rounded-full text-xs  py-0 px-2 text-[${textColor}]`}
        >
            New
        </div>
    );
};

export default NewBadge;
