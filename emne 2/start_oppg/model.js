const model = {
    // Del 1
    app: {
        currentPage: "landingPage",
    },

    // Del 2
    inputs: {
        loginPage: {
            username: "",
            password: "",
        },
        forgotPasswordPage: {
            email: "",
        },
        registerPage: {
            username: "",
            password: "",
            confirmPassword: "",
            email: "",
            about: "",
            profileImage: null,
            favoriteGenres: [],
        },
        profilePage: {
            userId: 1,
        },
        editProfilePage: {
            userId: 1,
            username: "Kaia",
            currentPassword: null,
            newPassword: null,
            confirmPassword: null,
            email: "kaia@example.com",
            about: "",
            profileImage: "admin.png",
            favoriteGenres: [],
        },
        landingPage: {
            userId: 1,
            searchField: null,
            filter: {
                genres: [],
                releaseDate: {
                    from: null,
                    to: null,
                },
                country: null,
            },
        },
        moviesPage: {
            movieId: 1,
            userId: 1,
            newComment: null,
        },
        ratingPage: {
            movieId: 1,
            userId: 1,
            rating: 1,
        }
    },

    // Del 3
    users: [
        {
            id: 1,
            username: "Kaia",
            email: "kaia@example.com",
            about: "",
            profileImage: "admin.png",
            favoriteMovies: [1],
            favoriteGenres: [],
            comments: [1],
            ratedMovies: [
                {
                    movieId: 1,
                    userRating: 500,
                }
            ],
        }
    ],
    movies: [
        {
            id: 1,
            title: "Interstellar",
            description: "Some description of the movie",
            director: "Christopher Nolan",
            starring: [""],
            releaseDate: "2014-10-26",
            genre: "Science Fiction",
            rating: 8.6,
            nrOfRatings: 4,
            poster: "interstellar.jpg",
            comments: [1],
        }
    ],
    comments: [
        {
            id: 1,
            userId: 1,
            content: "This movie is awesome",
            createdAt: "2024-09-30",
            replies: [
                {
                    userId: 2,
                    content: "I agree!",
                    createdAt: "2024-09-30",
                    replies: [],
                }
            ],
        }
    ]
};  

const genres = [
    "scienceFiction",
    "action",
    "adventure",
    "drama",
    "romance",
    "horror",
    "comedy",
    "animation",
    "documentary",
];