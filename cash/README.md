# **cash**  

##  Introduction
cash is a tool to calculate the real-time exchange rates for national currencies .
<p align="center">
  <img src="https://github.com/chenhan95/3-musketeers/blob/master/cash/image/introduction.png" height = 200px>
</p>

With it, you can enter the currency which you what to convert, then run the index.js, it will show the result rates.


## Table of content
- [How it works](#How-it-works)
- [Usage](#Usage)
    - [Change the currency](#Change-the-currency)
    - [How to run it](#How-to-run-it)


## How it works




##  Usage
### Setup
Clone this repo to your desktop and you might want to look into `currencies.json` to check the short-name of currencies.

### Change the currency
You can modify the national currencies in `constants.js`, in the array list `DEFAULT_TO_CURRENCIES` , the first element is 'reference currency', the last three elements are 'query curreny', you can change them to other national currency that you want.
<p align="center">
  <img src="https://github.com/chenhan95/3-musketeers/blob/master/cash/image/currencies.png">
</p>


### How to run it

***Note：***

To see if Node is installed, type node -v in Terminal. This should print the version number so you’ll see something like this v0.10.31.

To see if NPM is installed, type npm -v in Terminal. This should print the version number so you’ll see something like this 1.4.27

If you didn't install npm and node.js before, you should install them.

Maybe you can get some help to install `NPM` and `node.js`: 
https://blog.teamtreehouse.com/install-node-js-npm-mac



***Then：***

Open the terminal, and enter the command below:
```sh
❯ cd /path/to/workspace/3-musketeers/starwars
❯ npm i          //to install its dependencies.
❯ node sandbox.js
```
***Result：***
<p align="center">
  <img src="https://github.com/chenhan95/3-musketeers/blob/master/cash/image/result.png">
</p>