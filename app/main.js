import { Cat } from "./models/Cat.js" // REVIEW do not forget .js  
class Taxes{
    constructor(name){
        if(!name){throw new Error("nope gotta have the name")}
        this.name = name
        this.workplaces = []
        this.totalIncome = 0
        this.cats = [] 
    }

    addWorkplace(){
        let newPlaceOfWork = new Workplace(
            prompt("what is the name of the company you worked for?"), 
            prompt("what is the company EIN"), 
            prompt("Wages and tips found on w2")
        )
        this.workplaces.push(newPlaceOfWork)
    }

}

class Workplace{
    constructor(name, ein, wagesAndTips){
        this.name = name
        this.ein = ein
        this.wagesAndTips = wagesAndTips
    }
}

let cat = new Cat("chester", "yellow", true, "1mm")

let cats = [cat, new Cat("Sylvester")]

function startTaxes(){
    let tax = new Taxes(prompt("What is your name"))
    tax.addWorkplace()
    // @ts-ignore
    window.tax = tax
}

// @ts-ignore
window.startTaxes = startTaxes

