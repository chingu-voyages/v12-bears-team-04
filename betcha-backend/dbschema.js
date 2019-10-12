let db = {
    users: [
        {
            userName: 'user',
            firstName: 'firstname',
            lastName: 'lastname',
            email: 'user@hotmail.com',
            createdAt: '2019-10-06T00:07:23.629Z',
            imageUrl: 'no-img.png',
            bio: 'I want to challenge myself',
            website: 'https://user.com',
            location: 'Dublin, Ireland',
            likeCount: 5, //upvote
            commentCount: 3 
        }
    ],
    dataSet: [
        {
            userName: 'user',
            firstName: 'firstname',
            lastName: 'lastname',
            email: 'email',
            createdAt: '2019-10-06T00:07:23.629Z',
            imageUrl: 'no-img.png',
            bio: 'I want to challenge myself',
            website: 'https://user.com',
            likeCount: 5, //upvote
            commentCount: 3 
        }
    ]
};

const userDetails = {
    //redux data
    credentials: {
                userId: '',
                userName: 'user',
                email: 'user@hotmail.com',
                createdAt: '2019-10-06T00:07:23.629Z',
                imageUrl: 'no-img.png',
                bio: 'I want to challenge myself',
                website: 'https://user.com',
                location: 'Dublin, Ireland'
            },
    likes: [
            {
                userName: 'user',
                dataSetId: ''
            },
            {
                userName: 'user',
                dataSetId: ''
            },
        ]
}