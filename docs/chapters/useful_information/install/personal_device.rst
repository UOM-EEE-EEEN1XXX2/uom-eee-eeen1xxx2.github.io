
Installing on your personal computer
------------------------------------

Advantages and disadvantages
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Advantages:

- Runs locally on your computer. You can thus do coding at home and remotely, at times convent for you.
- Compilation tasks will likely be faster than when using an online or dev container option. 

Disadvantages:

- Requires admin permissions on your device.
- Requires installing all of the tools. It can be difficult to get everything to work if the instructions are not followed exactly. (Once set up they should then work without issue.)
- If the installation is done incorrectly, it can be very difficult debug and fix without simply uninstalling everything and starting again. 


Process
~~~~~~~
Fundamentally, Microsoft provide instructions at:
- https://code.visualstudio.com/docs/languages/cpp
You follow these. Our briefer guide is here, below. Steps should be carried out in the order as given. 

1. Install VSCode:

- Windows: Download the Windows installer at https://code.visualstudio.com/ and run it.
- macOS: Download the macOS installer at https://code.visualstudio.com/ and run it.
- Linux: Assuming you are on a Debian based distribution such as Ubuntu, run:
  % sudo apt-get update && apt-get -y snapd 
  % sudo snap install code --classic

2. Install gcc:

- Windows:
 - Download the MSYS2 installer at https://www.msys2.org/ and run it.
 - Make a note of the installation folder. (Any folder is fine, you just need to note it.) We suggest you keep it at the default. Typically it is
   C:\msys64
 - At the end of the installation select "Run MSYS2 now".
 - This will display a terminal window. (If not, you can open MYSYS2 MYSYS from the start menu.) Type the below into this (the $ isn't needed, this is to show you where to enter the command):
   $ pacman -S mingw-w64-ucrt-x86_64-gcc
 - When the above command finishes executing, open the start menu and select "Settings".
 - Search for "Edit environment variables for your account".
 - Select "Path" and then click "Edit".
 - Select "New" and then enter the below. (This assumes you sued the default settings. If you changed the installation location, the below needs to be changed to match.)

   C:\msys64\ucrt64\bin

- macOS:
 - Open the "Terminal" application.
 - Enter the command below (the % isn't needed, this is to show you where to enter the command):
   
   xcode-select --install
 
 - Agree to install the Command Lines Tools package.
 - Install Homebrew with the command:

   % /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

 - Install gcc with the command:
   % brew install gcc

- Linux:
 - Open the "Terminal" application.
 - Run:
   
   % sudo apt-get update && apt-get -y build-essential gdb cmake cppcheck

3. Install git:

- Windows:
 - Download the Windows installer at https://git-scm.com/download/win and run it. Select the "Standalone Installer", "64-bit Git for Windows Setup".
 - The default settings are fine, expect for "Choosing the default editor used by Git". Select Visual Studio Code for this.
		
				
 - Optional: You may also like to install GitHub Desktop. Download at https://desktop.github.com/. It gives a slightly nicer interface to Git and GitHub than the default VSCode interface.
- macOS:
 - In the terminal, run the command:
			% brew install git
 - (The above assumes homebrew was installed in Step 2. Full instructions are at https://git-scm.com/download/mac if needed.)
 - When prompted, select Visual Studio Code as the default editor.
 - Optional: You may also like to install GitHub Desktop. Download at https://desktop.github.com/. It gives a slightly nicer interface to Git and GitHub than the default VSCode interface.
- Linux:
 - In the terminal, run the command:
			% sudo apt-get update && apt-get -y git-all

4. Install VSCode extensions:

- VSCode comes with a number of Extensions. These are installed from within VSCode  by clicking the Extensions button. 		

- All platforms:
 - Open the Extensions pane. Search for and install each of the below:
  - ms-vscode.cpptools
  - ms-vscode.cpptools-extension-pack
  - ms-vscode.cpptools-themes
  - ms-vscode.cmake-tools
  - ms-vscode.cmake-tools
  - ms-vscode-remote.remote-containers
  - GitHub.vscode-pull-request-github
  - github.codespaces
  - eamodio.gitlen
  - streetsidesoftware.code-spell-checker
  - formulahendry.code-runner
