import React from 'react';
import './Panel.css';

export default function HoriziontalPanel({ children }) {
    // const childrenModifies = React.Children.map(children, (child, i) => {
    //     return <li key={i} className="flex flex-col items-center space-x-1 ">
    //         {child}
    //     </li>;
    // });
    return (
        <div className="max-w-2xl mx-auto p-8 overflow-x-scroll ">
            <ul className="flex space-x-6">
                {children}
            </ul>
        </div>)
}
