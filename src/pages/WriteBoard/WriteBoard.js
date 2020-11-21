import React, { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState } from 'draft-js';
import './WriteBoard.scss';
import Button from 'components/atoms/Button';
import { Select, Input } from 'antd';

const { Option } = Select;

const WriteBoard = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  function inputChange(e) {
    console.log(e.target.value);
  }

  function onSubmit() {
    alert('글이 등록되었습니다');
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <Select
          defaultValue="자유게시판"
          style={{ width: 120 }}
          onChange={handleChange}
        >
          <Option value="이모저모">이모저모</Option>
          <Option value="자유게시판">자유게시판</Option>
          <Option value="공구게시판">공구게시판</Option>
          <Option value="저모이모">저모이모</Option>
        </Select>
        <Input placeholder="제목을 입력하세요" onChange={inputChange} />
        <Editor
          editorState={editorState}
          wrapperClassName="editor-wrapper"
          toolbarClassName="editor-toolbar"
          editorClassName="editor-section"
          onEditorStateChange={onEditorStateChange}
        />
        <Button right>등록하기</Button>
      </form>
    </>
  );
};

export default WriteBoard;
