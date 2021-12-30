import {useState, useEffect} from "react";
import Book from "../../components/Book";
import { api } from "../../services/api";

import {Container, Content} from "./style";

export default function Home() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        api.get(`?q=time&printType=books&orderBy=newest`)
        .then(response => {
            setBooks(response.data.items)
            console.log(response.data.items)
        })
    }, []);

    return (
        <Container>
            <Content>
                {books.map((book: any) => (
                    <Book
                        key={book.id}
                        imageBook={book.volumeInfo.imageLinks.thumbnail}
                        title={book.volumeInfo.title}
                        authors={book.volumeInfo.authors}
                        description={book.volumeInfo.description}
                        pageCount={book.volumeInfo.pageCount}
                    />
                ))}
            </Content>
        </Container>
    );
}