# Weekly Menu Planner
## Summary
The intended us of this app is to assist with menu planning on a weekly basis. With this project we demonstrate basic use of React and most importantly key features of React: state and props and a little bit of routes.
## Technologies
* React JS
* CSS
* HTML
## Setup
Fork & clone this repo. Run db.json server with the following command `json-server --watch db.json`.
Run `npm install` to set up dependencies.
Run `npm install react-router-dom` to setup routes.
Lastly, run `npm start` to run the React app.
## Video
[Intro Video](https://youtu.be/um_OO2_TU1c)
## Code Snippets
This function updates the appropriate food card with the current day of the week.
```javascript
 const addBadge = () => {
        if (!days.includes(dayOfWeek)) {
            const newDays = [...days, dayOfWeek]
            setDays(newDays)
            const options = {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body:
                    JSON.stringify({ days: newDays })
            }
            fetch(`http://localhost:3000/food/${food.id}`, options)
                .then(res => res.json())
        }
    }
```
## Features
* Tracks and logs user data for current day of the week. Tracked can be seen in weekly calander page.
* CSS hover feature for each food card
## Status
The project is complete but it could use some polishing. Some of the features we would like to add in the future:
* Drag & Drop for each food card into a day of the week
* Cleanup CSS
* Add workouts so that you can also include those in your weekly planner for a well-rounded fitness app.
* Add a form for calorie intake or general use, data from said form can be tracked in a chart.
## Contact
Thank you for taking a look at our project, feel free to reach out with any questions/suggestions.
<br>
[Chris](https://github.com/cdiamond3) | [Michael](https://github.com/stevemr77)