# Flux - Test exercise

I've decided to try a few things instead of settling for one solution, but I'm starting with Javascript in a webpage. This is certainly one of the easiest ways to remove any tooling or environmental dependencies and achieve the task of querying an API using just code.

Some pros and cons of this approach:

| Pros | Cons |
|-|-|
| It requires virtually no environment setup; any user with a web browser can get to the results. | Javascript is definitely not my strong suit!
| I haven't used any libraries, just vainilla JS | The async code wraps the output logic, which is great for scripting but not super scalable
| The code itself is simple and easy to follow | I had to craft an HTML page to display the results, as we're not using standard tooling/frameworks
| The entire code is contained in a single file | Because of the same reason, the reporting is not standarised at all
| It runs entirely on the client side, no build/compiling time ||


## Scripting and testing

While the instructions are fairly clear in terms of what the expected output of the automation is, I'd like to make two remarks:

- It is usually better to evaluate conditions atomically. *"Check that the brand ‘Kia’ exists and return the current number of Kia cars listed"* should really be two separate checks, so I went ahead and splitted it, I hope you don't mind.
- Some of the checks don't have a boolean output (e.g: *"Return how many named brands of used cars are available in the TradeMe UsedCars category."*), therefore there are no possible conditions to be evaluated as assertions. For that reason, I just outputted the checks in all cases instead of writing proper tests for some.

## How to run the tests

Simply clone the repo and open `TestExercise.html` in a web browser.

The webpage does an initial request to the Trade Me API and then renders the results of every check. There's a "Re-Run" button too, and some console logging including the full response body to make sure that I'm not cheating :).

## Other approaches

The JS approach is not perfect, but I wouldn't invest more time polishing the script or the presentation (e.g: exception handling, refactoring redundant code, optimising responsiveness), I would instead park it and go after proper existing tooling.

Still, there are at least two more ways of doing this that are low effort:

- Python: Also pure code, it can do quick tests with little aid from libraries. It requires python to be installed in the environment, though.
- Postman: This uses a tool, but there's a Docker image available too, so it could be integrated elegantly in a CI pipeline.

Speaking of pipelines, GitLab offers excellent support for that. Check out the [GitLab project](https://gitlab.com/Alturil/fluxgitlab) I created for demonstration.