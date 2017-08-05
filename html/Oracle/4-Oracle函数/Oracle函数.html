# Oracle函数

使用函数可以大大提高SELECT查询语句操作数据库的能力，它给数据的转换和处理提供了方便。函数只是将取出的数据进行处理，不会改变数据库中的值。在这只列举一些常用函数，想要学习更多函数用法，可上网找资料拓展，后面代码中会用到Oracle中的一张名为dual虚拟表，专门用于测试。

Oracle函数分为单行函数和多行函数两大类：

 ![0002](0002.png)

## 一、单行函数

## 1. 字符函数

|            函数            |     功能     |
| :----------------------: | :--------: |
|        upper(str)        | 将字符串转换为大写  |
|        lower(str)        | 将字符串转换为小写  |
|       initcap(str)       | 每个单词首字母大写  |
|       length(str)        |  返回字符串的长度  |
| replace(str,str1,[str2]) |   替换子字符串   |
| instr(str,str1,[start])  | 字符串中搜索字符位置 |
| substr(str,start,length) |   截取子字符串   |
|    concat(str1,str2)     |  连接两个字符串   |
| translate(str,str1,str2) |   翻译子字符串   |

**a) 字符串大小写处理**

```sql
-- [1] upper: 字母全部大写
-- [2] lower: 字母全部小写
-- [3] initcap: 字母首字母大写
-- 查询所有员工的姓名, 并分别以小写, 大写和首字母大写的形式进行显示
SELECT ename, LOWER(ename), UPPER(ename), INITCAP(ename) FROM emp;
SELECT LOWER('Hello Oracle123'), INITCAP('hello oracle') FROM dual;
```

**b) 获取字符串长度**

```sql
-- [4] length: 获取字符串的长度
-- 查询所有员工的姓名, 显示姓名的长度
SELECT ename, LENGTH(ename) FROM emp;
-- 查询所有姓名长度大于5的员工信息
SELECT * FROM emp WHERE LENGTH(ename)>5;
```

说明：length函数获取字符串长度时，汉字或全角符按1个字符计算，如果需要按2个字符计算，则需要用lengthb函数。

**c) 字符串的查找与替换**

```sql
-- [5] replace: 实现替换功能
-- 查询所有员工的姓名, 将姓名中的'A'替换为'a'
SELECT ename, REPLACE(ename,'A','a') FROM emp;
-- [6] instr: 查找子串的位置(索引)
SELECT INSTR('abcdefg','x') FROM dual;
```

说明：replace函数不仅可以替换单个字符，还能替换子字符串。replace函数的第3个参数可以为空，意味着删除。instr的第3个参数也可为空，搜索的位置默认为1，同样此函数汉字或全角符按1个字符计算，如果需要按2个字符计算，需用instrb函数。

**d) 截取子字符串**

```sql
-- [7] substr: 用于字符串的截取
-- 查询所有员工的姓名,并显示姓名的前3个字母
SELECT ename, SUBSTR(ename, 0, 3) FROM emp;
-- 查询所有员工的姓名,并显示姓名的后3 个字母
SELECT ename, SUBSTR(ename,LENGTH(ename)-2,3) FROM emp;
SELECT ename, SUBSTR(ename,LENGTH(ename)-2) FROM emp;
SELECT ename, SUBSTR(ename,-3) FROM emp;
```

说明：

- 第2个参数为起始位置，可以为负数，表示倒着截取;
- 第3个参数为截取长度，可以省略，表示截取到末尾;
- 跟前面一样，所有与长度有关的函数全角符都是以1个字符计算的，如果需要以2个字符计算，在函数名后面加b。

**e) 连接两个字符串**

```sql
-- [8] concat: 表示字符串的连接, 功能与||一致
SELECT CONCAT('hello','Oracle') FROM dual;
SELECT 'hello'||'Oracle' FROM dual;
```

**f) 按字符翻译**

```sql
-- [9] translate: 按字符进行翻译
SELECT TRANSLATE('aslkdfjlksdf','abcdefg','1234567') FROM dual;
```

说明：把abcdefg单个字条对应替换为1234567。

## 2. 数值函数

