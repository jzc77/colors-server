# NodeJS CORS in action

## Repository Overview
This repository was set up to follow a tutorial on NodeJS CORS (Cross-origin resource sharing). The tutorial I followed can be found at: https://www.stackhawk.com/blog/nodejs-cors-guide-what-it-is-and-how-to-enable-it/

## Notes on what I learned
* Using a fetch request from the frontend (http://localhost:3000) to backend (http://localhost:5000) can result in a CORS error. 

<img src="images/cors-error.png" width="470" alt="CORS error in browser's console">

* **Git related:** On my first commit, I noticed that the "client" file pushed to GitHub had an arrow in it and the folder was not clickable.
  * <img src="images/folder-arrow.png" width="100" alt="Arrow on 'client' folder">
  * This was due to another .git folder in the client folder. The .git folder was created by default when I created the React app via `npx create-react-app client`.
  * To solve this, I deleted the .git folder and .gitignore file in the "client" folder. Then, I had to run `git rm --cached client`. I pushed to GitHub again and the arrow disappeared from the "client" folder. I was able to click into the folder on GitHub. 
