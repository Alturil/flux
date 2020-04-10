window.addEventListener('DOMContentLoaded', function(){

    let header = document.querySelector("h1");

    async function TestUsedCars()
    {
        const response = await fetch("https://api.trademe.co.nz/v1/Categories/UsedCars.json?with_counts=true");
        const responseBody = await response.json();
        let Subcategories = responseBody.Subcategories;        
        
        let AmountOfUsedCars = GetAmountOfUsedCars(Subcategories);
        let CollectionContainsMake = GetCollectionContainsMake(Subcategories, "Kia");
        let AmountOfCarsOfMake = GetAmountOfCarsOfMake(Subcategories, "Kia");
        let CollectionDoesNotContainMake = GetCollectionDoesNotContainMake(Subcategories, "Hispano Suiza");

        console.log("Tests");
        console.log(AmountOfUsedCars);
        console.log(CollectionContainsMake);
        console.log(AmountOfCarsOfMake);
        console.log(CollectionDoesNotContainMake);

        function GetAmountOfUsedCars(collection)
        {
            return collection.map(s => s.Name).length;
        }

        function GetCollectionContainsMake(collection, make)
        {
            return collection.map(s => s.Name).includes(make);
        }
        
        function GetAmountOfCarsOfMake(collection, make)
        {            
            return collection.filter(s => s.Name === make)[0].Count;
        }

        function GetCollectionDoesNotContainMake(collection, make)
        {
            return !collection.map(s => s.Name).includes(make);
        }

    }

    // Attach this to click or something
    TestUsedCars();

 });