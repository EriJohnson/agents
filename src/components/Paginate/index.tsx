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
          listStyle: "none",
          padding: 0,
          margin: 0,
          li: {
            padding: "0.5rem 0",
            cursor: "pointer",
            border: "1px solid #D0D5DD",
            color: "blue.600",
            fontSize: "sm",

            "&:hover": {
              backgroundColor: "blue.100",
            },

            "&.previous": {
              borderLeftRadius: "0.5rem",
            },

            "&.next": {
              borderRightRadius: "0.5rem",
            },

            "&.selected": {
              backgroundColor: "blue.500",
              color: "white",
            },

            a: {
              padding: "0.5rem 1.25rem",
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
