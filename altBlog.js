let __Blog;


document.write(`
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.1/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.1/highlight.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css" integrity="sha384-zB1R0rpPzHqg7Kpt0Aljp8JPLqbXI3bhnPWROx27a9N0Ll6ZP/+DiW/UqRcLbRjq" crossorigin="anonymous">
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.js" integrity="sha384-y23I5Q6l+B6vatafAwxRu/0oK/79VlbSz7Q9aiSZUvyWYIYsd+qj+o24G5ZU2zJz" crossorigin="anonymous"></script>
<script src="https://unpkg.com/showdown/dist/showdown.min.js"></script>
`)


const defaultEditorContent = `

# ¿Cómo escribir en este Blog?

Todos los artículos de este blog están almacenados en formato **Markdown**.

A continuación hay una guía que puedes usar para escribir.

---

# Formato básico

*Cursiva* o _Cursiva_

**Negritas**

~~Tachado~~

---

# Encabezado 1

## Encabezado 2

## Encabezado 3

### Encabezado 4

#### Encabezado 5

##### Encabezado 6

###### Encabezado 7

---

# Tablas

| Columna 1 | Columna 2 | Columna 3 |
| --------- | --------- | --------- |
| Contenido | Contenido | Contenido | 

---

# Listas

## Listas numeradas

1. Elemento 1
2. Elemento 3
3. Elemento 3

## Listas no numeradas

- Elemento 1
- Elemento 2
- Elemento 3

## Listas anidadas

1. Elemento
2. Elemento
    - Sub-elemento 1
    - Sub-elemento 2
        - Sub-sub-elemento 1
        - Sub-sub-elemento 2


---

# Matemáticas

Este editor también es compatible con
\`\`\` latex
\\LaTeX
\`\`\`

\`\`\`latex

\\nabla \\vec{F}(x_0, y_0, ...) = \\partial_x(x_0, y_0,...)\\hat{i}+\\partial_y(x_0, y_0,...)\\hat{j}+...

\`\`\`

> Importante, para añadir saltos de línea debe utilizarse el comando \`\\\` de LaTeX
`

class Blog{
    constructor(options){
        __Blog = this;
        this.posts = []
        this.activePost = undefined;
        this.container = document.createElement("div");
        this.container.id = "container"

        this.post_container = document.createElement("div");
        this.post_container.id = "post"

        this.editor_container = document.createElement("div");
        this.editor_container.id = "editor"

        this.getPosts(`https://api.github.com/repos/${options.repoOwner}/${options.repoName}/contents/${options.repoDir}`).then(posts=>{
            this.posts = posts;
            console.log(this.posts)
            this.renderPosts();
            let postQuery = new URLSearchParams(location.search).get("post")
            if(postQuery != undefined && postQuery != 'new'){
                this.openPost(postQuery+'.md');
            } else if (postQuery != undefined && postQuery == 'new'){
                this.openEditor()
            }
        });

        document.querySelector('#navbar span[name="new_article"]').addEventListener('click', ()=>{
            this.openEditor();
        })

    }
    async getPosts(src){
        let posts = await fetch(src)
        let posts_json = await posts.json();
        return Promise.all(posts_json.map(async post => {
            let converter = new showdown.Converter({
                ghCompatibleHeaderId: true,
                strikethrough: true, 
                tables: true,
                metadata: true
            })


            let content = await fetch(post.download_url);
            let content_text = await content.text();
            let content_html = converter.makeHtml(content_text)
            return {
                content: content_html,
                name: post.name,
                metadata: converter.getMetadata()
            };
        }))
    }

    renderPosts(fn = ()=>(true) , label=undefined){
        this.closePost()
        this.container.innerHTML=``
        if(label!=undefined){
            let title = document.createElement('h1');
            title.className = 'filter_title';
            title.innerHTML = label;
            this.container.append(title)
        }
        
        this.posts.filter(fn).forEach(post=>{
            let card = new Card(post)
            this.container.append(card)
        })
    }

    openPost(name){
        this.closePost();

        this.container.style.display='none';

        let post = this.posts.find(i=>i.name==name);
        this.post_container = document.createElement("div");
        this.post_container.id = "post"
        document.body.append(this.post_container)

        document.querySelector('#navbar [name="nav_button"]').style.display = 'block';
        document.querySelector('#navbar [name="nav_button"]').onclick = ()=>{this.closePost()}


        let template = document.querySelector("#template_post").content.cloneNode(true);
        this.post_container.style.display = 'flex';

        this.post_container.innerHTML=""

        this.post_container.append(template)
        this.post_container.querySelector("header h1").innerHTML = post.metadata.name;
        this.post_container.querySelector("[name='author']").innerHTML = post.metadata.author;
        this.post_container.querySelector("header h2").innerHTML = post.metadata.description;

        this.post_container.querySelector('main').innerHTML = post.content

        this.post_container.querySelectorAll('pre code').forEach(block=>{
            if(block.classList.contains('latex'.toLowerCase())){
                katex.render( block.innerHTML, block );
                block.parentNode.classList.add('latex')
            } else {
                hljs.highlightBlock(block)
            }
        })
    }

    closePost(){
        document.querySelector('#navbar [name="new_article"]').style.display = 'initial';
        document.querySelector('#navbar [name="nav_button"]').style.display = 'none';
        document.querySelector('#navbar [name="nav_button"]').onclick = ()=>{};
        this.post_container.remove();
        this.editor_container.remove();
        this.container.style.display='flex';

    }

    openEditor(){
        this.closePost();
        document.querySelector('#navbar span[name="new_article"]').style.display='none';
        this.container.style.display='none';

        this.editor_container = document.createElement("div");
        this.editor_container.id = "editor"
        document.body.append(this.editor_container)

        document.querySelector('#navbar [name="nav_button"]').style.display = 'block';
        document.querySelector('#navbar [name="nav_button"]').onclick = ()=>{
            if(confirm("Changes won't be saved. Leave?")){
                this.closePost()
            }
        }
        let code = document.createElement('textarea');
        code.className = 'editor-code';
        code.innerHTML = defaultEditorContent
        let preview = document.createElement('div');
        preview.className = 'editor-preview';
        this.editor_container.append(code, preview);
        let converter = new showdown.Converter({
            ghCompatibleHeaderId: true,
            strikethrough: true, 
            tables: true,
            metadata: true
        })
        function getHTML(){
            preview.innerHTML = converter.makeHtml(code.value);
            preview.querySelectorAll('pre code').forEach(block=>{
                console.log("log")
                if(block.classList.contains('latex'.toLowerCase())){
                    try{katex.render( block.innerHTML, block )}catch(e){}
                    block.parentNode.classList.add('latex')
                } else {
                    hljs.highlightBlock(block)
                }
            })
        }
        getHTML()
        code.addEventListener('input', getHTML)

    }
}



class Card{
    constructor(post){
        let content = post.content
        let metadata = post.metadata
        let template = document.querySelector("#template_card").content.cloneNode(true);
        this.dom = document.createElement('div');
        this.dom.className = 'card'
        this.dom.append(template)
        this.dom.querySelector('[name="title"]').innerHTML = metadata.name
        this.dom.querySelector('[name="description"]').innerHTML = metadata.description
        this.dom.addEventListener('click', ()=>{ __Blog.openPost(post.name) })
        return this.dom
    }
}