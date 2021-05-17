// NOTE Models handle the definition of data not the logic of the data
export class Cat {
    constructor(name, color = "unkown", claws = true, hairLength = "unknown"){
        if(!name){throw new Error("you cannont create a cat without assiging a name")}
        this.name = name
        this.color = color
        this.claws = claws
        this.hairLength = hairLength
    }
}