## A few examples of FEATURE testing syntax in MOCHA is contained within the 'tests' folder'


#### This is the best (simplest) resource I've found on feature testing: https://themeteorchef.com/snippets/acceptance-testing-basics-with-chimp/



## Setup

* brew install node (you'll probably get a prompt asking you to run a command to uninstall an existing version of Node)
* npm install --global chimp

## Running chimp

* Ensure the server is running in another iTerm tab
* chimp --ddp=http://localhost:3000 --watch --mocha --path=tests
