import Link from "next/link";
import { useEffect, useState } from "react";
import NotesList from "../components/NotesList";
import { getNotesList } from "../utils/noteFunctions";

export default function IndexPage() {
  const [data, setData] = useState(null);

  const getData = async () => {
    const data = await getNotesList();
    setData(data.allNotes.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Link href="/add"> Add note here.</Link>
      {!data && <p> Loading..</p>}
      {data && <NotesList data={data} />}
    </div>
  );
}
