import Chance from "chance";

let chance=Chance();

export const fakeUser=()=>{
return chance.name({middle:"true"})
}