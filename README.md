# widget-app
Widget App is a very simple practice app of React Hooks systems. Simply there will be some questions and whenever those are clicked, the answers will expand below. Whenever another question is clicked, previous answer will shrink and that answer will expand below. This is a application practice of ReactJS hooks system and functional programming.

## Install in your Development Setup
To install the widget-app in your local development setup, please follow the next steps. Skip the installations, which are already installed in your machine.

### On Linux/Mac
<ol>
  <li> 
      First you should have git installed in your linux machine. If you do have git installed, proceed to next steps. If you do not have git installed, type the command below on your linux terminal, and if you are unsure then also do the same.
      
      sudo apt update
      sudo apt install git
      
  </li>
  <li>
      Now so that you have git installed in your machine, you need to install nodejs and npm in your machine. If you have it installed you are welcome to move forward
      
      sudo apt install nodejs
      sudo apt install npm
  </li>
  <li>
      Now, as you have prerequisits installed, you can move forward and clone this app. To do so, change to your desired directory and type the below command on your linux/mac terminal and enter
      
      git clone https://github.com/yunusparvezkhan/widget-app.git
  </li>
  <li>
      Now you have the repository in your machine. Change directory to the repo by
      
      cd widget-app
  </li>
  <li>
      Now, you need the dependencies of this app to be installed in order to get it running. To do so, enter the following command,
      
      npm install
  </li>
  <li>
      After all the installations are done, enter the following command to start the npm server
      
      npm start
  </li>
  <li>
      After the last command a new browser tab should automatically open. If not opened, then go to your browser and type the following address on the url bar
      
      localhost:3000
      
      
      Or,
      
      
      127.0.0.1:3000
  </li>
  <li>
      If you do not see an app coming on the screen, then check your terminal for which port the app is running. Put that port number instead of 3000 in the previous process. If you still do not have the app running check all the above steps and troubleshoot
  </li>
</ol>



### On Windows
<ol>
  <li>
      Firstly you need to install Chocolaty package maneger in your windows machine to continue to the following steps.
  </li>
  <li> 
      First you should have git installed in your Windows machine. If you do have git installed, proceed to next steps. If you do not have git installed, type the command below on your Windows PowerShell/CMD, and if you are unsure then also do the same.
      
      choco install git
      
  </li>
  <li>
      Now so that you have git installed in your machine, you need to install nodejs and npm in your machine. If you have it installed you are welcome to move forward
      
      choco install nodejs
      choco install npm
  </li>
  <li>
      Now, as you have prerequisits installed, you can move forward and clone this app. To do so, change to your desired directory and type the below command on your Windows PowerShell/CMD and enter
      
      git clone https://github.com/yunusparvezkhan/widget-app.git
  </li>
  <li>
      Now you have the repository in your machine. Change directory to the repo by
      
      cd widget-app
  </li>
  <li>
      Now, you need the dependencies of this app to be installed in order to get it running. To do so, enter the following command,
      
      npm install
  </li>
  <li>
      After all the installations are done, enter the following command to start the npm server
      
      npm start
  </li>
  <li>
      After the last command a new browser tab should automatically open. If not opened, then go to your browser and type the following address on the url bar
      
      localhost:3000
      
      Or,
      
      127.0.0.1:3000
  </li>
  <li>
      If you do not see an app coming on the screen, then check your terminal for which port the app is running. Put that port number instead of 3000 in the previous process. If you still do not have the app running check all the above steps and troubleshoot
  </li>
</ol>


<br><br>
# Standard Commit Notations
### On Version Release

`Version [Version number] Release`

### On Patch/fix/changes (minor/major)


`Patch [Version index].[patch index]`

### Development Phase commits


`v[version number that is currently being developed] Delta [index of major changes, ie. Component additions].[index of small changes following the major change].`

`Example`  => `v4 Delta 1.8`

 This Commit title represents that Version 4 is in Development right now, and in the development process so far, one major change have been commited and follwing that change 8 small changes have been commited.

### On Devnotes update

`v[version under development] echo [index of devnotes update]`
`Example` => `v4 echo mic 1`

This Commit title repressents that while Version 4 of the app is in Development phase, devnotes is updated for some announcement/notification and the index of such announcement/notification is 1.

### On Readme.md update

`README update v[version currently under development] #[index of readme update] `

then as the extended description 

`some description`
