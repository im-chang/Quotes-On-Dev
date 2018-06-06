# Quotes on Dev (Project #5)

By Mike Chang

Objectives:

Allow users to seemlessly look through quotes by clicking the "Show Me Another!" button. Users can also browse through different tags and categories, as well as the option to be able to submit a quote. All quotes submitted by the user have to be reviewed and under a "pending" status before it is published onto the website.

Technologies Used:

Javascript, scss, WordPress, Gulp

Personal Learnings:

Initially the starter pack for this project allowed us to navigate through different quotes upon refreshing the browser, The challenge for me was to be able to provide new quotes everytime the user clicks on the "Show Me Another!" button without having to refresh the browser everytime. Other important learnings regarding the "Show Me Another!" button is that once the button is clicked, the slug will also change and when the user clicks the back button on their browser, they can also view the previous quote as well. This was achieved by using Ajax GET method, var lastpage, history.pushstate and window.onpopstate.


Goals For Future Improvements:

My goals for future improvements would be to use mixins as well as using more scss files to differentiate the styling of each page for easier navigation.
