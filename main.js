class Desserts {
    constructor(type, calories) {
        this.type = type;
        this.calories = calories;
    }
}
    class iceCream extends Desserts {
        constructor(type, calories, flavor, scoops) {
        super(flavor, scoops)
        this.flavor = flavor;
        this.scoops = scoops;
        includeSpoon() 
            console.log("Here is your spoon")
        }
    }


