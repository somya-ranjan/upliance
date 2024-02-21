import React, { memo, useState } from "react";
import { Grid, Typography } from "@mui/material";
import { convertToRaw, EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "draft-js/dist/Draft.css";
import "./style.scss";

const TextEditor = () => {
  // // local state
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  return (
    <Grid container justifyContent="space-between" rowGap={3}>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          border: "1px solid gray",
          py: { xs: 1, sm: 2 },
          px: { xs: 1, sm: 2.5 },
          borderRadius: "10px",
        }}
      >
        <Typography variant="h6" mb={1}>
          Rich Text Editor
        </Typography>
        <Editor
          defaultEditorState={editorState}
          onEditorStateChange={setEditorState}
          wrapperClassName="wrapper_class"
          editorClassName="editor_class"
        />
      </Grid>
      <Grid
        item
        xs={12}
        md={5.5}
        sx={{
          border: "1px solid gray",
          py: { xs: 1, sm: 2 },
          px: { xs: 1, sm: 2.5 },
          borderRadius: "10px",
          height: "100%",
        }}
      >
        <Typography variant="h6" mb={1}>
          Preview
        </Typography>
        <textarea
          disabled
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        />
      </Grid>
    </Grid>
  );
};

export default memo(TextEditor);
