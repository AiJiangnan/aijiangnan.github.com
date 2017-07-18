# 常用类之Arrays

常用类Arrays包含用来操作数组的各种方法。常用方法如下：

|       返回值        |              方法名               |         作用         |
| :--------------: | :----------------------------: | :----------------: |
|  `static void`   |      `sort(datatype[] a)`      |  对指定的数组按数字升序进行排序   |
| `static String`  |    `toString(datatype[] a)`    |  返回指定数组内容的字符串表达形式  |
| `static boolean` |   `equals(datatyepe[] a,a2)`   |   判断两个指定的数组是否相等    |
|   `static int`   | `binarySearch(datatype[] a,b)` | 在数组中使用二分搜索法来搜索指定的数 |

## 常用方法讲解

**1. toString方法**

在常用类Object中，我们讲过toString方法的用法，在这里作用是一样的，但是它是属于Arrays类中的一个静态方法，并不是数组重写Object中的toString方法而来。在使用的时候应注意，直接输出数组名或者调用数组对象的toString方法，并不能输出数组内容。

```java
import java.util.Arrays;

public class Demo01 {
	public static void main(String[] args) {
		int[] a = {1,3,2,4,6,5,10,9,8,7};
		System.out.println(a);
		System.out.println(a.toString());
		System.out.println(Arrays.toString(a));

		// print:
		//	[I@15db9742
		//	[I@15db9742
		//	[1, 3, 2, 4, 6, 5, 10, 9, 8, 7]
	}
}
```

**2. sort方法**

在数组那一章讲到了数组的排序算法，在Java中，Arrays类提供了一个数组的排序方法。sort方法是Arrays类的静态方法，它没有返回值，直接将基本数据类型的数组作为参数输入即可。

```java
import java.util.Arrays;

public class Demo02 {
	public static void main(String[] args) {
		int[] a = {1,3,2,4,6,5,10,9,8,7};
		
		System.out.println(Arrays.toString(a));
		Arrays.sort(a);
		System.out.println(Arrays.toString(a));
		
		// print:
		//	[1, 3, 2, 4, 6, 5, 10, 9, 8, 7]
		//	[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	}
}
```

分析：Arrays类中的sort方法能对所有基本数据类型的数组进行排序，如果是引用类型数据用什么方法排序呢？这个问题到后面讲容器的时候再说。

**3. equals方法**

和toString方法一样，此方法并不是重写Object类中的equals方法而来，它们是两个不同的方法，Arrays类中的equals方法可以用来判断两个非空数组中的内容是否一致，一致指的是长度相同，每个元素对应相同。

```java
import java.util.Arrays;

public class Demo03 {
	public static void main(String[] args) {
		int[] a = {1,3,2,4,6,5,10,9,8,7};
		int[] b = {1,3,2,4,6,5,10,9,8,7};
		int[] c = {1,3,2,4,6,5,10,9,8,8};
		
		System.out.println(a.equals(b));				// print: false
		System.out.println(Arrays.equals(a, b));		// print: true
		System.out.println(Arrays.equals(a, c));		// print: flases
	}
}
```

**4. binarySearch方法**

在数组那一章我们最后也讲到了二分法查找，方法是一样的，首先要对数组进行排序，然后再进行二分查找，注意，返回的整数类型值是排序后的需要查找的数的索引。

```java
import java.util.Arrays;

public class Demo04 {
	public static void main(String[] args) {
		int[] a = {1,3,2,4,6,5,10,9,8,7};
		
		Arrays.sort(a);
		System.out.println(Arrays.binarySearch(a, 6));		// print: 5
	}
}
```







