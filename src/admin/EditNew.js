import React from "react";

<form action="">
    <input type="text" onChange = {(event) => setNewTitle(event.target.value)}/>
    <input type="text" onChange = {(event) => setNewContent(event.target.value)}/>
    <input type="text" onChange = {(event) => setNewDate(event.target.value)}/>
    <input type="text" onChange = {(event) => setNewAuthor(event.target.value)}/>
    <input type="text" onChange = {(event) => setNewImage(event.target.value)}/>
</form>
<button onClick={createNew}>add</button>
<button onClick={() => updateNew(ele.id, ele.title, ele.content, ele.date, ele.author, ele.image)}>edit</button>
