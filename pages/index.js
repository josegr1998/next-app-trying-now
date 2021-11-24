import Head from "next/head";
import styles from "../styles/Home.module.css";
import axios from "axios";
import Link from "next/link";

export default function Home({ notes }) {
  console.log(notes);
  const allNotes = notes.data;
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {allNotes.length < 1 ? (
        <h1>No notes created yet</h1>
      ) : (
        allNotes.map((note) => {
          return (
            <div>
              <Link href='/create'>create note</Link>
              <h1>{note.title}</h1>
              <p>{note.description}</p>
            </div>
          );
        })
      )}
    </div>
  );
}

export const getStaticProps = async () => {
  let dev = process.env.NODE_ENV !== "production";
  let { DEV_URL, PROD_URL } = process.env;

  let response = await axios.get(`${dev ? DEV_URL : PROD_URL}/api`);

  const data = response.data;

  return {
    props: {
      notes: data,
    },
  };
};
