import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Button,
} from "@mui/material";
import React, { MouseEvent } from "react";
import { ChildrenProps } from "src/shared/interface/props";
import { css } from "@emotion/react";

const Favorite = ({ children }: ChildrenProps) => {
  return <div>{children}</div>;
};

const Title = ({ children }: ChildrenProps) => {
  return <h1 data-testid="favorite-count">상품 {children}</h1>;
};

const TableContainer = ({ children }: ChildrenProps) => {
  return <Table>{children}</Table>;
};

const TableHeadContainer = ({ children }: ChildrenProps) => {
  return (
    <TableHead>
      <TableRow>{children}</TableRow>
    </TableHead>
  );
};

const TableCellItem = ({ children }: ChildrenProps) => {
  return <TableCell>{children}</TableCell>;
};

const TableBodyContainer = ({ children }: ChildrenProps) => {
  return <TableBody>{children}</TableBody>;
};

const TableRowContainer = ({ children }: ChildrenProps) => {
  return <TableRow data-testid="favorite-row">{children}</TableRow>;
};

interface removeProps extends ChildrenProps {
  onClick: () => void;
}

const TableButton = ({ children, onClick }: removeProps) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      color="secondary"
      size="large"
      css={css`
        margin-top: 30px;
      `}
      data-testid="delete-selected-item-btn"
    >
      {children}
    </Button>
  );
};
Favorite.Title = Title;
Favorite.Table = TableContainer;
Favorite.TableHead = TableHeadContainer;
Favorite.TableCell = TableCellItem;
Favorite.TableBody = TableBodyContainer;
Favorite.TableRow = TableRowContainer;
Favorite.Button = TableButton;
export default Favorite;
