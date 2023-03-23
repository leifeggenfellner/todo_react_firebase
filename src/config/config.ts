import endpoints from "./endpoints";

const firebaseConfig = {
  apiKey: endpoints.API_KEY,
  authDomain: endpoints.AUTH_DOMAIN,
  projectId: endpoints.PROJECT_ID,
  storageBucket: endpoints.STORAGE_BUCKET,
  messagingSenderId: endpoints.MESSAGING_SENDER_ID,
  appId: endpoints.APP_ID,
  measurementId: endpoints.MEASUREMENT_ID
};

export default firebaseConfig;