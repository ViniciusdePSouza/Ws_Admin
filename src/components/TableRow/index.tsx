import { api } from "../../services/api";
import {
  ButtonsDiv,
  Container,
  DeleteButton,
  EditButton,
  TableColumn,
  TableColumnMiddle,
} from "./styles";

interface TableRowProps {
  name: string;
  price: number;
  id: number;
}

export function TableRow({ name, price, id }: TableRowProps) {
  async function handleDeleteProduct(id: number) {
    try {
      await api.delete(`/products/${id}`);
      alert("produto deletado, recarregue a página");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <TableColumn>
        <span>{name}</span>
      </TableColumn>
      <TableColumnMiddle>
        <span>${price}</span>
      </TableColumnMiddle>
      <TableColumn>
        <ButtonsDiv>
          <EditButton>EDIT</EditButton>
          <DeleteButton onClick={() => handleDeleteProduct(id)}>X</DeleteButton>
        </ButtonsDiv>
      </TableColumn>
    </Container>
  );
}
