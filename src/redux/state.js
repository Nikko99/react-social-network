let state = {
   profilePage: {
      publicationsData: [
         { id: 1, publicationText: 'It/s me', likesCount: 0 },
         { id: 2, publicationText: 'Hello World', likesCount: 13 },
         { id: 3, publicationText: 'test', likesCount: 1231231231 },
         { id: 4, publicationText: 'privet', likesCount: 1 }
      ]
   },
   dialogsPage: {
      dialogsData: [
         { id: 1, name: 'Akhmed' },
         { id: 2, name: 'Said' },
         { id: 3, name: 'Umalat' },
         { id: 4, name: 'Ramz' }
      ],
      messagesData: [
         { id: 1, messageText: 'Hello' },
         { id: 2, messageText: 'Its me' },
         { id: 3, messageText: 'isadakdlasdnfajf' },
         { id: 4, messageText: '1234' }
      ]
   }
}

export let addPublication = (publicationText) => {
   let newPublication = {
      id: 5,
      publicationText: publicationText,
      likesCount: 0
   }
   state.profilePage.publicationsData.push(newPublication)
}

export default state;
