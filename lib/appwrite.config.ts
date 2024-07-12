import * as sdk from "node-appwrite";
import dotenv from "dotenv";

dotenv.config();

export const ENDPOINT = process.env.NEXT_PUBLIC_ENDPOINT;
export const PROJECT_ID = process.env.NEXT_PUBLIC_PROJECT_ID;
export const DATABASE_ID = process.env.DATABASE_ID;
export const PATIENT_COLLECTION_ID = process.env.PATIENT_COLLECTION_ID;
export const DOCTOR_COLLECTION_ID = process.env.DOCTOR_COLLECTION_ID;
export const APPOINTMENT_COLLECTION_ID = process.env.APPOINTMENT_COLLECTION_ID;
export const BUCKET_ID = process.env.NEXT_PUBLIC_BUCKET_ID;
export const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

// Check if required environment variables are set
if (!ENDPOINT || !PROJECT_ID || !API_KEY) {
  console.log("Endpoint:", ENDPOINT);
  console.log("Project ID:", PROJECT_ID);
  console.log("API Key:", API_KEY);
  throw new Error(
    "Missing required environment variables for Appwrite client initialization."
  );
}

// Initialize Appwrite client
const client = new sdk.Client();

client.setEndpoint(ENDPOINT).setProject(PROJECT_ID).setKey(API_KEY);

// Export initialized Appwrite services
export const databases = new sdk.Databases(client);
export const users = new sdk.Users(client);
export const messaging = new sdk.Messaging(client);
export const storage = new sdk.Storage(client);
