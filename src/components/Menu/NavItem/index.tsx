import { Link, useTheme } from "@chakra-ui/react";
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface NavItemProps {
  name?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon?: ReactNode;
  path: string;
}

export default function NavItem({ name, path, icon, ...rest }: NavItemProps) {
  const theme = useTheme();
  const activeColor = theme.colors.orange["500"];

  return (
    <Link
      as={NavLink}
      to={path}
      style={({ isActive }) => {
        return {
          color: isActive ? activeColor : "",
        };
      }}
      fontSize="0.8125rem"
      fontWeight="semibold"
      letterSpacing={-0.39}
      px={7}
      color="black"
      _hover={{
        textDecoration: "none",
        color: activeColor,
      }}
      sx={{
        svg: {
          mr: "0.875rem",
          mb: "0.25rem",
          boxSize: 5,
        },
      }}
      {...rest}
    >
      {icon}
      {name}
    </Link>
  );
}
