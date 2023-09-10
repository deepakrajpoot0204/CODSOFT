// Sample blog post data (you can replace this with your own data)
const blogPosts = [
    {
        title: "First Blog Post",
        content: "This is the content of the first blog post.",
    },
    {
        title: "Second Blog Post",
        content: "This is the content of the second blog post.",
    },
    {
        title: "Third Blog Post",
        content: "This is the content of the third blog post.",
    },
];

// Function to display blog posts
function displayBlogPosts() {
    const contentElement = document.getElementById("content");
    contentElement.innerHTML = "";

    for (const post of blogPosts) {
        const postElement = document.createElement("div");
        postElement.classList.add("post");

        const titleElement = document.createElement("h2");
        titleElement.textContent = post.title;

        const contentElement = document.createElement("p");
        contentElement.textContent = post.content;

        postElement.appendChild(titleElement);
        postElement.appendChild(contentElement);

        contentElement.appendChild(postElement);
    }
}

// Event listeners for navigation links
document.getElementById("home").addEventListener("click", displayBlogPosts);
document.getElementById("about").addEventListener("click", () => {
    // Replace with logic to display About page
    alert("About page coming soon!");
});
document.getElementById("contact").addEventListener("click", () => {
    // Replace with logic to display Contact page
    alert("Contact page coming soon!");
});

// Display initial blog posts
displayBlogPosts();
