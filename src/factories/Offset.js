class Offset {
    #top;
    #left;

    constructor(top, left) {
        this.#top = top;
        this.#left = left;
    }

    getTop() {
        return this.#top;
    }

    getLeft() {
        return this.#left;
    }
}

export default Offset;
