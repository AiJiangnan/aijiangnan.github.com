# JDBC

## 一、JDBC概述

JDBC（Java DataBase Connectivity，Java数据库连接）是一种用于执行SQL语句的Java API，为多种关系数据库提供统一访问，它是由一组用Java语言编写的类和接口组成。

![img01](0002.png)

有了JDBC，程序员只需用JDBC API写一个程序，就可以访问所有数据库。将Java和JDBC结合起来使程序员不必为不同的平台编写不同的应用程序，只须写一遍程序就可以让它在任何平台上运行，这也是Java语言“编写一次，处处运行”的优势。

![img02](0003.png)

**1. JDBC API**

内容：供程序员调用的接口与类，集成在java.sql和javax.sql包中，如：

- DriverManager类：依据数据库的不同，管理JDBC驱动
- Connection接口：负责连接数据库并担任传送数据的任务
- Statement接口：由Connection产生、负责发送执行SQL语句
- ResultSet接口：负责保存Statement执行后所产生的查询结果

**2. JDBC访问数据库步骤**

1. 加载一个Driver驱动
2. 创建数据库连接（Connection）
3. 创建SQL命令发送器Statement
4. 通过Statement发送SQL命令并得到结果
5. 处理SQL结果（select语句）
6. 关闭数据库资源：ResultSet、Statement、Connection

## 二、JDBC编程

**1. 创建项目并引入JDBC的jar包**

- 从数据库安装目录下复制JDBC的jar包：D:\Oracle<u>\product\11.2.0\dbhome_1\jdbc\lib</u>
- Add to Build Path

![img03](0004.gif)

**2. JDBC测试连接**

```java
import java.sql.Connection;
import java.sql.DriverManager;

public class JdbcQuery {
	public static void main(String[] args) throws Exception {
		String url = "jdbc:oracle:thin:@192.168.2.60:1521:orcl";
		String user = "scott";
		String password = "tiger";
		Class.forName("oracle.jdbc.OracleDriver");
		Connection conn = DriverManager.getConnection(url, user, password);
		System.out.println(conn);
	}
}
```

分析：连接前要保证数据库的监听等服务保持开启状态，首先使用反射来获取OracleDriver驱动，然后通过数据库url以及用户名和密码来进行连接，当能在控制台打印出类的信息，表示连接成功。在这里，我们的重点是测试数据库，并不处理异常，抛出即可，后面遇到这种情况也是。

## 三、JDBC查询操作

**1. JDBC查询测试**

```java
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class JdbcQuery {
	public static void main(String[] args) throws Exception {
		String url = "jdbc:oracle:thin:@192.168.2.60:1521:orcl";
		String user = "scott";
		String password = "tiger";
		// step: 1
		Class.forName("oracle.jdbc.OracleDriver");
		// step: 2
		Connection conn = DriverManager.getConnection(url, user, password);
		// step: 3
		Statement stmt = conn.createStatement();
		// step: 4
		String sql = "select empno,ename,sal from emp";
		ResultSet rs = stmt.executeQuery(sql);
		// step: 5
		while(rs.next()){
			int empno = rs.getInt(1);
			String ename = rs.getString(2);
			double sal = rs.getDouble(3);
			System.out.println(empno+"\t"+ename+"\t"+sal);
		}
		// step: 6
		rs.close();
		stmt.close();
		conn.close();
	}
}
```

分析：在这里同样抛出异常不做处理。

- 第1步：使用反射获取OacleDriver驱动
- 第2步：根据数据库url、用户名、密码获取连接
- 第3步：创建SQL语句发送器Statement对象
- 第4步：通过Statement对象发送并执行SQL语句，得到结果集
- 第5步：迭代处理结果集
- 第6步：关闭资源，要遵循先开后关原则

**2. 完整的查询操作**

```java
import java.sql.Connection;
import java.sql.Date;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class JdbcQuery2 {
	public static void main(String[] args) {
		String url = "jdbc:oracle:thin:@192.168.2.60:1521:orcl";
		String user = "scott";
		String password = "tiger";
		String sql = "select ename,job,hiredate from emp";

		Connection conn = null;
		Statement stmt = null;
		ResultSet rs = null;
		try {
			Class.forName("oracle.jdbc.OracleDriver");
			conn = DriverManager.getConnection(url, user, password);
			stmt = conn.createStatement();
			rs = stmt.executeQuery(sql);
			while(rs.next()){
				String ename = rs.getString("ename");
				String sal = rs.getString("job");
				Date hiredate = rs.getDate("hiredate");
				System.out.println(ename+"\t"+sal+"\t"+hiredate);
			}
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			try {
				if(rs!=null){
					rs.close();
				}
				if(stmt!=null){
					stmt.close();
				}
				if(conn!=null){
					conn.close();
				}
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
	}
}
```

