# multipage-website-in-php

1. Description
Team project between the Lovelace-2 and Johnson start-ups from [BeCode](https://github.com/becodeorg) aimed at learning elements of PHP programming and remote teamwork.

The task is to redesign the website of a social non-profit into a 3 to 5 pages marketing tool within 7 working days. Each team is composed of 1 person from Johnson and 1 from Lovelace-2. This team's roster is:
- [Quang Le](https://github.com/quang-le) from Lovelace-2;
- [Stéphane Wilfort](https://github.com/wilfort) from Johnson.

[Full briefing (in French) here.](https://github.com/becodeorg/Johnson2/tree/master/projets/multipage-website-in-php)

lien [heroku](https://multipage-website-letilt.herokuapp.com/).

2. Technical objectives
- Use *DRY* coding
- Separate *php* from *html*
- Use à `.gitignore` file 
- One page will contain a contact form that will:
    * Allow user to choose their gender
    * Ask for user's name, last name and email
    * Allow user to write a message
    * Allow user to upload a jpg, gif or png
    * Allow user to choose between *html* and *txt* 
- Uploading will be done with *php upload* class
- Email will be managed with *phpmailer* or another similar class
- Form will be sanitized, validated, executed and will provide feedback
- Form sending will be logged in a *.txt* file and a *.php* page (which will remove private data)
- Errors from user will dispatch appropriate messages
- Use CCS framwork to design responsive pages
- lighthouse test result of 80 in every category

3. Learning objectives
- First contact with Object Oriented
- Learn the process of sanitize, validate, execute, feedback
- Learn to use php classes
- Learn remote teamwork and the use of facilitating tools
- Refresh/cement front-end learnings

4. Our work method

We were given half a day to meet-up, figure out how to share the various tasks and how to work together. So we sat down, went through the [briefing](https://github.com/becodeorg/Johnson2/tree/master/projets/multipage-website-in-php) and organized ourselves:

- Team management:
    * Creation and management of the repo, including `.gitignore`: Stéphane
    * Redaction of README: Quang 
    * Follow-up of the kanban: Quang

- Front-end:
    * Branding and other UX elements: to be sorted out later
    * GDPR compliance: Quang

- Back-end: 
    * Upload of pictures: Quang
    * Email treatment (including validation etc): Stéphane
    * Deployement on Heroku: Stéphane

Communication would be through Ryver.
NB: The email and upload might be done separately by both (then merged or modified) as part of the learning process.

5. The client 

Tilt asbl is a non-profit that organises various activities for kids (workshops, summercamps, *etc*). They aim to educate critical and involved citizens through activities centered on creation and discovery. They also act as a resource center, working with schools and providing trainings aimed at adults.

Their [current website](https://www.letilt.be/) is well structured for people who already know about the organization and want to find specific information. It is, however, quite big, and not always easy to navigate with 2 navbars on top of the page and some dead links and redundant pages.

6. Log 
29/07: split tasks. Stéphane started working on phpmailer, Quang on file upload
30/07: 14:00: upload is complete but the permission issues encountered seem to come up when Stéphane tests it on his end.
30/07, 15:30: both mailer and upload are complete. Stéphane starts working on header, Quang starts writing the README and combing through the website's content







