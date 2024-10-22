import Offset from './Offset';
import Picture from './Picture';
import Size from './Size';

class Config {
    #images;

    constructor() {
        const curledCatSize = new Size(543, 583);
        const sausageCatSize = new Size(370, 823);

        const sofa = new Picture(new Size(1769, 1521), new Offset(820, 774));
        const window = new Picture(new Size(682, 2514), new Offset(2298, 136));
        const carpet = new Picture(
            new Size(1261, 1755),
            new Offset(2582, 1456)
        );
        const halloweenDecoration = new Picture(
            new Size(608, 603),
            new Offset(3193, 2922)
        );
        const poop = new Picture(new Size(207, 306), new Offset(2200, 400));
        const pee = new Picture(new Size(244, 196), new Offset(2600, 600));
        const smell = new Picture(new Size(2417, 2526), new Offset(2176, 837));
        const catHouse = new Picture(
            new Size(1031, 1129),
            new Offset(4653, 733)
        );
        const litterBox = new Picture(
            new Size(902, 1239),
            new Offset(4470, 2310)
        );
        const mouse = new Picture(new Size(196, 224), new Offset(900, 500));
        const curledCatOnSofa = new Picture(
            curledCatSize,
            new Offset(1624, 1708)
        );
        const curledCatOnCatHouse = new Picture(
            curledCatSize,
            new Offset(4683, 748)
        );
        const sausageCatOnWindowSill = new Picture(
            sausageCatSize,
            new Offset(2698, 451)
        );
        const waterBowl = new Picture(
            new Size(343, 343),
            new Offset(1444, 2853)
        );

        this.#images = {
            sofa,
            window,
            carpet,
            halloweenDecoration,
            poop,
            pee,
            smell,
            catHouse,
            litterBox,
            mouse,
            curledCatOnSofa,
            curledCatOnCatHouse,
            sausageCatOnWindowSill,
            waterBowl,
        };
    }

    getImages() {
        return this.#images;
    }
}

export default Config;
