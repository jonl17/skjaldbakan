import * as sapper from "@sapper/app";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

sapper.start({
  target: document.querySelector("#sapper"),
});

firebase.initializeApp({
  apiKey: process.env.fbApiKey,
  authDomain: process.env.fbAuthDomain,
  projectId: process.env.fbProjectId,
  storageBucket: process.env.fbStorageBucket,
  appId: process.env.fbAppId,
  measurementId: process.env.fbMeasurementId,
});
firebase.firestore();
firebase.auth();
firebase.storage();
