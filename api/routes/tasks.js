
import {pool} from "../db.js"

export const createTask = (req, res) => {

    const email = req.body.user.email
    const userId = req.body.user.uid

    const userQuery = "SELECT * FROM users WHERE email = ?";

    pool.query(userQuery, [email], (userErr, userData) => {
        if (userErr) {
            return res.status(500).json({ error: "Internal server error" });
        }

        if (userData.length > 0) {
            const noteQuery = "INSERT INTO tasks (`taskContent`, `completed`, `taskUid`) VALUES (?, ?, ?)";
            const completed = JSON.stringify(req.body.completed)
            pool.query(noteQuery, [req.body.taskContent, completed, userId], (noteErr, noteData) => {
                if (noteErr) {
                    return res.status(500).json("Error creating note");
                }
                return res.status(200).json("Note has been created successfully.");
            });
        } else {
            return res.status(404).json({ error: "User not found" });
        }
    });
};

export const getTasks = (req, res) => {

    const getNotesQuery = "SELECT * FROM `tasks` WHERE `taskUid` = ?"

    
    pool.query(getNotesQuery, [req.query.uid], (err, data)=>{
       
        if(err){
            return res.status(500).send(err);
        }

        return res.status(200).json(data);
    })
}
   