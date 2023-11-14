import React from 'react'
import "./styles/CreateNote.css"
import ReactQuill from 'react-quill';
import { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import BlotFormatter from 'quill-blot-formatter';
import CreateButton from '../components/createButton/CreateButton';

Quill.register('modules/blotFormatter', BlotFormatter);

const modules = {
  blotFormatter: {},
  toolbar: [
      ['bold', 'italic', 'underline', 'strike'], // toggled buttons
      ['blockquote', 'code-block'],
      [{ 'header': 1 }, { 'header': 2 }], // custom button values
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'script': 'sub' }, { 'script': 'super' }], // superscript/subscript
      [{ 'indent': '-1' }, { 'indent': '+1' }], // outdent/indent
      [{ 'direction': 'rtl' }], // text direction
      [{ 'size': ['small', false, 'large', 'huge'] }], // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [{ 'color': [] }, { 'background': [] }], // text color and background color
      [{ 'font': [] }], // font family
      [{ 'align': [] }], // text alignment
      ['image'],
      ['link'], // add a link option
      ['video'], // add a video embed option
      ['clean']
  ],
  clipboard: {
      matchVisual: true,
  },
  
};

const formats = [
  'header', 'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'code-block',
  'align', 'video', 'formula', 'table','color', 'background', 'font', 'script', 'size', 'blockquote', 'float'
];


export default function CreateNote() {
  return (
    <div className='createNote'> 

    <p className='note_create_title'>Create Note</p>

      <div className='noteArea'>
        <ReactQuill
            theme="snow"
            
            modules={modules}
            formats={formats}
            className='custom_editor'
        />
      </div>

      <CreateButton text='Create Note'/>

    </div>
  )
}
