export const apiHandler = async (fn, ...args) => {
    try {
        return await fn(...args);
    } catch (error) {
        console.error(error.message);

        return null;
    }
};
