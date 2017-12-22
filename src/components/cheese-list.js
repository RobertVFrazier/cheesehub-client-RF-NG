import React from 'react';
export default function Cheeses(props) {
    return (
        <ul className="cheese-list">
            {props.cheeses.map((cheese, index) =>
                <li key={index}>
                    {cheese}
                </li>
            )}
        </ul>
    );
}

