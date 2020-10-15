# React_Spring 연동

[참고 출처](https://sundries-in-myidea.tistory.com/71)

## Spring Boot 기본 설정하기

스프링부트를 설정하기 위해서는 intellj 또는 이클립스에서 설정하거나 [스타트 스프링](https://start.spring.io/)에서 설정해서 그 프로젝트를 다운로드 받는 방식이 있습니다.

기본적으로 테스트만 하기 위해 Dependency에 web만 추가 해 줄수 있도록 합니다.

---

## 스프링으로 간단한 Rest API 서버 만들기

일단 간단한 Rest API 서버를 만들어서 아래의 코드를 추가해줍니다.

```
package com.exam;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Date;

@RestController
public class HelloController {

    @GetMapping("/api/hello")
    public String hello(){
        return "안녕하세요. 현재 서버시간은 "+new Date() +"입니다. \n";
    }
}
```

---

## 리액트와 스프링부트의 CORS 문제 해결하기

스프링부트의 백엔드 서버는 localhost:8080에서 실행되고 있고, React 프론트엔드 서버는 localhost:3000번으로 실행됩니다. 그러다보니까 CORS( cross-origin requests) 가 발생하게되는데, 그런 문제를 해결 하기위해서는 Proxy를 프론트쪽에서 잡아주어야합니다.

Package.json 파일을 아래와 같이 변경합니다.

```
"proxy": "http://localhost:8080/contextPath",
```

contextPath 는 물리적인 경로의 path 가 아닌 URL 에 보이는 대로 입력합니다.

---

## React의 App.js를 변경해서 Rest API의 값을 받고 출력해내기

```
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [server, setServer] = useState(null);

  useEffect(() => {
    fetch('/Home')
      .then((response) => response.text())
      .then((result) => {
        setServer(() => result);
      });
  }, []);

  return <div>{server}</div>;
}

export default App;

```

---

## 스프링부트와 React APP을 함께 패키징하기

> Maven으로 NPM 실행시키기

React와 스프링 부트를 동시에 빌드시키기위해서는 maven을 통해서 빌드되는 도중에 npm이 실행되야하는데요.  
Maven에 새로운 Plugin을 추가해줘야합니다.

```
<plugin>
	<groupId>com.github.eirslett</groupId>
	<artifactId>frontend-maven-plugin</artifactId>
	<version>1.9.1</version>
	<configuration>
		<workingDirectory>frontend</workingDirectory>
		<installDirectory>target</installDirectory>
	</configuration>
	<executions>
		<execution>
			<id>install node and npm</id>
			<goals>
				<goal>install-node-and-npm</goal>
			</goals>
			<configuration>
				<nodeVersion>v10.16.3</nodeVersion>
				<npmVersion>6.9.0</npmVersion>
			</configuration>
		</execution>
		<execution>
			<id>npm install</id>
			<goals>
				<goal>npm</goal>
			</goals>
			<configuration>
				<arguments>install</arguments>
			</configuration>
		</execution>
		<execution>
			<id>npm run build</id>
			<goals>
				<goal>npm</goal>
			</goals>
			<configuration>
				<arguments>run build</arguments>
			</configuration>
		</execution>
	</executions>
</plugin>
```

다음과 같은 구문을 `plugins` 안에 추가시켜줘야합니다.

단 조건이 있습니다. 빌드시 로컬 `npm, node`를 사용해서 빌드를 하기때문에 로컬의 `npm`과 `node`의 버젼을 일치시켜야합니다.

그리고 `frontend-maven-plugin`의 버젼도 맞춰줘야합니다.

Maven을 업데이트 한후에 아래 명령어를 쳐야합니다.

```
./mvnw clean install
```

출처: https://sundries-in-myidea.tistory.com/71 [얇고 넓은 개발 블로그]

> Spring Boot JAR 파일 안에 프론트엔드 Build파일 포함 시키기

동일한 Plugins안에

```
<plugin>
	<artifactId>maven-antrun-plugin</artifactId>
	<executions>
		<execution>
			<phase>generate-resources</phase>
			<configuration>
				<target>
					<copy todir="${project.build.directory}/classes/public">
						<fileset dir="${project.basedir}/frontend/build" />
					</copy>
				</target>
			</configuration>
			<goals>
				<goal>run</goal>
			</goals>
		</execution>
	</executions>
</plugin>
```

를 추가시켜준 뒤에 아까와 동일하게

```
./mvnw clean install

```

를 실행시켜주면 아까와 동일하게 빌드를 거쳐서 빌드가 완료된 뒤에,

target폴더를 확인해보면, 이전의 frontend/build 안에 포함되어있는 파일들이 target/classes/public 안에 들어가 있는걸 확인 할 수 있습니다.  
![frontend](/image/react_build.png)  
![backend](/image/sping_build.png)

demo-0.0.1-SNAPSHOT.jar를 생성하게되고 이파일을 실행시키려면

```
java -jar target/demo-0.0.1-SNAPSHOT.jar
```

로 실행시켜주면, 스프링부트의 실행화면이 터미널에 뜨며,

http://localhost:8080/에서 아까 React서버에서 뜨던 화면이 뜨는 것을 볼 수 있습니다.
