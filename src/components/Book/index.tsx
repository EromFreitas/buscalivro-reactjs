import { Container } from "./styles";

export default function Book({ imageBook, title, authors, description, pageCount }: any) {
    return (
        <Container>
            <img src={imageBook} alt="Photo of book" />
            <div className="detail">
                <strong>{title}</strong>
                <p>{authors}</p>
                <p>{description}</p>
                <p>{pageCount}</p>
            </div>

        </Container>
    );
}