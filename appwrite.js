import { Client, Databases, ID, Query } from "appwrite";

const DB_ID = import.meta.env.VITE_APP_WRITE_DB_ID;
const PROJECT_ID = import.meta.env.VITE_APP_WRITE_PROJECT_ID;
const COLLECTION_ID = import.meta.env.VITE_APP_WRITE_COLLECTION_ID;

const client = new Client().setEndpoint('https://cloud.appwrite.io/v1').setProject(PROJECT_ID)

const database = new Databases(client);
export const updateSearchCount = async (searchTerm, movie) => {
    // 1. use appwrite sdk/api to check if search term already exist
    try {
        const res = await database.listDocuments(DB_ID, COLLECTION_ID, [
            Query.equal('searchTerm', searchTerm),
        ])

        if(res.documents.length > 0) {
            const doc = res.documents[0];

            await database.updateDocument(DB_ID, COLLECTION_ID, doc.$id, {
                count: doc.count + 1
            })
        } else {
            await database.createDocument(DB_ID, COLLECTION_ID, ID.unique(), {
                searchTerm,
                count: 1,
                movies_id: movie.id,
                poster_url: `http://image.tmdb.org/t/p/w500/${movie.poster_path}`
            })
        }
    } catch (error) {
        console.error(error)
    }
    // 2. if found , update the count

    // 3. if it doesn't , create a new document with search term and count as 1
}


export const getTrendingMovies = async() => {
    try {
        const res = await database.listDocuments(DB_ID, COLLECTION_ID, [
            Query.limit(5),
            Query.orderDesc('count')
        ])

        return res.documents;
    } catch (error) {
        console.error(error)
    }
}