import { UserCreateForm } from "@/entities/UserCreateForm";
import { Container } from "@/shared/ui/Container";
import { Section } from "@/shared/ui/Section";
import { Typography } from "antd";
import { useParams } from "react-router-dom";

const { Title } = Typography;

function UpdateUserPage() {
  const { id } = useParams<{ id?: string }>();

  return (
    <Section>
      <Container>
        <Title level={2}>Update User</Title>

        <UserCreateForm id={id} />
      </Container>
    </Section>
  );
}

export default UpdateUserPage;
