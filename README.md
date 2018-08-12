# multipage-website-in-php

1. Description
Team project between the Lovelace-2 and Johnson start-ups from [BeCode](https://github.com/becodeorg) aimed at learning elements of PHP programming and remote teamwork.

The task is to redesign the website of a social non-profit into a 3 to 5 pages marketing tool within 7 working days. Each team is composed of 1 person from Johnson and 1 from Lovelace-2. This team's roster is:
- [Quang Le](https://github.com/quang-le) from Lovelace-2;
- [Stéphane Wilfort](https://github.com/wilfort) from Johnson.

[Full briefing (in French) here.](https://github.com/becodeorg/Johnson2/tree/master/projets/multipage-website-in-php)

lien [heroku](https://multipage-website-letilt.herokuapp.com/).
lien [form-logs.php](https://multipage-website-letilt.herokuapp.com/form-logs.php) pour qui affiche le contenu du log 

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
NB: The email and upload have be done separately by both (then merged or modified) as part of the learning process.
Stéphane's version is on master and has been deployed, Quang's version is on the branch "Son".

5. The client 

Tilt asbl is a non-profit that organises various activities for kids (workshops, summercamps, *etc*). They aim to educate critical and involved citizens through activities centered on creation and discovery. They also act as a resource center, working with schools and providing trainings aimed at adults.

Their [current website](https://www.letilt.be/) is well structured for people who already know about the organization and want to find specific information. It is, however, quite big, and not always easy to navigate with 2 navbars on top of the page and some dead links and redundant pages.

6. Log 
29/07: split tasks. Stéphane started working on phpmailer, Quang on file upload
30/07: 14:00: upload is complete but the permission issues encountered seem to come up when Stéphane tests it on his end.
30/07, 15:30: both mailer and upload are complete. Stéphane starts working on header, Quang starts writing the README and combing through the website's content
02/08 until 06/08: both of us were unavailable due to our participation to [Hack in the woods](http://www.hackinthewoods.be/)
07 and 08/08: Quang was absent for family reasons, Stéphane worked on the CSS
09/08: Stéphane finalized the CSS and started the service worker. Quang was not available because his involvement in the [Dorothy project](https://dorothycares.ovh/login/)
10/08: Stephane finished the PWA settings, Quang managed the GDPR part (cookie banner, opt-in to data collection in the form, pictures' credits). Deployment on Heroku was managed in tandem.

7. Elements of self-evaluation

- Since we both attended the hackathon, we prioritized the php part of the challenge. We both managed to have a working version of the email and upload by 01/08/2018.

- All the front end was relegated at the back seat, then managed mostly by Stéphane due to Quang's (planned) absences. Practically, the results match most technical requirements (use of css framework, include animation,min 3 pages), but the UX and branding have not been developed as we'd have liked to.

- Developing 2 versions of the mailer and upload was interesting, but time consuming in an already short deadline. It also made some of the task splitting quite moot.

- We tried to stick to remote working as much as possible, but in the last days we prioritized reaching technical goals over that part of the challenge.







