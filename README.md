# Import/Export

## Project Setup

**Fork** this repository into your account and then **clone** that repositroy onto your machine.

Once cloned on your machine:
1. Go to the folder in your **terminal/command line** and run `npm install`.
2. **Open** the project in your **code editor**.
3. To **run the website,** go to the folder in your **terminal/command line** and run `npm start`.

## Task

Look inside `src/index.js` and you will find several components directly in the file.  The task is to move each component into its own file.

Create a file for each component inside `src/components`, the file should be name the same thing as the component name (with .js at the end) e.g. for App the file will be created as  `src/components/App.js`.

Use exports and imports to hook the file up so it works the same as before splitting out the components

**Important:** You must import React at the top of each component using the line: `import React from 'react';`

### Export

put `export default` before the function keyword to export the component e.g. `export default function ComponentName() { ...`

### Import

Use `import ComponentName from './path/to/ComponentName.js';` at the top of the file to import that component.

You need to import a component any place that it is used.

