# cover-letter-snippets
Angular/MongoDB/Node.js Express local application for quickly composing a cover letter that discusses each keyword and technology on a job listing.

## Setting up a database
Snippets uses a MongoDB database on Mlab.com to store your cover letter snippets data. 

- Go to mlab.com and sign up or log in.
- Click "Create New" under deployments.
- Choose AWS and the Free Sandbox plan.
- Pick a region and name your database.
- Follow the prompts to submit and create your database.
- Click on your new database.
- Navigate to the users tab and click the button to create a new user.
- Fill out the username and password.
- copy/paste the MongoDB URI for your database and enter your username/password in the appropriate place in the URI. 

## Using Snippets

Install Cover-Letter-Snippets with `npm i cover-letter-snippets`
(Note: Some users may have to install globally `npm i -g cover-letter-snippets`)

Enter the command `snippets` to start a localhost server that will serve the application on `localhost:3141`. A browser will open automatically.

First, paste the URI (including UN and Password) from your Mlab database and click "Connect to Database". 

If you want to play around with the app, there is an existing database URI string in the form field. Please be a good person or I will have to take it out. 

From here you can Add snippets to your database or Build your cover letter. 

## Adding Snippets

Copy/Paste a small snippet of a previous cover letter covering one or more related skills, and fill out the categories field with the keywords that you want to match to the job description. (Comma Separated, no spaces.)

![Add a new snippet to your database](/readme-images/snippets-snippet.png)

It's also important for you to add an 'intro' and 'outro' category, so that you can add intro and outro snippets easily. 

![Add an intro snippet to your database](/readme-images/snippets-intro.png)

## Build Cover Letter

First, copy/paste a job description into the textarea field and click "Parse Job Description". The application will check if any of the words in the job description match any of your snippet categories.

A table of results will be returned where you can see how many times a category has been mentioned. Click on the "Show Snippets" link to see the snippets that match those categories. ie. If you're applying for a Java Developer position, you should probably see a lot of matches for the category "java", and those are the important snippets that you want to add to your cover letter first.  

![View Parsed Job Description and Category Matches](/readme-images/snippets-results.png)

Once you see snippets from a category, you can add those snippets to your cover letter, and also see the intro and outro snippets you added earlier. 

![Add snippets to your cover letter.](/readme-images/snippets-outro.png)
 
Once you're done arranging your snippets in the cover letter table, you can press the export button.  

## Export Cover Letter

You're basically done! You can edit the text in the textarea, and you can copy/paste your cover letter into your word doc or PDF that you're submitting with an application. 

![Exported Cover Letter.](/readme-images/snippets-export.png) 


# Contributing

If you'd like to help, there's a ton of work that can be done to improve the product. Clone the repo and make a pull request! Off the top of my head, here are some things that can be done:

 - Show Intro Snippets automatically after parsing job description
 - Add button to show more snippets even if they haven't been mentioned in job desc.
 - Create a fixed div as a sidebar that shows the parsed job description when you're adding snippets. 
 - Create an array of aliases for category names (ie. a job description listing 'RoR' or 'Ruby/Rails' would match your category of 'rails'. Each category and aliases would have to be set up by the user individually.)
 - Create an option to use a JSON file locally instead of mlab db. 
 - Sort addable snippets by which ones have the most relevant categories in the job description. 

# Other

If you're looking to build a quick and easy resume, check out [Best Resume Ever](https://github.com/salomonelli/best-resume-ever) - I created the purple theme, which was based on how I styled my own resume. Check it out!
