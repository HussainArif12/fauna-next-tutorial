import { useRouter } from "next/router";
import { Formik, Field, Form } from "formik";
import { editNote, getSingleNote } from "../utils/noteFunctions";
import { useEffect, useState } from "react";

export default function Edit() {
  const [data, setData] = useState(null);
  const router = useRouter();

  const getData = async (id) => {
    const response = await getSingleNote(id);
    setData(response.findNoteByID);
  };

  useEffect(() => {
    if (!router.isReady) return false;
    getData(router.query.id);
  }, [router.isReady]);

  if (!data) return <p> Please wait</p>;
  return (
    <div>
      <Formik
        initialValues={{
          title: data.title,
          body: data.body,
        }}
        onSubmit={async (values) => {
          await editNote(router.query.id, values.title, values.body);
          router.push("/");
        }}
      >
        <Form>
          <label htmlFor="firstName">Title</label>
          <Field id="title" name="title" defaultValue={data.title} />

          <label htmlFor="lastName">Body</label>
          <Field id="body" name="body" defaultValue={data.body} />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}
