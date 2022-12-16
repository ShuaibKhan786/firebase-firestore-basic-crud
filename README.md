# firebase/firestore
firestore is a firebase database 

This is an react app to learn the basic operations crud in firebase/firestore database

## Installation

Create a project on the firebase after sigining up 

After that Create an new-app as Web-app
After that Create an react app using 

```bash
npx create-react-app your-app
```
After that install the firebase into your app using 
```bash
npm install firebase
```
copy the sdk file from the firebase project from your created app

paste into the firebaseConfig.js

note that you can use any name of the firebaseConfig.js

#After that add this to the firebaseConfig.js file

```python
import { getFirestore } from 'firebase/firestore';
export const db = getFirestore(app);
```


#After that import that file to App.js file start using the crud operations

```python
import { db } from './firebaseConfig';
```

