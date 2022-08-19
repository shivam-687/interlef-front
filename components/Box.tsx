import React from "react";
import { CSSProperties, useEffect } from "react";

export interface BoxParams {
    children?: React.ReactNode;
    width?: number;
    height?: number;
    color?: string;
    translateX?: number;
    translateY?: number;
}

export const Box = (params: BoxParams) => {

    const [style, setStyle] = React.useState<CSSProperties>({});
    useEffect(() => {
        console.log('Box rendered', params);
        setStyle({
            width: params.width || 100,
            height: params.height || 100,
            backgroundColor: params.color || 'red',
            transition: 'all 0.5s ease-in-out',
            margin: '10px',
            position: 'relative',
            transform: 'translate(' + (params.translateX || 0) + 'px, ' + (params.translateY || 0) + 'px, 0)',
        });
    }, [params])

    return (
        <>
            <div className="box" style={style}></div>
        </>
    );
}