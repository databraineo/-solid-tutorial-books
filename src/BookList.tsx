import { For } from 'solid-js';
import { Book } from './App';

interface BookListProps {
  books: Book[];
}

export function BookList(props: BookListProps) {
  const totalBooks = () => props.books.length;
  return (
    <>
      <h2>My books ({totalBooks()})</h2>
      <ul style="text-align:left;">
        <For each={props.books}>
          {(book) => {
            return (
              <li>
                {book.title} ({book.author})
              </li>
            );
          }}
        </For>
      </ul>
    </>
  );
}
