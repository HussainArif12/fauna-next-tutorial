import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useRouter } from "next/router";
import PopupComponent from "./PopupComponent";
import { deleteNote } from "../utils/noteFunctions";

export default function NotesList({ data }) {
  const router = useRouter();

  return (
    <>
      {data.map((item) => (
        <div key={item._id}>
          <Popup
            trigger={<button> {item.title} </button>}
            position="bottom left"
          >
            {(close) => (
              <div>
                <div>
                  <PopupComponent id={item._id} />
                  <a className="close" onClick={close}>
                    &times;
                  </a>
                </div>
              </div>
            )}
          </Popup>
          <button
            onClick={async () => {
              await deleteNote(item._id);
              router.reload();
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
}
