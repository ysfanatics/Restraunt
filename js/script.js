// Responsive Nav Hamburger for ALL pages
document.addEventListener('DOMContentLoaded', function() {
    // Handle menu toggle (for hamburger nav)
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('change', function() {
            if (this.checked) {
                navLinks.classList.add('active');
            } else {
                navLinks.classList.remove('active');
            }
        });

        // Auto close nav on link click (mobile)
        Array.from(navLinks.querySelectorAll('a')).forEach(link => {
            link.addEventListener('click', function() {
                menuToggle.checked = false;
                navLinks.classList.remove('active');
            });
        });
    }

    // ================ MENU PAGE (menu.html) ================
    if (window.location.pathname.endsWith('menu.html') || window.location.pathname == '/menu.html') {
        // Dishes Data (add images for beautiful cards)
        const menuData = {
            starters: [
                {
                    name: "Burrata Caprese",
                    desc: "Creamy burrata, heirloom tomatoes, basil, olive oil",
                    price: "$10",
                    img: "https://images.unsplash.com/photo-1519864600265-abb126d590e7?auto=format&fit=crop&w=400&q=80"
                },
                {
                    name: "Tempura Calamari",
                    desc: "Crispy calamari rings, spicy aioli dip",
                    price: "$12",
                    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80"
                },
                {
                    name: "Wild Mushroom Soup",
                    desc: "Creamy wild mushroom soup with chives and truffle oil",
                    price: "$8",
                    img: "https://images.unsplash.com/photo-1502741126161-b048400d104b?auto=format&fit=crop&w=400&q=80"
                }
            ],
            main: [
                {
                    name: "Grilled Salmon",
                    desc: "Fresh salmon fillet, lemon butter, roasted veggies",
                    price: "$20",
                    img: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?auto=format&fit=crop&w=400&q=80"
                },
                {
                    name: "Moroccan Lamb",
                    desc: "Spiced lamb shanks, couscous, harissa sauce",
                    price: "$22",
                    img: "https://images.unsplash.com/photo-1516685018646-5499d0a7c110?auto=format&fit=crop&w=400&q=80"
                },
                {
                    name: "Truffle Pasta",
                    desc: "Tagliatelle in creamy truffle sauce, parmesan",
                    price: "$18",
                    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80"
                }
            ],
            desserts: [
                {
                    name: "Tiramisu",
                    desc: "Homemade tiramisu, rich espresso, mascarpone",
                    price: "$8",
                    img: "https://images.unsplash.com/photo-1523987355523-c7b5b0723c6f?auto=format&fit=crop&w=400&q=80"
                },
                {
                    name: "Chocolate Lava Cake",
                    desc: "Molten chocolate cake, berry coulis, vanilla ice cream",
                    price: "$9",
                    img: "https://images.unsplash.com/photo-1502741126161-b048400d104b?auto=format&fit=crop&w=400&q=80"
                },
                {
                    name: "Pistachio Panna Cotta",
                    desc: "Silky panna cotta, pistachio, honey drizzle",
                    price: "$7",
                    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
                }
            ],
            drinks: [
                {
                    name: "Sangria",
                    desc: "Classic red sangria with citrus",
                    price: "$6",
                    img: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?auto=format&fit=crop&w=400&q=80"
                },
                {
                    name: "Espresso Martini",
                    desc: "Vodka, espresso, coffee liqueur, shaken",
                    price: "$8",
                    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
                },
                {
                    name: "House Lemonade",
                    desc: "Fresh lemons, mint, just a touch of sweetness",
                    price: "$4",
                    img: "https://images.unsplash.com/photo-1502741126161-b048400d104b?auto=format&fit=crop&w=400&q=80"
                }
            ]
        };
        const menuItemsDiv = document.getElementById('menu-items');
        function renderMenu(category) {
            const items = menuData[category];
            menuItemsDiv.innerHTML = items.map(item => `
                <div class="menu-card">
                    <img src="${item.img}" alt="${item.name}" />
                    <div class="menu-card-title-area">
                        <h3>${item.name}</h3>
                        <span class="menu-price">${item.price}</span>
                    </div>
                    <p>${item.desc}</p>
                </div>
            `).join('');
        }

        // Initial load: Starters
        renderMenu('starters');

        // Handle category buttons
        const catBtns = Array.from(document.querySelectorAll('.menu-cat-btn'));
        catBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                catBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderMenu(btn.getAttribute('data-category'));
            });
        });
    }

    // ================ CONTACT FORM (contact.html, basic UX only) ================
    if (window.location.pathname.endsWith('contact.html') || window.location.pathname == '/contact.html') {
        const form = document.getElementById('contact-form');
        const successMsg = document.querySelector('.form-success');
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                // Simulate form submission for demo (does not actually submit!)
                form.reset();
                if (successMsg) {
                    successMsg.style.display = 'block';
                    setTimeout(() => {
                        successMsg.style.display = 'none';
                    }, 3500);
                }
            });
        }
    }
});