分析：主要添加捕捉异常，优化资源关闭。

## 四、JDBC的DML操作

```sql
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class JdbcUpdate {
	public static void main(String[] args) {
		String url = "jdbc:oracle:thin:@192.168.2.60:1521:orcl";
		String user = "scott";
		String password = "tiger";
		// 插入
		String sql = "insert into emp values(7777, '张无忌','教主', null, sysdate, 5000, null, 10)";
		// 更新
		//String sql = "update emp set sal=6000 where empno=7777";
		// 删除
		//String sql = "delete from emp where empno=7777";
		
		Connection conn = null;
		Statement stmt = null;
		ResultSet rs = null;
		try {
			Class.forName("oracle.jdbc.OracleDriver");
			conn = DriverManager.getConnection(url, user, password);
			stmt = conn.createStatement();
			int rowCount = stmt.executeUpdate(sql);
			if(rowCount>0){
				System.out.println("操作了"+rowCount+"行。");
			}else{
				System.out.println("操作失败。");
			}
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			try {
				if(rs!=null){
					rs.close();
				}
				if(stmt!=null){
					stmt.close();
				}
				if(conn!=null){
					conn.close();
				}
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
	}
}
```

## 五、JDBC中的事务管理

假如我们有在用户中有一张银行用户表，表中有aid用户ID、aname用户名、amoney用户余额三个字段，要使用JDBC模拟用户之间的转账操作，首先执行下面SQL语句创建表和插入信息。

```sql
CREATE TABLE t_account (
	aid NUMBER PRIMARY KEY,
	aname VARCHAR2(10),
	amoney NUMBER
);

INSERT INTO t_account VALUES(10001,'张三',5000);
INSERT INTO t_account VALUES(10002,'李四',5100);

SELECT * FROM t_account;
```

编写Java代码如下，就可使用JDBC事务管理机制实现模拟银行用户转账功能。

```java
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

public class JdbcTCL {
	public static void main(String[] args) {
		String url = "jdbc:oracle:thin:@localhost:1521:orcl";
		String user = "ajn";
		String password = "ajn";

		String sql1 = "update t_account set amoney=amoney-1000 where aid=10001";
		String sql2 = "update t_account set amoney=amoney+1000 where aid=10002";

		Connection conn = null;
		Statement stmt1 = null;
		Statement stmt2 = null;

		try {
			Class.forName("oracle.jdbc.OracleDriver");
			conn = DriverManager.getConnection(url, user, password);
			conn.setAutoCommit(false);		// 设置关闭自动提交事务
			stmt1 = conn.createStatement();
			stmt2 = conn.createStatement();
			int rc1 = stmt1.executeUpdate(sql1);
			int rc2 = stmt2.executeUpdate(sql2);
			if(rc1>0 && rc2>0){
				System.out.println("转账成功！");
				conn.commit();				// 提交事务
			}else{
				System.out.println("转账失败！");
				conn.rollback();			// 回滚事务
			}
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
			try {
				conn.rollback();			// 回滚事务
			} catch (SQLException e1) {
				e1.printStackTrace();
			}
		} finally {
			try {
				if(stmt2!=null){
					stmt2.close();
				}
				if(stmt1!=null){
					stmt1.close();
				}
				if(conn!=null){
					conn.close();
				}
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
	}
}
```

分析：JDBC默认为自动提交事务。

- 自动提交事务时，如果有SQL语句遇到异常，其他没有遇到异常的SQL语句还会执行。比如，上面的实例中，如果转账方无异常成功执行，收账方却遇到异常，则会导致转账方余额减少，而收账方余额却没增加，因为这种情况，我们要设置手动提交事务。
- 手动提交事务时，只有在所有SQL语句都执行成功的情况下，才手动提交事务，而其中只要有一条SQL语句执行不成功或者出现异常，则回滚事务。
