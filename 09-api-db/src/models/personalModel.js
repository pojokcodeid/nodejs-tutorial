import { getConnection } from "../utils/db.js";

const getAll = async () => {
  let conn;
  try {
    conn = await getConnection();
    const sql = "select * from personal";
    const rows = await conn.query(sql);
    return rows;
  } finally {
    if (conn) conn.release();
  }
};

const getById = async (id) => {
  let conn;
  try {
    conn = await getConnection();
    const sql = "select * from personal where id = ?";
    const rows = await conn.query(sql, [id]);
    return rows[0];
  } finally {
    if (conn) conn.release();
  }
};

const update = async (data) => {
  let conn;
  try {
    conn = await getConnection();
    const sql = "update personal set nama=?, email=? where id = ?";
    const rows = await conn.query(sql, [data.name, data.email, data.id]);
    return rows;
  } finally {
    if (conn) conn.release();
  }
};

const insert = async (data) => {
  let conn;
  try {
    conn = await getConnection();
    const sql = "insert into personal (nama,email) values(?,?)";
    const rows = await conn.query(sql, [data.name, data.email]);
    return rows;
  } finally {
    if (conn) conn.release();
  }
};

const hapus = async (id) => {
  let conn;
  try {
    conn = await getConnection();
    const sql = "delete from personal where id=?";
    const rows = await conn.query(sql, [id]);
    return rows;
  } finally {
    if (conn) conn.release();
  }
};

export { getAll, getById, update, insert, hapus };
