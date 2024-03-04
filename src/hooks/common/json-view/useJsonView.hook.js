export const useJsonView = props => {
    const replacer = (key, value) => {
        if (
            props.some(prop => prop.isActive === false && prop.property === key)
        ) {
            return undefined;
        }

        return value;
    };

    return { replacer };
};
