import { object, ref, string } from "yup";

let validations = object({
  email: string().email("Geçerli Bir E-mail girin").required("Zorunlu alan"),
  password: string()
    .min(5, "Parolanız en az 5 karakter olmalı")
    .required("Zorunlu alan"),
  passwordConfirm: string()
    .oneOf([ref("password")], "Parolalar uyuşmuyor")
    .required("Zorunlu alan"),
});

export default validations;
