window.addEventListener('DOMContentLoaded', function(){

    // Get webpage elements
    let results = 
    {
        1 : document.querySelector("#results article:nth-of-type(1) .result_text"),
        2 : document.querySelector("#results article:nth-of-type(2) .result_text"),
        3 : document.querySelector("#results article:nth-of-type(3) .result_text"),
        4 : document.querySelector("#results article:nth-of-type(4) .result_text"),
    };
    let last_run = document.getElementById("last_run");

    async function TestUsedCars()
    {
        // Run a GET request agains the Trade Me Api
        const response = await fetch("https://api.trademe.co.nz/v1/Categories/UsedCars.json?with_counts=true");
        const responseBody = await response.json();
        let Subcategories = responseBody.Subcategories;        
        
        // Get specific data from the response body
        let AmountOfUsedCars = GetAmountOfUsedCars(Subcategories);
        let CollectionContainsMake = GetCollectionContainsMake(Subcategories, "Kia");
        let AmountOfCarsOfMake = GetAmountOfCarsOfMake(Subcategories, "Kia");
        let CollectionDoesNotContainMake = GetCollectionDoesNotContainMake(Subcategories, "Hispano Suiza");

        // Log the entire response body for inspection
        let now = new Date();
        console.log(`Last run: ${now}`);
        console.log(responseBody);
        
        // Display the results on the page
        last_run.innerHTML = now;
        results[1].innerHTML = AmountOfUsedCars;
        results[2].innerHTML = CollectionContainsMake;
        results[3].innerHTML = AmountOfCarsOfMake;
        results[4].innerHTML = CollectionDoesNotContainMake;

        // Functions to get specific data

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

    // Bind the test function to the "Rerun" button
    let rerunButton = document.getElementById("rerun");
    rerunButton.addEventListener("click", function(){
        TestUsedCars();
    });

    // Execute the script when the page loads
    TestUsedCars();

 });