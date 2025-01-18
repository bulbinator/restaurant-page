const Food = class
{
    #name
    #price

    constructor(name, price)
    {
        this.#name = name
        this.#price = price
    }

    setPrice(price)
    {
        this.#price = price
    }

    getName()
    {
        return this.#name
    }

    getPrice()
    {
        return this.#price
    }

}

const foods = ['biryani', 'haleem', 'qorma', 'nihari', 'pie', 'achar ghost', 'daal chawal', 'chicken 65']
const content = document.querySelector('#content')

const foodObjects = foods.map(function(food)
{
    return new Food(food, "$19.99")
})


export const tabMenu = function()
{
    foodObjects.forEach(function (foodObject)
{
    let foodPlaceholder = document.createElement('div')
    foodPlaceholder.classList.add('food-placeholder')
    content.appendChild(foodPlaceholder)

    let foodName = document.createElement('p')
    foodPlaceholder.appendChild(foodName)
    foodName.textContent = foodObject.getName()

    let foodPrice = document.createElement('p')
    foodPlaceholder.appendChild(foodPrice)
    foodPrice.textContent = foodObject.getPrice()

})
}