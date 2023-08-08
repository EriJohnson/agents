import { SearchIcon } from "@/components/icons";
import {
  Flex,
  FlexProps,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PATHS_WITH_SEARCH = ["/home"];

export default function HeaderMenu({ ...rest }: FlexProps) {
  const [search, setSearch] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = useMemo(
    () => new URLSearchParams(location.search),
    [location.search]
  );

  const updateSearchParams = useCallback(() => {
    if (search === "") {
      searchParams.delete("search");
    } else {
      searchParams.set("search", search);
    }

    navigate({ search: searchParams.toString() });
  }, [navigate, search, searchParams]);

  useEffect(() => {
    const timer = setTimeout(updateSearchParams, 500);
    return () => clearTimeout(timer);
  }, [updateSearchParams]);

  function handleSearchChange(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  const isSearchVisible = PATHS_WITH_SEARCH.some((path) =>
    location.pathname.includes(path)
  );

  return (
    <Flex
      as="header"
      h="5rem"
      borderColor="divider"
      borderBottomWidth="1px"
      bg="white"
      {...rest}
    >
      <Flex align="center" px={8} flex={1}>
        {isSearchVisible && (
          <InputGroup color="blue.200">
            <InputLeftElement pointerEvents="none">
              <SearchIcon />
            </InputLeftElement>
            <Input
              value={search}
              onChange={handleSearchChange}
              variant="flushed"
              _placeholder={{
                color: "blue.200",
                fontWeight: "medium",
                fontSize: "xs",
                letterSpacing: -0.36,
              }}
              type="tel"
              placeholder="Busque por um agente"
              fontSize="xs"
              border="none"
              pl="2.5rem"
            />
          </InputGroup>
        )}
      </Flex>
    </Flex>
  );
}
