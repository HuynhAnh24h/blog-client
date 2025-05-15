const navItems = [
    {
        name: "Home",
        link:"/",
        type: "link"
    },
    {
        name: "Articles",
        link:"/articles",
        type: "link"
    },
    {
        name: "Pages",
        link:"/pages",
        type: "dropdown",
        dropItem: [
            {
                subName: "Contact",
                link: "/contact"
            },
            {
                subName: "Product",
                link:"/product"
            },
            {
                subName: "Category",
                link:"/category"
            }
        ]
    },
    {
        name: "Pricing",
        link:"/pricing",
        type: "link"
    },
    {
        name: "Faq",
        link:"/faq",
        type: "link"

    },
]

export default navItems