let books = ['La Biblia','Manifiesto Comunista','Shrek']
removeTopBook = false
exit = false

const addBook = (addedBook) => 
    {
        books.push(addedBook)
    }
const removeBook = () =>
    {
        books.pop()
    }

console.log("Hola Mundo")

while(exit == false)
    {
        let userAction = prompt(`Book List: ${books}
        Actions: 1)Add book  2)Remove top book  3)Exit
        Choose an Action Number: `).toLowerCase()

        switch(userAction)
        {
            case '1':
                let addedBook = prompt(`Book's New Name: `)
                addBook(addedBook)
                break

            case '2':
                if(books.length === 0)
                    {
                        alert('Nothing to remove: Book List is empty')
                        break
                    }
                else
                {
                    removeBook()
                    break
                }

            case '3':
                exit = true
                break

            default:
                alert('Action not found, try again.')
                break
        }
    }

alert('See you Motherfucker')