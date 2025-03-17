const ThisApi = "https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books";

const BookShelf = document.querySelector('.listBooks');
console.log("BookShelf:", BookShelf);

interface books {
    title: string,
    author: string,
    pages: number,
    plot: string,
}

async function fetchData(ThisApi: string): Promise<any> {
try {
    const response = await fetch(ThisApi);
    if (!response.ok) {
        throw new Error ("Hoppsan! Något gick visst fel!");
    }
    const data: books[] = await response.json();
    console.log(data);

    for (let i = 0; i < data.length; i++) {
        const Abook = document.createElement('ul');
        Abook.textContent = data[i].title;

        const bookINFO = document.createElement('div');
        bookINFO.className ='information';
        bookINFO.textContent = `Author: ${data[i].author}` + `, ` + `Pages: ${data[i].pages}` + `, ` + `Plot: ${data[i].plot}`;

        Abook.appendChild(bookINFO);
        BookShelf?.appendChild(Abook);

        Abook.addEventListener('click', function() {
            bookINFO.style.display = 'flex'});
    }
} catch (error){
    console.error('Fel vid hämtning av data!', error)
    }

}
fetchData(ThisApi);