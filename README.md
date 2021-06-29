# Cover Letter Snippets
Cover Letter Snippets is an Angular/MongoDB/Node.js Express application that helps you figure out the keywords on a job listing and then compose a cover letter customized for the job by reusing the relevant content from your previous cover letters.

<img src="/readme-images/snippets-part-2.gif" alt="Snippets"
	title="Snippets" />

## Installing and Running Cover Letter Snippets

Note: The following instructions have been tested for MacOS only.

To install and run Cover Letter Snippets:
1. Run `npm i cover-letter-snippets`

   Note: In some cases, you might have to install the package globally: `npm i -g cover-letter-snippets`

2. Run `snippets`

The application opens on the browser at `localhost:3141`.

## Configuring Cover Letter Snippets

The easiest and recommended way to configure the application is to save the cover letter snippets as a JSON file on your local machine. To do so, click **Connect to JSON file** on the Database page. 

However, if you want to use the application across computers, you can store the cover letter snippets in a MongoDB database on MLab.com. This is an advanced use-case. For instructions to save the snippets in a MongoDB database, see [Save snippets in a MongoDB database](https://github.com/mattcheah/cover-letter-snippets#save-the-snippets-in-a-mongodb-database-optional).

## Using Cover Letter Snippets

![Connect to Database Gif](/readme-images/snippets-part-1.gif)

### Adding snippets

Note: To add a snippet to the database, you need to have your existing cover letter(s) handy. 

1. Navigate to the **Add Snippet** page.
2. From your existing cover letter, copy and paste a snippet related to one or more skills or technology. For example, add one snippet for a paragraph that describes your experience with Python. Add another snippet describing a side-project involving Go.
3. For each snippet, add the relevant keywords (comma separated, no spaces) in the **Categories** field. 
   
   Important: The category names are case-sensitive.

4. Click **Submit Snippet**.
5. Add `intro` snippet and add the keyword `intro` to its **Categories** field. Click **Submit Snippet**.
6. Add an `outro` snippet and add the keyword `outro` in its **Categories** field. Click **Submit Snippet**.

### Editing snippets and categories

To edit the snippets and their categories:

1. Navigate to the **Database** page. A table displaying the cover letter snippets is displayed.
2. Click on the snippet you want to edit and make the desired changes.
3. Click on the category you want to edit and make the desired changes.
4. Click off the table to save the changes.

### Building the cover letter

To build the cover letter:

1. Navigate to the **Build Cover Letter** page.
2. Copy the job description for the job you want to apply to. Paste the job description in the text box.
3. Click **Parse Job Description**. A table containing a list of keywords, their frequency in the job description, and the relevant snippets appears.
![View Parsed Job Description and Category Matches](/readme-images/snippets-results.png)
4. Click **Show More**. 
5. For the relevant snippet, click **Show Snippet**.
6. If you decide to include the snippet in the cover letter, click **Add** in the **Add to Letter** column.
7. Repeat step 6 for all relevant snippets.
8. Repeat steps 4-6 to add intro and outro snippets.
![Add snippets to your cover letter.](/readme-images/snippets-outro.png)
9. Reorder the snippets by clicking **Move Up** and **Move Down** as required.
10. Once you are done making all changes, click **Export and Tweak Cover Letter**. The  Exported Cover Letter appears on the **Export Cover Letter** page.
11. Copy and paste the contents of the cover letter into a Word doc or Google doc.

![Connect to Database Gif](/readme-images/snippets-part-3.gif)

### Saving the snippets in a MongoDB database (optional)

Note: This is an advanced use-case.

If you plan to use the application across computers, you can store the cover letter snippets in the preconfigured MongoDB database or your own MongoDB database on MLab.com. 

If you want to play around with the app, there is a preconfigured database URI string in the form field. Please be a good person or I will have to take it out. Also, after you are done trying out the app, delete your entries from the database to ensure that other users don't see your entries.

Alternatively, to store the snippets in your MongoDB database:
1. Go to mlab.com and sign up or log in.
2. Click **Create New** under Deployments.
3. Choose **AWS** and the **Free Sandbox** plan.
4. Pick a region and name your database.
5. Follow the prompts to submit and create your database.
6. Click on your new database.
7. Navigate to the **Users** tab and create a new user.
8. Fill out the username and password.
9. Copy the MongoDB URI for your database. 
10. Navigate to the Cover Letter Snippets application. On the **Database** page, paste the MongoDB URI for your database. Replace the username/password with your credentials in the URI. 
11. Click **Connect to Database**.

# Contributing

If you'd like to help, there's a ton of work that can be done to improve the product. Clone the repo and make a pull request! Off the top of my head, here are some things that can be done:

 - [Show Intro Snippets automatically after parsing job description](https://github.com/mattcheah/cover-letter-snippets/issues/1)
 - [Create a fixed div as a sidebar that shows the parsed job description when you're adding snippets.](https://github.com/mattcheah/cover-letter-snippets/issues/4)
 - [Create an array of aliases for category names](https://github.com/mattcheah/cover-letter-snippets/issues/5) (ie. a job description listing 'RoR' or 'Ruby/Rails' would match your category of 'rails'. Each category and aliases would have to be set up by the user individually.)
 - [Sort addable snippets by which ones have the most relevant categories in the job description.](https://github.com/mattcheah/cover-letter-snippets/issues/6)

# Other

If you're looking to build a quick and easy resume, check out [Best Resume Ever](https://github.com/salomonelli/best-resume-ever) - I created the purple theme, which was based on how I styled my own resume. Check it out!
