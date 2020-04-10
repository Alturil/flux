# Flux - Test exercise

I've decided to try a few things instead of settling for one solution, but I'm starting with Javascript in a simple webpage as the quickest way of getting the task done.

A word on the instructions first, then onto the exercise.

### Scripting and testing

While the instructions are fairly clear in terms of what the expected output of the automation is, I'd like to address two remarks:

- It is usually better to evaluate conditions atomically. *"Check that the brand ‘Kia’ exists and return the current number of Kia cars listed"* should really be two separate checks, so I went ahead and splitted it, I hope you don't mind.
- Some of the checks don't have a boolean output (e.g: *"Return how many named brands of used cars are available in the TradeMe UsedCars category."*), therefore there are no possible conditions to be evaluated as assertions. For that reason, I just outputted the checks in all cases instead of writing proper tests for some.

## Javascript in a simple webpage

The first and easiest way of sending an HTTP request to an API in order to get a response and evaluate its content without using a testing tool/framework is certainly using vainilla Javascript and rendering the results in an HTML page.

The main advantages of this approach are:

- It requires virtually no environment setup; any user with a web browser can get to the results.
- I haven't used any libraries, just vainilla JS
- The code itself is simple and easy to follow
- The entire code is contained in a single file
- It runs entirely on the client side, no build/compiling time
- Putting together the entire solution was real quick

There are cons as well, of course:

- Javascript is definitely not my strong suit!
- The async code wraps the output logic, which is great for scripting but not super scalable
- I had to craft an HTML page to display the results, as we're not using standard tooling/frameworks
- Because of the same reason, the reporting is not standarised at all

### How to run the tests

Simply clone the repo and open `TestExercise.html` in a web browser.

The webpage does an initial request to the Trade Me API and then renders the results of every check. There's a "Re-Run" button too, and some console logging including the full response body to make sure that I'm not cheating :).

### Final thoughts

It's not perfect but it's a very clear demonstration of simple code for a simple task. I wouldn't invest more time polishing the script or the presentation (aka: re-inventing the wheel), I would instead park it and go after proper existing tooling.