# altBlog

altBlog (v2) is a client side javascript library for displaying a github directory as a blog. 


## Getting started
Import the js and css files from
```html
    <link rel="https://cdn.jsdelivr.net/gh/Ctrl-Alt-Tec/altBlog@latest/v2/altBlog.css">
    <script src="https://cdn.jsdelivr.net/gh/Ctrl-Alt-Tec/altBlog@latest/v2/altBlog.js">
```


In your `index.html` file, include the following in the body
```html
<nav id="navbar">
    <span name="nav_button">
        arrow_back
    </span>
    <img src="logo.png" alt="" id="logo" name="nav_home">
    <ul name="nav_sections">
        <li>Categoría 1</li>
        <li>Categoría 2</li>
        <li>Categoría </li>
    </ul>
    <input type="search" placeholder="Buscar...">
    <span name="new_article">
        edit
    </span>

</nav>
<template id="template_card">
    <h1 name="title">Title</h1>
    <span name="description">Lorem ipsum</span>
</template>
<template id="template_post">
    <header>
        <h1 name="title">Title</h1>
        <h2 name="description">Description</h2>
        <span name="author">@edvilme</span>
    </header>
    <main name="content">
    </main>
</template>
```

# Setup

In a script tag in your file instantiate the blog
```js
    let altBlog = new Blog({
        //options
    })
```

The constructor receives an `options` object with the following fields

| Key | Description |
| -- | -- |
| container | _(optional)_ <br> DOM element in which to render the blog. <br> **Default is #container** |
| repoOwner | _(required)_ <br> Username of the owner of repo in which files are stored |
| repoName | _(required)_ <br> Name of repository |
| repoDir | _(required)_ <br> 

# Directory

All the files in _repoDir_ must have extension `.md` and file names will be used as id.

The following header is required on all files:

```
---
name: Post Title
author: @author
category: AA
description: Post contents description
---
```

# Contribution

This project is Open Source. Feel free to make pull requests to add features or fix bugs. Likewise you can let us know any issues in the issue tab of this repo.

altBlog is 
<p style="text-align: center"> Made with 💙 by <a href="ctrl-alt-tec.hackclub.com">Ctrl Alt Tec</a> </p>