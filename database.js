import mysql from 'mysql2'

export const pool = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'programming'
}).promise()

export const getLanguages = async () => {
    const [result] = await pool.query("SELECT * FROM programming_languages")
    return result
}

export const getLanguage = async (id) => {
    const [result] = await pool.query("SELECT * FROM programming_languages WHERE id = ?", [id])
    return result
}

export const newLanguage = async (data) => {
    const { name="", released_year="", githut_rank="", pypl_rank="", tiobe_rank="" } = data
    await pool.query("INSERT INTO programming_languages(name, released_year, githut_rank, pypl_rank, tiobe_rank) VALUES(?,?,?,?,?)", [name, released_year, githut_rank, pypl_rank, tiobe_rank])
}

export const updateLanguage = async (data) => {
    const { name="", released_year="", githut_rank="", pypl_rank="", tiobe_rank="", id="" } = data
    await pool.query("UPDATE programming_languages SET name=?,released_year=?,githut_rank=?,pypl_rank=?,tiobe_rank=? WHERE id=?", [name, released_year, githut_rank, pypl_rank, tiobe_rank, id])
}

export const deleteLanguage = async (id) => {
    await pool.query("DELETE FROM programming_languages WHERE id = ?", [id])
}