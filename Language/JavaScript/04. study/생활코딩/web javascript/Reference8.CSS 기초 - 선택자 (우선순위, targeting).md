# CSS 기초 - 선택자 (우선순위, targeting)

        .js{
            font-weight:  bold;
            color: red; 
        }
        #first{
            color: green;
        }
.붙어 있는 것은 class 선택자 이고

#붙어 있는 것은 ID 선택자이다.

​

​

​

​

​

<span id= 'first' class = 'js'>JavaScript</span>
에서 id와 class가 중복이 되는데 결과값은 id값으로 나온다

​

class = 그룹핑 예를 들어 1학년 [1반] 이라고 할 수 있다.

​

id = 각 개별 1개를 뜻하는 학번을 예를 들 수 있다.

​

class와 id는 id가 더 상위의 개념으로 id가 먼저 우선순위를 갖는다.

​

​

​

​

​

        .js{
            font-weight:  bold;
            color: red; 
        }
        #first{
            color: green;
        }
        span{
            color:blue;
            font-weight: bold;
        }
<span id= 'first' class = 'js'>JavaScript</span>
css의 선택자는 id > class > tag 순으로 우선순위를 갖는다.

​

우선순위를 알고 있으므로, 정확한 targeting 이 가능하다. 