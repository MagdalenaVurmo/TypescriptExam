"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const ThisApi = "https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books";
const BookShelf = document.querySelector('.listBooks');
console.log("BookShelf:", BookShelf);
function fetchData(ThisApi) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(ThisApi);
            if (!response.ok) {
                throw new Error("Hoppsan! Något gick visst fel!");
            }
            const data = yield response.json();
            console.log(data);
            for (let i = 0; i < data.length; i++) {
                const Abook = document.createElement('li');
                Abook.textContent = data[i].title;
                const bookINFO = document.createElement('div');
                bookINFO.className = 'information';
                bookINFO.textContent = `Author:${data[i].author}` + `,` + `Plot: ${data[i].plot}`;
                bookINFO.style.display = 'none';
                Abook.appendChild(bookINFO);
                BookShelf === null || BookShelf === void 0 ? void 0 : BookShelf.appendChild(Abook);
                Abook.addEventListener('click', function () {
                    bookINFO.style.display = bookINFO.style.display === 'none' ? 'flex' : 'none';
                });
            }
        }
        catch (error) {
            console.error('Fel vid hämtning av data!', error);
        }
    });
}
fetchData(ThisApi);
// const Base_Url = "https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books";
// const ulElement = document.querySelector('.book-list');
// interface book{
//   title: string,
//   author: string,
//   pages: number,
//   plot: string
// }
// async function fetchData(Base_Url: string): Promise<any> {
//     try {
//         const response = await fetch(Base_Url);
//         if (!response.ok) {
//             throw new Error("Något gick fel!");
//         }
//         const data: book[] = await response.json();
//         console.log(data);
//         for (let i = 0; i < data.length; i++) {
//             const liElement = document.createElement('li');
//             liElement.textContent = data[i].title;
//             const infoElement = document.createElement('div');
//             infoElement.className = 'book-info';
//             infoElement.textContent = Author: ${data[i].author} + ,  + Pages: ${data[i].pages} + ,  + Plot: ${data[i].plot};
//             liElement.appendChild(infoElement);
//             ulElement.appendChild(liElement);
//             liElement.addEventListener('click', function() {
//                 infoElement.style.display = 'flex'})
//       }
//     }catch (error){
//       console.error('error!', error)
//     }
//   }
// fetchData(Base_Url) 
