import React from 'react';

// TM_FILENAME_BASE : 이렇게 설정을 하게 되면...
// VScode 에서 나중에 파일이름에서 확장자를 제외한 이름을 추출하여
// ${TM_FILENAME_BASE} 에 넣어 줍니다.

// ${2} : 생성과 동시에 focus 줄 수 있습니다.
// 1번이 가장 빨리 focus 되고, 
// tab을 누르면 다음 포커스인 2로 커서가 향합니다.

function ${1:${TM_FILENAME_BASE}}() {
  return (
    <div>
        ${2}
    </div>
  );
}

export default ${1:${TM_FILENAME_BASE}};