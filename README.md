# Dana Site Template

**You can use the "issues" button to report bugs**

This is the basic site. The current development is being done on the "master" branch.

## Installation

To use this template, your computer needs:

- [NodeJS](https://nodejs.org/en/) (0.12 or greater)
- [Git](https://git-scm.com/)
- [MAMP](https://www.mamp.info/en/)

Verify you have npm and node installed (open a terminal window and type):

```bash
node -v // should output a version number
npm -v // should output a version number
```

Install gulp globally:

```bash
npm install gulp -g
```

This template can be installed by downloading and set up manually.

### Manual Setup

To manually set up the template, first download it with Git:

```bash
git clone https://github.com/newshorts/danaleong
```

Then open the folder in your command line, and install the needed dependencies:

```bash
cd /Path/To/Dana/Folder/danaleong
npm install
bower install
```

Finally, run `npm start` to run the Sass compiler. It will re-run every time you change a file.

## Viewing the site

If you installed MAMP (above), change the project root directory (settings) to be the /danaleong/ folder (wherever it lives on your computer).

Once you have the root set, hit the power button to start the server.

The site can be seen locally at the following url:

```
localhost:8888
```
