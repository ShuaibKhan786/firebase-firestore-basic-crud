# firebase/firestore
Firestore is a cloud-based, NoSQL database provided by Google Cloud. It is designed to store, retrieve, and manage data in a flexible, scalable, and high-performance manner. Firestore can be used to build a wide range of applications, including mobile and web applications, real-time collaboration platforms, and gaming applications.


In Firestore, data is stored in the form of documents, which are organized into collections. Each document can contain a variety of data types, including strings, numbers, booleans, and arrays. You can use Firestore's powerful querying and indexing capabilities to retrieve and manipulate data in your application.


Firestore also provides real-time synchronization of data between clients and the server, making it well-suited for building collaborative and real-time applications.


To get started with Firestore, you'll need to create a Google Cloud account and set up a Firestore project. You can then use the Firestore API to access and manipulate data in your database using one of the Firestore client libraries, such as the official Firestore library for Android, iOS, or the web.

This is an react app to learn the basic operations crud in firebase/firestore database

## Installation

Create a project on the firebase after sigining up 

After that Create an new-app as Web-app(cuz we r using an on webdev)
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

After that add this to the firebaseConfig.js file

```python
import { getFirestore } from 'firebase/firestore';
export const db = getFirestore(app);
```


#After that import that file to App.js file start using the crud operations

```python
import { db } from './firebaseConfig';
```

