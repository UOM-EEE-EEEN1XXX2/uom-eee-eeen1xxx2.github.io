Use VSCode online with codespaces
---------------------------------

Advantages and disadvantages
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Advantages:

- Runs online. You thus don't need to install anything, and can do coding at home and remotely, at times convenient for you.
- The devcontainer hosts the main tools, so you get the correct version of everything, correctly set up. 

Disadvantages:

- Requires you to be online, and may be relatively slow compared to a local install. 
- Uses GitHub codespaces, https://github.com/features/codespaces, which by default allows 60 hours per month of free use. This should be sufficient to complete the course, but you may find limiting. If you verify your student status with GitHub they will increase your limit to 180 free hours per month. Full details are at: https://education.github.com/discount_requests/application.
- Regardless of what your main operating system is, your programming is actually done in Linux.
- VSCode takes a relatively long time to complete its set up each time you start it (typically about a minute).


Process
~~~~~~~
1. Set up a repository in GitHub for your code. 

- In the labs, a GitHub repository will be made for you when you click on the GitHub classroom link. Usually this is the first thing that's done when you start the lab.
- Note that for Lab A, the GitHub classroom isn't set up until the third part of the lab. You'll thus need to do this lab (and only this lab) out of order. 

2. Copy devcontainer files

- We have made a devcontainer for the course which contains the required tools. The dev container files are online at: https://github.com/EEEN10242/devcontainer
- These files should be copied and put into your GitHub repository for the code you want to work on.
- You will need to repeat this step every time you start a new lab or project folder. 
- You can ignore "example.c". This is some example code that you can compile, if you want, to check that the setup is working. All of the other files are needed for the set up to work correctly. 

3. Open a codespace

- In your Browser, go to your GitHub repository.
- Click on "Code" then "Codespaces" then "Create codespace on main".	
- This will start VSCode in your browser and it should be ready to use directly.
- Note to start VSCode online after it's been closed, you click on the name under "On current branch" rather than "Create cosdespace on main". VSCode will have automatically assigned a random name. 

In the example below it is "opulent space goldfish".
	
	
