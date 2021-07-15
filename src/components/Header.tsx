import { GenreResponseProps } from "../App";

interface HeaderProps {
  selectedGenre: GenreResponseProps;
}

export function Header(props: HeaderProps) {  
  return (
    <header>
      <span className="category">Categoria:<span> {props.selectedGenre.title}</span></span>  
    </header>
  )
}