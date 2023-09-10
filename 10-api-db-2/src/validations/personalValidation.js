import validator from "validator";

const sanization = (data) => {
  return {
    name: validator.escape(validator.trim(data.name)),
    email: validator.escape(validator.trim(data.email)),
  };
};

const validation = (dt) => {
  let message = [];
  let data = sanization(dt);
  if (!validator.isEmail(data.email)) {
    message.push("Email tidak valid");
  }
  if (validator.isEmpty(data.name)) {
    message.push("Nama harus diisi");
  }
  if (validator.isEmpty(data.email)) {
    message.push("Email harus diisi");
  }
  return { message, data };
};

export { validation };
