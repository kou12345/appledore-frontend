import { GridCol, Input, Title } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import Link from "next/link";

export const Header = () => {
  return (
    <>
      <GridCol span={1}></GridCol>
      <GridCol span={3}>
        <Title order={2} m={10}>
          <Link href="/">Appledore</Link>
        </Title>
      </GridCol>
      <GridCol span={4}>
        <Input placeholder="Search" leftSection={<IconSearch size={16} />} m={14} />
      </GridCol>
      <GridCol span={4}></GridCol>
    </>
  );
};
