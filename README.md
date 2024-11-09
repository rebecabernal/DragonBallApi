
<<<<<<< HEAD
# *Dragon Ball Api*
=======
# *Project-Dragon Ball Api*
>>>>>>> 3dee8784cb94f2a78dfcb8485d746578f911ed05

*This project purpose is to applay an Api succesfully.*

## Tools I Used:

<a href='https://www.postman.com' target="_blank"><img alt='Postman' src='https://img.shields.io/badge/Postman-100000?style=for-the-badge&logo=Postman&logoColor=FF6C37&labelColor=black&color=FF6C37'/></a>
<a href='https://es.pinterest.com' target="_blank"><img alt='pinterest' src='https://img.shields.io/badge/pinterest-100000?style=for-the-badge&logo=pinterest&logoColor=BD081C&labelColor=000000&color=BD081C'/></a>
<a href='' target="_blank"><img alt='html5' src='https://img.shields.io/badge/html5-100000?style=for-the-badge&logo=html5&logoColor=E34F26&labelColor=000000&color=E34F26'/></a>
<a href='https://git-scm.com' target="_blank"><img alt='git' src='https://img.shields.io/badge/git-100000?style=for-the-badge&logo=git&logoColor=F05032&labelColor=000000&color=F05032'/></a>
<a href='' target="_blank"><img alt='css3' src='https://img.shields.io/badge/css3-100000?style=for-the-badge&logo=css3&logoColor=1572B6&labelColor=000000&color=1572B6'/></a>
<a href='' target="_blank"><img alt='javascript' src='https://img.shields.io/badge/javascript-100000?style=for-the-badge&logo=javascript&logoColor=F7DF1E&labelColor=000000&color=F7DF1E'/></a>
<a href='https://github.com' target="_blank"><img alt='github' src='https://img.shields.io/badge/github-100000?style=for-the-badge&logo=github&logoColor=FFFFFF&labelColor=181717&color=181717'/></a>

<<<<<<< HEAD
I used Visual studio code for this project

## Requirements I Have To Meet:
- Create a page in HTML and CSS with Javascript.
- Make the relevant commits and push them to the repository.
- Give it styles with CSS.
- The page must have a HEADER, a MAIN and a FOOTER.
- Organize the folders and use Clean Code.
- Read the EndPoints of (https://web.dragonball-api.com/).
- All the characters/planets on a single page.
- Make a good README that explain the project and how to install it.
- Minimun one page with the characters and other with the planets.

## Installation Steps:
- ### Postman. 
Create a new collection and open two new files; the first for the characters and the second for the planets, then,
Go to the API page to copy the necessary links (pay attention that the end points correspond to the needs).

![Captura de pantalla 2024-11-09 180608](https://github.com/user-attachments/assets/838f8676-eb09-4aac-bbd1-f4452d2d18d7)
![Captura de pantalla 2024-11-09 180725](https://github.com/user-attachments/assets/3bf43191-1896-40b8-930d-97b65b163550)
![Captura de pantalla 2024-11-09 181615](https://github.com/user-attachments/assets/93cee803-927b-4a72-9264-3f11efd431f1)
![Captura de pantalla 2024-11-09 181754](https://github.com/user-attachments/assets/0e95aa23-8736-448f-900c-6854de914080)
![Captura de pantalla 2024-11-09 181851](https://github.com/user-attachments/assets/19d0f290-ac09-40ce-9d85-d623e4edd5dd)

>(?limit= correspont to how many charactes/planets you want per page, in this case we want all; they are 58 characters in total so ?limit=58)

![image](https://github.com/user-attachments/assets/d454e9de-e0cd-4ea3-bd6c-a67d940e0ecb)
Here we can see the URL content in the Json. 

When we make sure the URL has what we want, copy it and move to the next step.

- ### Javascript.
1. Paste the desired URL in the const.

![Captura de pantalla 2024-11-09 184112](https://github.com/user-attachments/assets/14aaf141-8ffa-4a79-8057-d54ff9e04eec)

2. We need to create a function that fetch for the characters/planets in the Json.
 
![Captura de pantalla 2024-11-09 183959](https://github.com/user-attachments/assets/76428ee9-8fc4-4da0-948f-76835fe4fba2)
>Feel free to do a `console.log` to see if everything works right (don't forget to remove it later).

3. Now we need to create another function that state **what** we want to see by filtering the keys. After it we must state **how** we want to see it by adding html to our JS and implementing the keys we previously selected.
 
![Captura de pantalla 2024-11-09 184014](https://github.com/user-attachments/assets/fabc671f-e01d-4df4-8391-914444452341)

4. Lastly create another function that will display the characters/planets in our Html, make sure to do the correct naming.

![Captura de pantalla 2024-11-09 184034](https://github.com/user-attachments/assets/d5557dc0-8b19-45e3-bbdd-448c5f2b05b1)
>In the red lines we are injecting the JS into the Html, keep in mind the **key** passed.

5. Don't forget to call the function!

![Captura de pantalla 2024-11-09 184045](https://github.com/user-attachments/assets/9b541c6c-2b24-4ba0-93b5-d854ba2fca12)
>Again feel free to do a `console.log` to see if everything works right (Remember to remove it later).

- ### HTML & CSS:
Last but not least, in our HTML we have to inject the JS.

![image](https://github.com/user-attachments/assets/265979e7-6d57-4f8f-8f87-9633e237ebaa)

Make sure the naming is correct, we can do it by looking the **key** we passed in the JS.
>Link HTML to CSS.

Moving to CSS we have to give some style, I pesonally prefered to do it myself but things like Boostrap & Tailwind can be used too.

![Captura de pantalla 2024-11-09 234148](https://github.com/user-attachments/assets/26d78910-64c3-4513-afc8-437671a2eacc)
>This is an example.
>Don't forget the Header and Footer.

## *Voilá* All Done! 
If Everything Went OK We Have To Get Something Like This:

![image](https://github.com/user-attachments/assets/02c52530-46c3-4a5a-903a-3d06573ebb8c) ![image](https://github.com/user-attachments/assets/6d0971fe-075b-460c-8524-10b0b18a4f0b)

>***Quite Recommended** keep the code clean, well named and organized.**

---

You can take a look of my work here: *https://rebecabernal.github.io/DragonBallApi/*

For further information, here is my contact: *rebecabernalmesa@gmail.com*

---

# Happy Coding! :D

  

  
 






=======
>>>>>>> 3dee8784cb94f2a78dfcb8485d746578f911ed05
