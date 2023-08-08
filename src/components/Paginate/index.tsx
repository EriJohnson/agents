import { Flex, Text } from "@chakra-ui/react";
import ReactPaginate, { ReactPaginateProps } from "react-paginate";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/icons";

export default function Paginate({ ...props }: ReactPaginateProps) {
  return (
    <Flex
      justify="center"
      sx={{
        ".pagination": {
          display: "flex",
          alignItems: "center",
          listStyle: "none",

          li: {
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            border: "1px solid #D0D5DD",
            color: "blue.600",
            fontSize: "sm",
            boxSize: "40px",
            position: "relative",

            "&:hover": {
              backgroundColor: "blue.50",
            },

            "&.previous": {
              borderLeftRadius: "0.5rem",
              width: "118px",
              height: "40px",
            },

            "&.next": {
              borderRightRadius: "0.5rem",
              width: "118px",
              height: "40px",
            },

            "&.selected": {
              backgroundColor: "blue.500",
              color: "white",
            },

            a: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
              padding: "0.5rem",
            },
          },
        },
      }}
    >
      <ReactPaginate
        className="pagination"
        previousLabel={
          <Text as="span" color="blue.600">
            <ArrowLeftIcon color="blue.200" boxSize={5} mr={2} />
            Anterior
          </Text>
        }
        nextLabel={
          <Text as="span" color="blue.600">
            Próximo
            <ArrowRightIcon color="blue.200" boxSize={5} ml={2} />
          </Text>
        }
        breakLabel="..."
        pageRangeDisplayed={5}
        renderOnZeroPageCount={null}
        disableInitialCallback
        {...props}
      />
    </Flex>
  );
}
