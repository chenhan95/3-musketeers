# **cash**  

##  Introduction
cash is a tool to calculate the real-time exchange rates for national currencies .
<p align="center">
  <img src="https://github.com/chenhan95/3-musketeers/blob/master/cash/image/introduction.png" height = 200px>
</p>

With it, you can enter the currency which you what to convert, then run the index.js, it will show the result rates.


## Table of content
- [Dependencies](#Dependencies)
- [Modules](#Modules)
- [Usage](#Usage)
    - [Change the currency](#Change-the-currency)
    - [How to run it](#How-to-run-it)


## Dependencies
There exits some dependencies that need to be install
```sh
	"dependencies": {
		"chalk": "^2.4.2",
		"conf": "^2.2.0",
		"got": "^9.6.0",
		"meow": "^5.0.0",
		"money": "^0.2.0",
		"ora": "^3.2.0"
	}
```

## Modules
`constants.js` include some configuration parameter .

`index.js` is used to get user's input.

`constants.js` is the main module which is used to calculate currencies .

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