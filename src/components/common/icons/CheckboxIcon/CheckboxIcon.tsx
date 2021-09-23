import React from 'react';

interface CheckboxIconProps {
    color?: string;
    className?: string;
    width?: string;
    height?: string;
}

const CheckboxIcon: React.FC<CheckboxIconProps> = ({color, className, width, height}) => {
    return (
        <svg className={className} width={width ? width : "15.2"} height={height ? height : "11.2"} viewBox="0 0 16 12"
             fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M14.6343 0.634339C14.9467 0.32192 15.4533 0.32192 15.7657 0.634339C16.0781 0.946758 16.0781 1.45329 15.7657 1.76571L6.16567 11.3657C5.85325 11.6781 5.34672 11.6781 5.0343 11.3657L1.0343 7.36571C0.721883 7.05329 0.721883 6.54676 1.0343 6.23434C1.34672 5.92192 1.85325 5.92192 2.16567 6.23434L5.59999 9.66865L14.6343 0.634339Z"
                fill={color ? color : 'black'}/>
        </svg>
    );
};

export default CheckboxIcon;