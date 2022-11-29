interface FooterProps {
  text: string;
}

export function Footer({ text }: FooterProps) {
  return (
    <footer>
      <p>{text}</p>
    </footer>
  )
}