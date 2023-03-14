import { conexion } from "../db.js";

/* LISTAR PUBLICACIONES */
export const getPosts = async (req, res) => {
   try {
      const [result] = await conexion.query("SELECT * FROM posts ORDER BY createdAT ASC");
      res.json(result);
   } catch (error) {
      return res.status(500).json({ message: error.message })
   }
}

/* VER UNA PUBLICACION */

export const getPost = async (req, res) => {
   try {
      const [result] = await conexion.query("SELECT * FROM posts WHERE id = ?", [
         req.params.id,
      ]);
      if (result.length === 0) {
         return res.status(404).json({ message: "Publiación no encontrada ...." });
      }
      res.json(result[0]);
   } catch (error) {
      return res.status(500).json({ message: error.message });
   }
}

/* CREAR PUBLICACION */
export const createPost = async (req, res) => {
   try {
      const { title, description, author, image_url } = req.body;
      const [result] = await conexion.query(
         "INSERT INTO posts(title, description, author, image_url) VALUES (?,?,?,?)", [title, description, author, image_url]
      );
      res.json({
         id: result.insertId,
         title,
         description,
         author,
         image_url,
      });
   } catch (error) {
      return res.status(500).json({ message: error.message });
   }
}

/* MODIFICAR PUBLICACION */
export const updatePost = async (req, res) => {
   try {
      const [resul] = await conexion.query("UPDATE posts SET ? WHERE id = ?", [
         req.body,
         req.params.id,
      ]);
      res.json(resul);
   } catch (error) {
      return res.status(500).json({ message: error.message });
   }
}

/* ELIMINAR PUBLICACION */
export const deletePost = async (req, res) => {
   try {
      const [result] = await conexion.query("DELETE FROM posts WHERE id = ?", [req.params.id]);

      if (result.affectedRows === 0) {
         return res.status(404).json({ message: "Publicación no encontrada" })
      }

      return res.sendStatus(204);
   } catch (error) {
      return res.status(500).json({ message: error.message });
   }
}
