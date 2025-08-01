const contacts = [
    {
        id: 1,
        name: "Ana López",
        profilePic: "/Images/ana-lopez.jpg",
        messages: [
            {
                id: 101,
                user: "Ana López",
                time: "10:30",
                text: "Hola, ¿cómo estás?",
                status: "read",
            },
            {
                id: 102,
                user: "Yo",
                time: "10:32",
                text: "¡Bien, gracias! ¿Y tú?",
                status: "read",
            },
            {
                id: 103,
                user: "Ana López",
                time: "10:35",
                text: "Todo bien por aquí. ¿Quedamos más tarde?",
                status: "read",
            },
        ],
    },
    {
        id: 2,
        name: "Carlos Ruiz",
        profilePic: "/Images/carlos-ruiz.jpg",
        messages: [
            {
                id: 201,
                user: "Carlos Ruiz",
                time: "09:15",
                text: "¿Viste el partido ayer?",
                status: "read",
            },
            {
                id: 202,
                user: "Yo",
                time: "09:20",
                text: "Sí, increíble el gol en el minuto 89",
                status: "read",
            },
        ],
    },
    {
        id: 3,
        name: "María Gómez",
        profilePic: "/Images/maria-gomez.jpg",
        messages: [
            {
                id: 301,
                user: "María Gómez",
                time: "16:45",
                text: "Te envié el documento que me pediste",
                status: "read",
            },
            {
                id: 302,
                user: "Yo",
                time: "16:50",
                text: "Perfecto, ya lo reviso. ¡Gracias!",
                status: "read",
            },
        ],
    },
    {
        id: 4,
        name: "David Torres",
        profilePic: "/Images/david-torres.jpg",
        messages: [
            {
                id: 401,
                user: "David Torres",
                time: "11:00",
                text: "¿Quedamos el viernes para el proyecto?",
                status: "read",
            },
        ],
    },
    {
        id: 5,
        name: "Sofía Martín",
        profilePic: "/Images/sofia-martin.jpg",
        messages: [
            {
                id: 501,
                user: "Sofía Martín",
                time: "15:30",
                text: "¿Me pasas el enlace de la reunión?",
                status: "read",
            },
            {
                id: 502,
                user: "Yo",
                time: "15:32",
                text: "Claro, es meet.google.com/abc-xyz",
                status: "read",
            },
            {
                id: 503,
                user: "Sofía Martín",
                time: "15:35",
                text: "Gracias 😊",
                status: "read",
            },
        ],
    },
];

export const getContacts = () => {
    return contacts;
};

export const getContactsById = (contacts_id) => {
    for (const contact of contacts) {
        if (Number(contact.id) === Number(contacts_id)) {
            return contact;
        }
    }
    return null;
};
