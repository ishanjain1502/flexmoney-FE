# Flexmoney - FrontEnd

## Story

Sukhdam Yoga Classes are one of the premiere yoga institues of india, they have there schools setup in different different cities, where they teach yoga.
<br/>
They wanted us to create a platform for online onboarding of students, so that they dont have to visit the center always, and can also help in increasing there popularity and customer, their classes are of month on month basis, and the fees is also supposed to be paid in that manner, you can only pay fees once in a month, no matter which day you paid the fees, one will only be eligible for the remaining days of the month

## My Solution

I Created a simple Registeration form for students which will ask for most of the required information which can be easily provided online, and then will create a user dashboard, from where the student can pay the fees, right now the dashboard only has batch selection and fees paying facility but it can grow up to have much more
<br/>
The fees was supposed to be paid on a month on month basis and after the completion of month the usability of the dashboard has to be removed so for that, implimented a job scheduler which in the morning of japanese time which is typically around midnight of india will update all the active users dashboard to inactive, and will have payment option available to them
<br/>

## Technical Details

### Technology Used

Architecture - Component Based Architecture <br/>
Auth - JSON web token <br/>
API Hosting - Vercel <br/>
Frontend - NextJS, JavaScript <br/>
Developer Tooling - Prettier <br/>

## Backend Repo of the assignment:

[Link](https://github.com/ishanjain1502/flexmoney-backend-new/blob/main/README.md)
