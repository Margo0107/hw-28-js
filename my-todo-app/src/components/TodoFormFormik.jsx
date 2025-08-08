import { useFormik } from "formik";
import * as Yup from "yup";

export default function TodoFormik({ addTodo }) {
  const formik = useFormik({
    initialValues: {
      task: "",
    },
    validationSchema: Yup.object({
      task: Yup.string()
        .min(5, "Minimum 5 characters")
        .required("Required field"),
    }),
    onSubmit: (values, { resetForm }) => {
      addTodo(values.task);
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type="text"
        name="task"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.task}
        placeholder="Enter the task"
      />
      <button type="submit">add</button>
      {formik.touched.task && formik.errors.task ? (
        <div style={{ color: "red" }}>{formik.errors.task}</div>
      ) : null}
    </form>
  );
}
