# Select-Antenna
In this project, I created a website for Select Telecom Pvt. Ltd. A company that manufactures and sells wireless antennas.</br>
The work is still in progress. I still have to add some pages to the site (the links for the product categories) and also have to make it responsive for every window size.</br>
If you want to view the application, it's up and running on the URL: https://select-antenna.herokuapp.com/

# Technology Used
I used HTML, CSS, and JavaScript for the front-end.</br>
Node.js and Express for the backend.</br>
I also used handlebars to manage the views and @sendgrid/mail API to send the emails to the visitor and the company.</br>
I used Heroku to deploy my project.</br>
 As this project was just for learning purposes. So, I have used my email to send the emails to the visitor.</br>
As I have not yet purchased a domain so it might be possible that you may receive the mail in your spam folder after submitting the form on the Contact Us page.</br>

# Steps to use the project after cloning
Firstly, you need to initialize npm. For that, you can use the 'npm init' command and run it on the terminal from the root folder.</br>
If nodemon is not installed then go ahead and run 'npm install -g nodemon' this command in terminal to install nodemon globally.  
Then, you need to create a folder inside the root folder named 'config'. Inside the config folder, you need to create your 'dev.env' file which will hold the values 
of the environment variables. Environment variables that you need set are:</br>
PORT (localhost port number)</br>
API_KEY (the SendGrid API key for sending the email)</br>
EMAIL (the email address of the company or from which you want to send the email to the visitor)</br>
You also need to update the URL in the submit.js file inside fetch</br>
Then from the terminal, you can use the 'npm run dev' command to run the project and visit localhost://\<PORT\></br>
