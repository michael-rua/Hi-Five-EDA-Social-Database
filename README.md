
# Hi Fives Social Database 
### MVP User request

* As a user I want to be able to connect with all my friends from Bootcamp and have them connect with me and each other. As I am a coder I want to be able to have them all in a fancy database so I can contact or connect with each of my friends when I want to. This database will be part of a live app/website that we can all access at any time.

* I need to have a greeting on the opening page to welcome my friends to my website, This page will offer a link to the list of current friends who have already joined.
* The linked page along with listing my friends names will have a join / add profile button so I can add the remaining friends to the database. Each listed name will have hyperlinks linking to their individual profiles showing what social networks they belong to.
* The form that the friend is linked to will include all the social networks that I would want to know and share. Also their basic details. Once the form has posted I want to be able to link my friend to their brand new profile to view what they entered.
* I now have a working shared database that is a website that each of us can view whenever we want to connect!

### STRETCH User request

* I want to be able to find my friends in specific groups of social platforms, making the relevant information easier to access.
* Oops, someone put the wrong number in, or has a new Playstation and they want to update their own profile. Can you give me a update profile link from their page. 
* I want each link of their socials to be a hyperlink so I can go straight to their page to add them as a friend. Can you please make this happen?

## 1: create migrations and seed data

- [x] Table for users:
    (id, name, email, phone number, profile pic?,)

- [x] Table for socials:
    (user_id, FB, Insta, Linkedin, PS4/xbox, github, twitter?.)

<!-- We have created the home route and thats all so far -->
 ## 2: Edit existing routes 
- [x] Identify new routes required.  
- [x] Create new routes.

    **Required Routes:**

- [x] Home/welcoming route '/'.
- [x] List of users route '/profiles'.
- [x] Users/profiles:id route to view each users social profiles '/profiles:id'.
- [x] Form page '/addProfile'.

### *STRETCH ROUTE GOALS*
*This would use many-many relationships*
- [ ] -A group route to list each grouping
- [ ] -A group:id route that would link to the 
- [ ] -A edit profile form route



<!-- Need to edit the existing hbs views such as the form which is not fit for purpose currently -->
## 3: Create Handle bars views for each route and assign a page per person.
We need eith pair off or individually create a hbs to capture our imagination and contain the necessary data. we could share a CSS file or have an individual one?

## 4: merge all the new hbs views and CSS files.
Time to merge all the fancy hbs view files to the mother code! lets hope for easy work here, then as a team we will check how it all works and enjoy the beauty of it.

## 5: Add ourselves to the seed data
Npx knex migrate:rollback and then npx knex seed:run. We deserve to see ourselves and all our data in the amazing app we have built.


## 6: Launch app on Heroku in MVP state
Good time to push this wonderful art up to Heroku, a working MVP is what the bootcamp wanted so even if we break the version in VS code a working version in Heroku will be great to show our bootcamp friends.
using this https://github.com/pohutukawa-2020/heroku-checklist will help!

## 7: Refactor and attempt stretch goals.
Lets clean up the mess and see if we can make the code as nice as possible. If we have time then we should definitely push to add some cool features. Help will be needed in the updating of table data! If we add features **Repeat steps 5 through to 8** to make sure we have everyhting we need to present. 

## 8: Get all our Bootcamp friends to join!!
Lets present this amazing work and have friends to connect with on Social media and gaming platforms.

