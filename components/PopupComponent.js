import { useEffect, useState } from "react";
import Link from "next/link";
import { getSingleNote } from "../utils/noteFunctions";

export default function PopupComponent({ id }) {
  const [data, setData] = useState(null);

  const getItem = async (id) => {
    const data = await getSingleNote(id);
    setData(data.findNoteByID);
  };

  useEffect(() => {
    getItem(id);
  }, []);

  return (
    <div>
      {!data && <p> Wait..</p>}
      {data && (
        <p>
          {data.body}{" "}
          <Link href={{ pathname: `edit`, query: { id: data._id } }}>
            <a>Edit </a>
          </Link>
        </p>
      )}
    </div>
  );
}
