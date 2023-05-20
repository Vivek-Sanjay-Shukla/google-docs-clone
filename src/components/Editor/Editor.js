import React from "react";
import ReactQuill from "react-quill";
import Toolbar, { modules, formats } from "./Toolbar";
import "react-quill/dist/quill.snow.css";
import './Editor.css'

export const Editor = () => {

  const [state, setState] = React.useState({ value: null });
  const handleChange = (value) => {
    setState({ value });
  };

  return (
    <div className="text-editor">
      <Toolbar />
      <ReactQuill
        theme="snow"
        value={state.value}
        onChange={handleChange}
        modules={modules}
        formats={formats}
      />
    </div>
  );
};

export default Editor;
