export default{
    state: {
        books:[
            {
                id: 'ddfdsfsdf',
                title: 'Harry Potter - 1 ',
                description: 'Первая часть',
                imageId:'dfafhkdshfj',
                parts:7,
                level:['B2','C1'],
                rating:4,
                ratingCount:100,
                youtube_playlist_id:'dsnakjfdskjnfd'
            },
            {
                id: 'ddfdsfsdf',
                title: 'Harry Potter - 2 ',
                description: 'Вторая часть',
                imageId:'dfafhkdshfj',
                parts:7,
                level:['B2','B3'],
                rating:3.5,
                ratingCount:55,
                youtube_playlist_id:'dsnakjfdskjnfd'
            },
            {
                id: 'ddfdsfsdf',
                title: 'Harry Potter - 3 ',
                description: 'Третья часть',
                imageId:'dfafhkdshfj',
                parts:7,
                level:['A2'],
                rating:2.5,
                ratingCount:70,
                youtube_playlist_id:'dsnakjfdskjnfd'
            }
        ]
    },
    mutations: {
        SET_BOOKS(state,payload){
            state.processing = payload
        },
    },
    getters: {
        getBooks:(state)=>state.books,
        
    }
  }