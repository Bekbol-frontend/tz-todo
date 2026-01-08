import { UserCreateForm } from "@/entities/UserCreateForm";
import { Container } from "@/shared/ui/Container";
import { Section } from "@/shared/ui/Section";
import { Typography } from "antd";

const { Title } = Typography;

function CreateUserPage() {
  return (
    <Section>
      <Container>
        <Title level={2}>Create User</Title>

        <UserCreateForm />
      </Container>
    </Section>
  );
}

export default CreateUserPage;
