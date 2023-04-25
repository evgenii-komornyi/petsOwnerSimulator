export const addItem = (items, newItem) => {
    if (items.length !== 0) {
        const existingItem = items.find(item => item.id === newItem.id);

        if (existingItem) {
            return items.map(item =>
                item.id === newItem.id
                    ? { ...item, count: item.count + newItem.count }
                    : item
            );
        }
    }

    return [...items, newItem];
};
