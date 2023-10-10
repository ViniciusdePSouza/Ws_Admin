import { ButtonsDiv, Container, DeleteButton, EditButton, TableColumn, TableColumnMiddle } from "./styles";

interface TableRowProps {
  name: string;
  price: number;
}

export function TableRow({ name, price }: TableRowProps) {
  return (
    <Container>
      <TableColumn><span>{name}</span></TableColumn>
      <TableColumnMiddle><span>${price}</span></TableColumnMiddle>
      <TableColumn>
        <ButtonsDiv>
        <EditButton>EDIT</EditButton> <DeleteButton>XXX</DeleteButton>
        </ButtonsDiv>

      </TableColumn>
    </Container>
  );
}
