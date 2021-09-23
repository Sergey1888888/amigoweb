import React from 'react';

interface ChevronBottomIconProps {
    color?: string;
    className?: string;
    width?: string;
    height?: string;
}

const ChevronBottomIcon: React.FC<ChevronBottomIconProps> = ({color, className, width, height}) => {
    return (
        <svg className={className} width={width ? width : "16"} height={height ? height : "9"} viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M8 6.58579L14.2929 0.292893C14.6834 -0.0976311 15.3166 -0.0976311 15.7071 0.292893C16.0976 0.683418 16.0976 1.31658 15.7071 1.70711L8.70711 8.70711C8.31658 9.09763 7.68342 9.09763 7.29289 8.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683418 0.292893 0.292893C0.683418 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L8 6.58579Z"
                fill={color ? color : "#0880AE"}/>
        </svg>

    );
};

export default ChevronBottomIcon;