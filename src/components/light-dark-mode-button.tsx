"use client";

import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";
// TODO
export const LightDarkModeButton = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <ActionIcon
      variant="outline"
      color={dark ? "white" : "black"}
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
    >
      {dark ? (
        <IconSun style={{ width: 28, height: 28 }} />
      ) : (
        <IconMoon style={{ width: 28, height: 28 }} />
      )}
    </ActionIcon>
  );
};
