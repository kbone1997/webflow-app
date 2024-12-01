import React from 'react';

const BasicElement: React.FC = () => {
    return (
        <div className="basic-element">
            <h2 className="text-xl font-semibold">This is a basic element</h2>
            <p className="text-gray-600">This is some text inside a basic div element. You can add more content here.</p>
        </div>
    );
};

export default BasicElement;
