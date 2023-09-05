import validator from "validator";

export const validasi = (name, email, alamat) => {
  name = validator.rtrim(validator.ltrim(validator.escape(name)));
  email = validator.rtrim(validator.ltrim(email));
  alamat = validator.rtrim(validator.ltrim(validator.escape(alamat)));
  if (validator.isEmpty(name)) {
    console.log("Nama tidak boleh kosong");
    return false;
  }
  if (!validator.isEmail(email)) {
    console.log("Email tidak valid");
    return false;
  }
  if (validator.isEmpty(alamat)) {
    console.log("Alamat tidak boleh kosong");
    return false;
  }
  return true;
};
