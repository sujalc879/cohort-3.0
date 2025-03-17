import { json } from "express";

let bookmarks = []; // in memory space

let currentId = 1; // Unique id for each Bookmark

export async function addBookmark(req,res,next){
// write here
    let { myBookmark } = req.body;
    let { myCategory } = req.body;

    if (!myBookmark || !myCategory) {
        res.status(404).json({ Message : "Bookmark & Category is Requried"});
    }

    let newBookmark = { id : currentId++, bookmark : myBookmark, category : myCategory};

    bookmarks.push(newBookmark);

    res.status(201).send(newBookmark);
}

export async function deleteBookmark(req,res,next){
// write here
    let myBookmarkId = req.params["id"];
    
    if (!myBookmarkId) {
        res.status(404).json({ Message : "Bookmark id is Required"});
    }

    let findIndex = bookmarks.findIndex((bookmark) => {
        return bookmark.id == myBookmarkId;
    });

    bookmarks.splice(findIndex, 1);

    res.status(201).json({ Message : "Bookmark Deleted..."});
}

export async function getAllBookmarks(req,res,next){
// write here
    res.status(201).send(bookmarks);
}