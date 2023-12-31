import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import {
  ButtonsDiv,
  Container,
  DeleteButton,
  EditButton,
  TableColumn,
  TableColumnMiddle,
} from "./styles";
import { Trash } from "@phosphor-icons/react";
import { defaultTheme } from "../../styles/theme/default";

interface TableRowProps {
  name: string;
  price: string;
  id: number;
}

export function TableRow({ name, price, id }: TableRowProps) {
  const navigate = useNavigate()

  async function handleDeleteProduct(id: number) {
    try {
      await api.delete(`/products/${id}`);
      alert("produto deletado, recarregue a página");
      location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleGoToEditProductPage(id: number) {
    navigate(`/edit/${id}`)
  }

  return (
    <Container>
      <TableColumn>
        <span>{name}</span>
      </TableColumn>
      <TableColumnMiddle>
      <span>{`$${Number(price).toFixed(2)}`}</span>
      </TableColumnMiddle>
      <TableColumn>
        <ButtonsDiv>
          <EditButton onClick={() => handleGoToEditProductPage(id)}>EDIT</EditButton>
          <DeleteButton onClick={() => handleDeleteProduct(id)}><Trash size={32} color={defaultTheme.COLORS.WHITE_100}/></DeleteButton>
        </ButtonsDiv>
      </TableColumn>
    </Container>
  );
}
