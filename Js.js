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
        // Run a GET request against the Trade Me Api (Sandbox)
        const response = await fetch("https://api.tmsandbox.co.nz/v1/Categories/UsedCars.json?with_counts=true");
        const responseBody = await response.json();
        let Subcategories = responseBody.Subcategories;

        let now = new Date();
        
        // Log the entire response body for inspection        
        console.log(`Last run: ${now}`);
        console.log(responseBody);
        
        // Display the results on the page
        last_run.innerHTML = now;
        results[1].innerHTML = GetAmountOfUsedCars(Subcategories);
        results[2].innerHTML = GetCollectionContainsMake(Subcategories, "Kia");
        results[3].innerHTML = GetAmountOfCarsOfMake(Subcategories, "Kia");
        results[4].innerHTML = GetCollectionDoesNotContainMake(Subcategories, "Hispano Suiza");

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