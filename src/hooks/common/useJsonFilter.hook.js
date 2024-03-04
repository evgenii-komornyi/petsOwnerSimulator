import { useState } from 'react';

export const useJsonFilter = objectToKeys => {
    const uniqueJsonProps = new Set();

    if (Array.isArray(objectToKeys) && objectToKeys.length > 0) {
        objectToKeys.forEach(pet => {
            Object.keys(pet).forEach(key => {
                uniqueJsonProps.add(key);
            });
        });
    } else {
        Object.keys(objectToKeys).forEach(key => {
            uniqueJsonProps.add(key);
        });
    }

    const [props, setProps] = useState(
        [...uniqueJsonProps].map(prop => ({
            property: prop,
            isActive: true,
        }))
    );

    const toggleProp = prop => {
        setProps(prevProps =>
            prevProps.map(existingProp =>
                existingProp.property === prop
                    ? { ...existingProp, isActive: !existingProp.isActive }
                    : existingProp
            )
        );
    };

    return { props, toggleProp, uniqueJsonProps };
};