|      函数      |           功能            |
| :----------: | :---------------------: |
|   ceil(x)    |        返回较大的最小整数        |
|   floor(x)   |        返回较小的最大整数        |
| round(x,[y]) |        返回四舍五入后的值        |
| trunc(x,[y]) |         返回截取后的值         |
|    abs(x)    |          返回绝对值          |
|   sign(x)    |          返回正负值          |
|   mod(x,y)   |    返回 $x\div y$ 的余数     |
|  power(x,y)  | 返回 $x^y$ （$x$ 的 $y$ 次幂） |
|   sqrt(x)    | 返回 $\sqrt{x}$（$x$ 的平方根） |

**a) 数值精度计算函数**

```sql
-- [1] ceil: 向上取整
-- [2] floor: 向下取整
-- [3] round: 四舍五入
-- [4] trunc: 截断，不做任何操作
SELECT CEIL(3.0000001) FROM dual;
SELECT FLOOR(3.999999) FROM dual;
SELECT ROUND(3.455) FROM dual;
SELECT TRUNC(3.999999) FROM dual;
SELECT ROUND(65.547632,-2) FROM dual;
SELECT TRUNC(65.547632,1) FROM dual;
```

说明：round和trunc有两个参数,第二个参数表示保留的位数，可以是正数、负数或0。

**b) 常用数值函数**

```sql
-- [5] abs: 取绝对值
-- [6] sign: 取符号
-- [7] mod: 取模，求余数
SELECT ABS(-10), ABS(10) FROM dual;
SELECT SIGN(-10), SIGN(10) FROM dual;
SELECT MOD(10,3) FROM dual;
```

说明：
$$
abs(x)=\begin{cases}
x,&x\ge 0\\
-x,&x<0
\end{cases}
\\
sign(x)=\begin{cases}
1,&x>0\\
0,&x=0\\
-1,&x<0
\end{cases}
$$
**c) 指数运算**

```sql
-- [8] power: 求幂次方
-- [9] sqrt: 求算数平方根
SELECT POWER(2,3) FROM dual;
SELECT SQRT(3) FROM dual;
```

说明：$power(x,y)=x^y, sqrt(x)=\sqrt{x}$

## 3. 日期函数

|          函数           |      功能       |
| :-------------------: | :-----------: |
|        sysdate        |   返回系统当前日期    |
| months_between(d1,d2) | 返回2个日期之间的间隔月数 |
|    add_months(d,n)    |  返回指定月数后的日期   |
|    next_day(d,[c])    |  返回下周某一天的日期   |
|      last_day(d)      |  返回本月最后一天的日期  |

```sql
-- 获得当前系统时间
SELECT SYSDATE FROM dual;
-- 日期和数字可以执行加减法运算,得到一个新的日期
SELECT SYSDATE+10 FROM dual;
-- 计算所有员工入职年数--不精确
SELECT ename, TRUNC((SYSDATE-hiredate)/365) years FROM emp;
-- months_between
SELECT ename, TRUNC(months_between(SYSDATE,hiredate)) mons FROM emp;
-- add_months
SELECT SYSDATE, add_months(SYSDATE,5) mon FROM dual;
SELECT SYSDATE, add_months(SYSDATE,-10) mon FROM dual;
-- next_day
SELECT SYSDATE, next_day(SYSDATE,'星期一') d FROM dual;
-- last_day
SELECT SYSDATE, last_day('1-2月-2017') d FROM dual;
```

## 4. 转换函数

|        函数        |     功能      |
| :--------------: | :---------: |
| to_number(x,[y]) |  字符串转换为数字   |
|  to_char(x,[y])  | 数字或日期转换为字符串 |
|  to_date(x,[y])  |  字符串转换为日期   |

**转换函数格式符：**

- 9：表示任意一位数字, 没有就不显示
- 0：表示任意一位数字, 没有就显示0


- $：表示美元符


- L：表示本地货币符


- .：表示小数点


- ,：表示千分位

**a) 字符串类型转换为数值类型**

```sql
-- to_number
SELECT '123,000.00', to_number('123,000.00','$999,999.00') FROM dual;
```

**b) 数值类型或日期类型转换为字符串类型**

