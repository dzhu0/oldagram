const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const container = document.getElementById("container")

render()

function render() {
    container.innerHTML = ""
    renderHeader()
    renderPosts()
}

function renderHeader() {
    container.innerHTML +=
    `
    <header>
        <img
            class="logo"
            src="images/logo.png"
            alt="Oldagram logo"
        >
        <img
            class="avatar"
            src="images/user-avatar.png"
            alt="User's avatar picture"
        >
    </header>
    `
}

function renderPosts() {
    for(let i = 0; i < posts.length; i++) {
        const post = posts[i]
        container.innerHTML +=
        `
        <section>
            <div class="post-header">
                <img
                    class="avatar"
                    src=${post.avatar}
                    alt="Poster's avatar picture"
                >
                <div>
                    <p class="name"><b>${post.name}</b></p>
                    <p class="location">${post.location}</p>
                </div>
            </div>
            <img
                class="post"
                src=${post.post}
                alt="Post image"
                ondblclick="increaseLikes(${i})"
            >
            <div class="post-footer">
                <button ondblclick="increaseLikes(${i})">
                    <img
                        class="icon"
                        src="images/icon-heart.png"
                        alt="Heart icon"
                    >
                </button>
                <button>
                    <img
                        class="icon"
                        src="images/icon-comment.png"
                        alt="Commment icon"
                    >
                </button>
                <button>
                    <img
                        class="icon"
                        src="images/icon-dm.png"
                        alt="DM icon"
                    >
                </button>
                <p class="likes"><b>${post.likes} likes</b></p>
                <p class="comment">
                    <b class="username">${post.username}</b> ${post.comment}
                </p>
            </div>
        </section>
        ${i < posts.length - 1 ? `<div class="separation"></div>` : ""}
        `
    }
}

function increaseLikes(index) {
    posts[index].likes++
    render()
}
