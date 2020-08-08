# ORACLE 내장함수

## IN

or(또는)의 역할을 합니다.  
보통 wherer 절과 같이 활용이 됩니다.

```
where 컬럼명 in ('해당조건', '해당조건', '해당조건');
```

```
select * from exam where pid in('aaa', 'bbb');
```

---

## LENGTH

문자열의 길이를 반환하는 함수 입니다.  
보통 where 절과 함께 쓰입니다.

```
where LENGTH(컬럼명) = 조건;
```

이름컬럼의 데이타의 문자열 길이가 2인 즉, 이름이 2글자 인사람 찾기

```
where LENGTH(name) = 2;
```

---

## MAX

해당 컬럼의 현재의 최대값을 반환

```
select max(조회할 컬럼명) from 테이블명;
```

```
select max(id) from exam;
```

---

## SUM

Oracle 의 구룹함수로서 합을 반환 합니다.

```
select sum(합을 구할 컬럼명) as tot from 컬럼이 존재하는 테이블명;
```

```
select sum(kor) as tot from exam;
```

---

## AVG

Oracle 의 구룹함수로서 평균을 반환 합니다.

```
select avg(평균을 구할 컬럼명) as avg from 컬럼이 존재하는 테이블명;
```

```
select avg(kor) as avg from examm;
```

---

## LIKE

---