```sql
-- to_char
SELECT 123, to_char(123) FROM dual;
-- 查询所有员工的姓名和工资,将工资显示为如下效果: ￥5,000.00
SELECT ename, sal, to_char(sal,'L999,999.00') salary FROM emp;
-- 查询所有员工的姓名和入职日期, 日期以如下方式显示: 2000-12-12
SELECT ename, to_char(hiredate,'YYYY-MM-DD HH24:MI:SS') FROM emp;
SELECT to_char(SYSDATE,'YYYY-MM-DD HH24:MI:SS') FROM dual;
```

**c) 字符串类型转换为日期类型**

```sql
-- to_date
SELECT '2012-12-21 10:00:00', to_date('2012年12月21日 10:00:00','yyyy"年"mm"月"dd"日" hh24:mi:ss') FROM dual;
SELECT '2012-12-21 10:00:00', to_date('2012a12*21 10=00+00','yyyy-mm-dd hh24:mi:ss') FROM dual;
```

说明：时间的格式符可以去参考帮助文档或上网找资料。

## 5. 其他函数

|             函数              |            功能            |
| :-------------------------: | :----------------------: |
|         nvl(x1,x2)          |          为空值赋值           |
|        nvl2(x,x1,x2)        |          为空值赋值           |
| decode(x,x1,y1,[x2,y2,...]) | 条件取值，与switch...case...类似 |

**a) nvl和nvl2函数**

```sql
-- 查询所有员工的姓名, 薪水, 提成及总收入(薪水 + 提成 )
SELECT ename,sal,comm, sal+NVL(comm,0) salary FROM emp;
SELECT ename,sal,comm, NVL2(comm,sal+comm,sal) salary FROM emp;
```

说明：
$$
nvl(x1,x2)=\begin{cases}
x1,&x1\ne NULL\\
x2,&x1=NULL
\end{cases}\\
nvl2(x,x1,x2)=\begin{cases}
x1,&x\ne NULL\\
x2,&x=NULL
\end{cases}
$$
**b) decode函数**

```sql
-- 查询所有的职位信息
SELECT DISTINCT job FROM emp;
-- 以中文来显示各个职位
SELECT DISTINCT job,DECODE(job,'CLERK','职员','SALESMAN','销售','PRESIDENT','总裁','MANAGER','经理','ANALYST','分析师') job_zh FROM emp;
```

说明：
$$
decode(x,x_1,y_1,[x_2,y_2,...])=\begin{cases}
y_1,&x=x_1\\
y_2,&x=x_2\\
\vdots\\
y_n,&x=x_n
\end{cases}
$$

## 二、多行函数

|    函数    |    功能    |
| :------: | :------: |
|  sum(x)  |  统计合计值   |
|  avg(x)  |  统计平均值   |
| count(x) | 统计查询所得行数 |
|  max(x)  |  统计最大值   |
|  min(x)  |  统计最小值   |

**a) 只能操作数值类型的函数**

```sql
-- [1] sum: 求和
-- [2] avg: 求平均值
-- 统计公司的工资总和, 平均工资
SELECT SUM(sal),AVG(sal) FROM emp;
```

**b) 可以操作所有类型的函数**

```sql
-- [3] count: 计数
-- [4] max: 求最大值
-- [5] min: 求最小值
SELECT COUNT(ename) FROM emp;
SELECT MAX(ename),MIN(hiredate) FROM emp;
-- 统计公司的工资总和, 平均工资, 总人数, 最高工资和最低工资
SELECT SUM(sal),AVG(sal),COUNT(empno),MAX(sal),MIN(sal) FROM emp;
-- 查询总提成, 平均提成
SELECT SUM(comm),AVG(comm) FROM emp;
SELECT COUNT(comm) FROM emp;
-- 查询emp表格总共有多少条记录
SELECT COUNT(*) FROM emp;
SELECT * FROM emp;
-- 统计10部门所有员工的总工资和平均工资
SELECT SUM(sal),AVG(sal) FROM emp WHERE deptno=10;
SELECT deptno,SUM(sal),AVG(sal) FROM emp WHERE deptno=10;
```

说明：由上面代码和运行结果可知，NULL空值不参与多行函数的运算;没有使用group by进行分组时, 分组函数（多行函数）不能和普通字段同时查询，即使用了group by之后，分组字段才可以和分组函数同时查询，这我们后面会讲到。


