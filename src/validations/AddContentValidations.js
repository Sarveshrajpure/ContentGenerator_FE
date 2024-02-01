import * as yup from "yup";

const urlRegex =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/;

export const addContentSchema = yup.object().shape({
  title: yup.string().min(2).max(225).required("Required"),
  description: yup.string().max(225).required("Required"),
  contentLink: yup.string().matches(urlRegex, "Invalid URL").required("Required"),
});
