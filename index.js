class Bookmark {
  constructor(title, url) {
    this.title = title;
    this.url = url;
  }

  get getBookmarkInfo() {
    return `Click on button to visit ${this.url}`;
  }
}

document.getElementById("btn").addEventListener("click", function (e) {
  e.preventDefault();

  let title = document.getElementById("title").value;
  let url = document.getElementById("url").value;
  let output = document.getElementById("output");

  let bookmark = new Bookmark(title, url);

  let li = document.createElement("li");
  li.className = "list-group-item";
  li.setAttribute("title", bookmark.getBookmarkInfo);
  let button = document.createElement("a");
  button.setAttribute("href", bookmark.url);
  button.className = "btn btn-success btn-sm float-right";
  button.innerHTML = "Visit";
  li.innerHTML = bookmark.title;
  li.append(button);
  output.append(li);

  document.getElementById("title").value = "";
  document.getElementById("url").value = "";
});
