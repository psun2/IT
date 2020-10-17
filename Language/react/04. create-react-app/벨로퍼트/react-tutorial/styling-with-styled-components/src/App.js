import React, { useCallback, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Button from './components/Button';
import Dialog from './components/Dialog';

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

const ButtonGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

// 전역 적으로 어떤 컴포넌트에게나 뿌려줄 수 있도록 합니다.
const palette = {
  blue: '#228be6',
  gray: '#496057',
  pink: '#f06595',
};

function App() {
  const [dialog, setDialog] = useState(false);

  const onClick = useCallback(() => {
    setDialog((dialog) => !dialog);
  }, [setDialog]);

  const onConfirm = () => {
    console.log('확인');
    setDialog(false);
  };

  const onCancel = () => {
    console.log('취소');
    setDialog(false);
  };

  return (
    // ThemeProvider 내부에는 하나의 엘리먼트만 존재 할 수 있습니다.
    <ThemeProvider theme={{ palette }}>
      <AppBlock>
        <ButtonGroup>
          <Button size="large" color="gray">
            Button
          </Button>
          <Button>Button</Button>
          <Button size="small" color="pink">
            Button
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button outline size="large" color="gray">
            Button
          </Button>
          <Button outline>Button</Button>
          <Button outline size="small" color="pink">
            Button
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button onClick={onClick} fullWidth size="large" color="gray">
            삭제
          </Button>
          <Button fullWidth>Button</Button>
          <Button fullWidth size="small" color="pink">
            Button
          </Button>
        </ButtonGroup>
      </AppBlock>
      <Dialog
        title="정말로 삭제하시겠습니까?"
        confirmText="삭제"
        cancleTest="취소"
        onConfirm={onConfirm}
        onCancel={onCancel}
        visible={dialog}
      >
        데이터를 정말로 삭제하시겠습니까?
      </Dialog>
    </ThemeProvider>
  );
}

export default App;
