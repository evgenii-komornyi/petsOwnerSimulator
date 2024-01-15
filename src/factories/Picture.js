class Picture {
    #size;
    #offset;

    constructor(size, offset) {
        this.#size = size;
        this.#offset = offset;
    }

    getSize() {
        return this.#size;
    }

    getOffset() {
        return this.#offset;
    }
}

export default Picture;
