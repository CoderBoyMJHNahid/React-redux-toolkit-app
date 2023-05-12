import Chance from "chance";

const chance = Chance();

export const nameGenretor =()=>{
    return chance.name({ middle: true });
};

