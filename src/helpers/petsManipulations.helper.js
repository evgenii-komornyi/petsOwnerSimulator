export const modifyPetStat = (id, pets, statToModify, newStatValue) => {
    const petToModify = findObjectById(id, pets);
    petToModify.stats[statToModify] = newStatValue;

    return pets;
};

export const modifyItemStat = (id, items, statToModify, newStatValue) => {
    const itemToModify = findObjectById(id, items);
    itemToModify[statToModify] = newStatValue;

    return items;
};

const findObjectById = (id, array) => array.find(item => item.id === id);
