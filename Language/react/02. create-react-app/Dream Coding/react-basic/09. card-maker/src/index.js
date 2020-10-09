import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import AuthService from './service/auth_service';
import ImageFileInput from './components/image_file_input/image_file_input';
import ImageUploader from './service/image_uploader';

const authService = new AuthService();

const imageUploader = new ImageUploader();
const FileInput = (
  props, // 컴포넌트를 전달하는 prop 의 경우 대문자로 시작합니다.
) => <ImageFileInput {...props} imageUploader={imageUploader} />;

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} FileInput={FileInput} />
  </React.StrictMode>,
  document.getElementById('root'),
);
