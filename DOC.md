﻿LibrainX关卡包说明
==================
##简要说明
* 输入关卡头信息，点击【生成关卡包头】
* 输入关卡信息并依次点击【生成】【下一题】，输入下一题
* 关卡输入完毕，点击【生成关卡包尾】
* 复制所有代码至json文件或本地关卡包js文件

###LibrainX的关卡包形式上是一个JSON文件，存储有关卡包和关卡的信息。

关卡包生成器文档
----------------

* 关卡包名称：指定关卡包的名称
* 关卡包ID：指定关卡包的ID，最好为英文
* 关卡数量：**从零编号**关卡包最高关卡的编号，比实际数量少一
* 关卡包密码：用来加/解密第零关的密码

>输入完成后点击【生成关卡包头】

* 关卡名称：显示在LibrainX标题栏，指定关卡名称
* 关卡提示：显示在LibrainX标题栏，指定关卡提示
* 关卡密码：指定关卡密码
* 本关类型：指定关卡类型，详细说明见下
* 上一关密码：即本关的解密密码，自动填写
* 数据A~D：关卡数据，详细说明见下

>一题输入完成后依次点击【生成】【下一题】*也可以勾选【自动下一题】并点击【生成】*

**全部输入完成后，此时关卡数量一栏应与关卡包头中的关卡数一致**

>最后一题输入完成，点击【生成】，再点击【生成关卡包尾】
> **若勾选了【自动下一题】，仅需点击【生成关卡包尾】**

>复制底下文本框中所有代码至一个文本文件并保存为levpackname.json文件,levpackname替换为关卡包名称

**建议保存为UTF-8文件，确保文件只有一行**

**目前需要手动改LibrainX.html里的参数从而在页面上显示关卡包**

>如果制作本地关卡包，将文本框中所有代码粘贴至localLevpack.js中“var loclevpackstr='';”一行两个引号之间，并去掉“//loclevpack=true;”的注释（两个斜杠）


###关卡格式说明


* htmlA：将数据A，数据B显示为两个纯文本段落

* htmlB：将数据A，数据B显示为两个超文本段落

* 图片A：显示一到二张图片
	将数据A作为图片的URL（src属性），数据B作为图片的替代文本（alt属性），显示图片
	
	如果数据C不为空，则将C作为第二张图片的URL，数据D作为图片的替代文本
	
	>支持拖放文件到窗口，LibrainX会自动把文件进行Base64编码后输入数据A

* 图片B：显示一张图片和图片描述

	将数据A作为图片的URL（src属性），数据B作为图片的替代文本（alt属性），显示图片
	
	数据C插入图片上方，作为图片的说明。

* 混合A：

	将数据A作为图片的URL（src属性），数据B作为图片的替代文本（alt属性），显示图片
	
	数据C作为超文本段落显示在图片下方
	
	如果数据D不为空，则将D作为脚本执行


* 混合B：

	将数据A作为图片的URL（src属性），数据B作为图片的替代文本（alt属性），显示图片
	
	数据C插入图片上方，作为图片的说明。
	
	如果数据D不为空，则将D作为脚本执行
	


###JSON结构

		levpack
		-levpackname 关卡包名称
		-levpackID 关卡包ID
		-levpackpass 关卡包密码
		-levpacktot 关卡数量
		-levpackloaded =true
		-problems 关卡信息
		 |-pname 关卡名称
		 |-pdesc 关卡介绍
		 |-ptype-(enchtma,enchtmb,encimga,encimgb,hyba,hybb) 本关类型 加密htmlA 加密htmlB 加密图片A 加密图片B 混合A 混合B
		 |-pencdata 加密数据A
		 |-pencdatb 加密数据B
		 |-pencdatc 加密数据C
		 |-pencdatd 加密数据D
		 |-penchash 加密的密码hash
		 |-phint 本关提示
 