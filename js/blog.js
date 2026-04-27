document.addEventListener("DOMContentLoaded", function () {
    const blogLeft = document.querySelector(".blog-left");
    const tocList = document.querySelector(".toc-list");

    if (blogLeft && tocList) {
        const headings = blogLeft.querySelectorAll("h2");
        const usedIds = {};

        // Clear existing TOC items if any
        tocList.innerHTML = "";

        headings.forEach((heading) => {
            // Get text and create a slug
            let text = heading.textContent.trim();
            let id = text
                .toLowerCase()
                .replace(/[^\w\s-]/g, "") // Remove non-word characters
                .replace(/\s+/g, "-") // Replace spaces with hyphens
                .replace(/-+/g, "-"); // Replace multiple hyphens with single hyphen

            // Handle duplicate IDs
            if (usedIds[id]) {
                usedIds[id]++;
                id = `${id}-${usedIds[id]}`;
            } else {
                usedIds[id] = 1;
            }

            // Assign ID to the heading tag
            heading.id = id;

            // Create TOC list item
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.href = `#${id}`;
            a.textContent = text;
            
            // Optional: Smooth scroll behavior handled by CSS but JS click can reinforce it
            a.addEventListener("click", (e) => {
                e.preventDefault();
                const target = document.getElementById(id);
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 140, // Adjust for sticky header
                        behavior: "smooth"
                    });
                    // Update URL without jump
                    history.pushState(null, null, `#${id}`);
                }
            });

            li.appendChild(a);
            tocList.appendChild(li);
        });
    }
});
