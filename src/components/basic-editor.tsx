"use client";

import { autoformatRules } from "@/lib/plate/auto-format-rules";
import { createAutoformatPlugin } from "@udecode/plate-autoformat";
import {
  createBoldPlugin,
  createCodePlugin,
  createItalicPlugin,
  createStrikethroughPlugin,
  createUnderlinePlugin,
} from "@udecode/plate-basic-marks";
import { createBlockquotePlugin } from "@udecode/plate-block-quote";
import { createCodeBlockPlugin } from "@udecode/plate-code-block";
import { Plate, createPlugins } from "@udecode/plate-common";
import { createHeadingPlugin } from "@udecode/plate-heading";
import { createParagraphPlugin } from "@udecode/plate-paragraph";

import { Editor } from "@/components/plate-ui/editor";
import { createPlateUI } from "@/lib/plate/create-plate-ui";
import { ELEMENT_BLOCKQUOTE } from "@udecode/plate-block-quote";
import {
  ELEMENT_CODE_BLOCK,
  isCodeBlockEmpty,
  isSelectionAtCodeBlockStart,
  unwrapCodeBlock,
} from "@udecode/plate-code-block";
import { ELEMENT_PARAGRAPH } from "@udecode/plate-paragraph";
import { createResetNodePlugin } from "@udecode/plate-reset-node";

const resetBlockTypesCommonRule = {
  types: [ELEMENT_BLOCKQUOTE],
  defaultType: ELEMENT_PARAGRAPH,
};

const resetBlockTypesCodeBlockRule = {
  types: [ELEMENT_CODE_BLOCK],
  defaultType: ELEMENT_PARAGRAPH,
  onReset: unwrapCodeBlock,
};

const plugins = createPlugins(
  [
    // Pick your plugins in https://platejs.org/?builder=true
    createParagraphPlugin(),
    createBlockquotePlugin(),
    createCodeBlockPlugin(),
    createHeadingPlugin(),

    createBoldPlugin(),
    createItalicPlugin(),
    createUnderlinePlugin(),
    createStrikethroughPlugin(),
    createCodePlugin(),
    createAutoformatPlugin({
      options: {
        rules: [...autoformatRules],
        enableUndoOnDelete: true,
      },
    }),
    createResetNodePlugin({
      options: {
        rules: [
          // {
          //   ...resetBlockTypesCommonRule,
          //   hotkey: "Enter",
          //   predicate: isBlockAboveEmpty,
          // },
          // {
          //   ...resetBlockTypesCommonRule,
          //   hotkey: "Backspace",
          //   predicate: isSelectionAtBlockStart,
          // },
          {
            ...resetBlockTypesCodeBlockRule,
            hotkey: "Enter",
            predicate: isCodeBlockEmpty,
          },
          {
            ...resetBlockTypesCodeBlockRule,
            hotkey: "Backspace",
            predicate: isSelectionAtCodeBlockStart,
          },
        ],
      },
    }),
  ],
  {
    // Pick your components in https://platejs.org/?builder=true
    components: createPlateUI(),
  }
);

export function BasicPluginsComponentsDemo() {
  return (
    <Plate plugins={plugins}>
      <Editor spellCheck={false} autoFocus={false} placeholder="Type..." />
    </Plate>
  );
}
