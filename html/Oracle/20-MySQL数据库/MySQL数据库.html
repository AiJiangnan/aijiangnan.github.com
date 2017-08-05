# MySQL数据库

## 一、字段数据类型

|      数据类型      |       长度（字节）        |
| :------------: | :-----------------: |
|    SMALLINT    |          2          |
|  INT（INTEGER）  |          4          |
|     BIGINT     |          8          |
|     FLOAT      |          4          |
|     DOUBLE     |          8          |
|      char      |        固定长度         |
|    varchar     |        可变长度         |
|      text      |     非二进制大对象（字符）     |
|      blob      |     二进制大对象（非字符）     |
|      date      |     YYYY-MM-DD      |
|    datetime    | YYYY-MM-DD HH:MM:SS |
|   timestamp    | YYYY-MM-DD HH:MM:SS |
|      time      |      HH:MM:SS       |
|      year      |        YYYY         |
| auto increment |                     |

## 二、MySQL中的SQL语句

**1. 数据库操作**

```mysql
-- 查看数据库
show databases;
-- 创建数据库
create database db_num;
-- 使用数据库
use db_num;
-- 删除数据库
drop database db_num;
```

**2. 表操作**

```mysql
-- 查看数据库中的表
show tables;
-- 创建表
create table t_num(
	nno varchar(36) primary key,
  	nnum int(7) not null,
  	ntype char(2)
);
-- 查看表结构
desc t_num;
-- 显示建表SQL语句
show create table t_num;
-- 删除表
drop table t_num;
```

**3. 增删改查**

```mysql
-- 插入
insert into t_num values ("abcdefghijklmn",2,'ZS');
-- 查询
select * from t_num;
-- 修改
update t_num set nnum=3 where nnum=2;
-- 删除
delete from t_num where nnum=2;
```

注意：在MySQL中，SQL语句操作和Oracle大致相同，在插入操作中，varchar类型数据要用双引号，char则使用单引号。

## 三、JDBC操作MySQL

**1. 更改jdbc.properties配置文件**

```properties
## Database Type
dbtype=mysql

## Oracle Driver
oracledriver=oracle.jdbc.OracleDriver
## url
oracleurl=jdbc:oracle:thin:@localhost:1521:orcl
## user
oracleuser=scott
## password
oraclepassword=tiger

## MySQL Driver
mysqldriver=com.mysql.jdbc.Driver
## url
mysqlurl=jdbc:mysql://localhost:3306/db_num
## user
mysqluser=root
## password
mysqlpassword=19950121
```

说明：通过更改dbtype来切换连接Oracle还是MySQL

**2. 更新DBUtil工具类**

```java
static {
	Properties prop = new Properties();
	try {
		prop.load(DBUtil.class.getResourceAsStream("/jdbc.properties"));
		String dbtype = prop.getProperty("dbtype");
		driver = prop.getProperty(dbtype + "driver");
		url = prop.getProperty(dbtype + "url");
		user = prop.getProperty(dbtype + "user");
		password = prop.getProperty(dbtype + "password");
		Class.forName(driver);
	} catch (FileNotFoundException e) {
		e.printStackTrace();
	} catch (IOException e) {
		e.printStackTrace();
	} catch (ClassNotFoundException e) {
		e.printStackTrace();
	}
}
```

说明：只需更新静态代码块中读取配置文件的操作即可，其他都不变。