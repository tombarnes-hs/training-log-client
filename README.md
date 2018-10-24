# Personal Record (PR) Bot
This app is a tool for rowers to maintain a record of their workouts. Once signed in, users can view their workout log, which will show a record of every workout they've recorded, add new workouts to the log, edit notes about their workouts, and delete workouts.

The client's workout log is stored on the [Training Log API](https://github.com/TomG84/training-log-api).

* The deployed Training Log API can be found [here](https://frozen-sierra-35636.herokuapp.com/).
* The deployed Training Log App can be found [here](https://tomg84.github.io/training-log-client/).

## Technologies Used
* HTML5
* css
* Sass
* Bootstrap
* Javascript
* Ajax Requests
* Handlebars

## Unsolved Problems

On the front-end, I wanted to do more manipulation of the data returned from the API.
* I would have liked to have categorize workouts by heart rate ranges and display those categories differently.
* I would have also liked to have displayed the percent of a person's workouts done at each category in a donut graph.
* I would have liked the user to be able to access workouts by date(s) and to display workouts from the last week, month, or year.


On the back-end I'd like to build another resource that the user can CRUD to. This resource would be a table of results from a specific test workout. The test results table would allow any workout a user logged to be shown in relation to the test workout and watt ranges could be given for different types of workouts.

## Planning and Lessons Learned Along the Way

I created a plan for this project based largely on my experience from the previous project. I wanted to maintain a methodical approach in my development, experiment with more styling options, and create v1 of a website I've been thinking about for a long time.

I started the project by writing out the user stories that I would use to guide my development and drawing a [wireframe](https://imgur.com/wPumnNa). I also maintained a development journal to chart my progress and cross off requirements as they were met.

### User Stories

#### Auth Specifications
* User should be able to sign up with email, password, password confirmation
* User should be able to login with email and password
* User should be able to logout when logged in
* User should be able to change password with current and new password
* User should only see Logout and Change Password fields when signed in
* User should receive some form of notification (message or screen change) on success or failure of all Auth steps
* User should see no old data in auth input fields

#### User / Resource Interaction
* User should be able to log a workout with date, elapsed time (min), power output (avg watts), pre workout fatigue, post workout fatigue, and workout notes
* User should be able to delete workouts from the database provided they’re logged in
* User should be able to view all of their own workouts provided they’re logged in
* User should be able to view a single one of their own workouts provided they’re logged in
* User should be able to update a given workout (fill in notes field) provided they’re logged in

I was surprised that it took about two days to get to the point where I a user could create workouts and post them to the API. It took another day-and-a-half to complete CRUD functionality. I took a meticulous approach that helped me make slow and steady progress. But when I encountered failure I lacked the patience to step back into my code. This was mostly due to feel panicked about not making the site I foresaw at the outset. I got past this problem by resetting my expectations, taking my time, and going through the program again. Doing so allowed me to successfully use Handlebars and get my CRUD processes working.
