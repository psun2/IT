/* trim */

select ltrim('????왜? 나만? 뭐라고? 해??????', '?') as ltrim from dual; -- 왜? 나만? 뭐라고? 해??????
select rtrim('????왜? 나만? 뭐라고? 해??????', '?') as rtrim from dual; -- ????왜? 나만? 뭐라고? 해
select trim('????왜? 나만? 뭐라고? 해??????', '?') as trim from dual; -- Error (공백이 없음)

select ltrim('????왜? 나만? 뭐라고? 해??????') as ltrim from dual; -- ????왜? 나만? 뭐라고? 해??????
select rtrim('????왜? 나만? 뭐라고? 해??????') as rtrim from dual; -- ????왜? 나만? 뭐라고? 해??????
select trim('????왜? 나만? 뭐라고? 해??????') as trim from dual; -- ????왜? 나만? 뭐라고? 해??????
-- 제거할 문자열을 걸어 주지 않으면 모두 똑같이 출력 합니다.

select ltrim('     왜? 나만? 뭐라고? 해     ') as ltrim from dual; -- 왜? 나만? 뭐라고? 해     
select rtrim('     왜? 나만? 뭐라고? 해     ') as rtrim from dual; --           왜? 나만? 뭐라고? 해
select trim('     왜? 나만? 뭐라고? 해     ') as trim from dual; -- 왜? 나만? 뭐라고? 해