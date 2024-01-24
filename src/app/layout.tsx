// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import { Header } from "@/components/header";
import { ColorSchemeScript, Grid, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/tiptap/styles.css";

export const metadata = {
  title: "Appledore",
  description: "",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  console.log("layout !!!!!");
  return (
    <html lang="ja">
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body>
        <MantineProvider defaultColorScheme="dark">
          <Grid>
            <Header />
            {children}
          </Grid>
        </MantineProvider>
      </body>
    </html>
  );
}

// TODO https://mantine.dev/theming/color-schemes/
// 上記のサイトをもとにダークモード、ライトモードの切り替えを実装する
