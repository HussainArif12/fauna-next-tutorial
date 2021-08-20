import { Form, Field, Formik } from "formik";
import { useRouter } from "next/router";
import { addNote } from "../utils/noteFunctions";
export default function Add() {
  const router = useRouter();

  return (
    <div>
      <Formik
        initialValues={{
          title: "",
          body: "",
        }}
        onSubmit={async (values) => {
          await addNote(values.title, values.body);
          router.push("/");
        }}
      >
        <Form>
          <label htmlFor="title">Title</label>
          <Field id="title" name="title" placeholder="Jane" />

          <label htmlFor="body">Body</label>
          <Field id="body" name="body" placeholder="Doe" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}
