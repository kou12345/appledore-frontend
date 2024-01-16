export type MyAutoformatRule =
  | {
      mode: "mark";
      type: string[];
      match: string;
    }
  | {
      mode: "mark";
      type: string;
      match: string;
    };
