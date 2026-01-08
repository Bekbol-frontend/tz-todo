import { UserTodos } from "@/entities/UserTodos";
import { Container } from "@/shared/ui/Container";
import { Section } from "@/shared/ui/Section";

function HomePage() {
  return (
    <Section>
      <Container>
        <UserTodos />
      </Container>
    </Section>
  );
}

export default HomePage;
