import "../styles/tailwind.css";
import "../styles/solarized_theme.css";
import Container from "@/layouts/Container";
import Header from "@/components/Header";
export default function StarterBlog({ Component, pageProps }) {
  return (
    <div>
      <Container>
        <Header></Header>
      </Container>
      <Container>
        <main>
          <Component {...pageProps} />
        </main>
      </Container>
    </div>
  );
}
