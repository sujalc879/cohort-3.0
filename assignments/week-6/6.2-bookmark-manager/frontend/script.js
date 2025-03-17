const API_URL = "http://localhost:3001/bookmarks";

document.addEventListener("DOMContentLoaded", fetchBookmarks);

function fetchBookmarks() {
    fetch(API_URL)
    .then(response => response.json())
    .then( (bookmarks) => {
        bookmarks.forEach(bookmark => {
            addBookmarkToDom(bookmark.id, bookmark.bookmark, bookmark.category)
        });
    } )
}

function addBookmarkToDom(id, bookmark, category) {
    let bookmarkList = document.getElementById("bookmark-list");

    let bookmarkItem = document.createElement("li");
    let bookmarkSpan = document.createElement("span");

    bookmarkSpan.innerHTML = `${bookmark} ( ${category} )`;

    let deleteBtn = document.createElement("img");
    deleteBtn.setAttribute("src", "https://png.pngtree.com/png-vector/20190501/ourmid/pngtree-vector-cross-icon-png-image_1016083.jpg");
    deleteBtn.setAttribute("alt", "Delete");
    bookmarkItem.setAttribute("data-id", id);
    deleteBtn.addEventListener("click", () => {
        deleteBookmarkById(id);
    })

    bookmarkItem.appendChild(bookmarkSpan);
    bookmarkItem.appendChild(deleteBtn);
    bookmarkList.appendChild(bookmarkItem);
}


// Adds a new Bookmark
document.getElementById("add-bookmark-btn").addEventListener("click", () => {
    let bookmarkInput = document.getElementById("bookmark-input");
    let bookmarkCategory= document.getElementById("bookmark-input-category");

    if (!bookmarkInput.value || !bookmarkCategory.value) {
        alert("Bookmark & Category Required");
    } else {
        let newBookmark = { "myBookmark" : bookmarkInput.value, "myCategory" : bookmarkCategory.value }
        fetch(API_URL, {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(newBookmark)
        })
        .then(response => response.json())
        .then((bookmark) => {
            addBookmarkToDom(bookmark.id, bookmark.bookmark, bookmark.category)
            bookmarkInput.value = "";
            bookmarkCategory.value = "";
        })
    }
})

function deleteBookmarkById(id) {
    if (!id) {
        alert("id is required");
    } else {
        fetch(`${API_URL}/${id}`, {
            method : "DELETE",
        })
        .then(() => {
            const todoItem = document.querySelector(`[data-id='${id}']`);
            todoItem.remove();
        })
        .catch((error) => {
            console.log("error for deleting Todo " + error);
        })


    }
}