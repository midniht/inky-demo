var storyContent = ﻿{"inkVersion":20,"root":[[{"#":"author: lackbfun"},{"->":"tutorial"},["done",{"#f":5,"#n":"g-0"}],null],"done",{"wait_for_clear":[["ev","str","^继续","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["\n",{"#":"CLEAR"},"ev","void","/ev","->->",{"#f":5}]}],{"#f":1}],"wait_for_restart":[["ev","str","^回到标题","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["\n",{"#":"RESTART"},"done",{"#f":5}]}],{"#f":1}],"tutorial":[["^这是一本我写给自己的教程。","\n","ev","str","^1. 跳转 ->","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^2. 按钮 + / *","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^3. 阅后即焚 [ ]","/str","/ev",{"*":".^.c-2","flg":4},"ev","str","^4. 胶水 <>","/str","/ev",{"*":".^.c-3","flg":4},"ev","str","^5. 逻辑判断 { }","/str","/ev",{"*":".^.c-4","flg":4},"ev","str","^其他效果展示","/str","/ev",{"*":".^.c-5","flg":4},{"c-0":["\n",{"#":"CLEAR"},{"->":"divert"},{"#f":5}],"c-1":["\n",{"#":"CLEAR"},{"->":"choices"},{"#f":5}],"c-2":["\n",{"#":"CLEAR"},{"->":"burn_after_reading"},{"#f":5}],"c-3":["\n",{"#":"CLEAR"},{"->":"glue"},{"#f":5}],"c-4":["\n",{"#":"CLEAR"},{"->":"logic"},{"#f":5}],"c-5":["\n",{"#":"CLEAR"},{"->":".^.^.^.other_stories"},{"#f":5}]}],{"other_stories":[["ev","str","^收听电台","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^看电视","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^与希尔薇的日常","/str","/ev",{"*":".^.c-2","flg":4},"ev","str","^80 天环游世界片段","/str","/ev",{"*":".^.c-3","flg":4},"ev","str","^一次跑路","/str","/ev",{"*":".^.c-4","flg":4},"ev","str","^遇见守卫","/str","/ev",{"*":".^.c-5","flg":4},{"c-0":["\n",{"#":"CLEAR"},{"->":"listen_to_the_radio"},{"#f":5}],"c-1":["\n",{"#":"CLEAR"},{"->":"turn_on_television"},{"#f":5}],"c-2":["\n",{"#":"CLEAR"},{"->":"touch_sylvie"},{"#f":5}],"c-3":["\n",{"#":"CLEAR"},{"->":"eighty_days"},{"#f":5}],"c-4":["\n",{"#":"CLEAR"},{"->":"flee_for_life"},{"#f":5}],"c-5":["\n",{"#":"CLEAR"},{"->":"meet_the_guard"},{"#f":5}]}],{"#f":1}],"#f":1}],"divert":[["^1. 跳转 ->  ",{"#":"CLASS: title"},"\n","^选择你的结局：","\n",["ev",{"^->":"divert.0.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Happy End",{"->":"$r","var":true},null]}],["ev",{"^->":"divert.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Bad End",{"->":"$r","var":true},null]}],["ev",{"^->":"divert.0.7.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":2},{"s":["^Good End",{"->":"$r","var":true},null]}],["ev",{"^->":"divert.0.8.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-3","flg":2},{"s":["^True End",{"->":"$r","var":true},null]}],"ev","str","^懂了","/str","/ev",{"*":".^.c-4","flg":4},{"c-0":["ev",{"^->":"divert.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n",{"->":"divert.happd_end"},{"#f":5}],"c-1":["ev",{"^->":"divert.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n",{"->":"divert.bad_end"},{"#f":5}],"c-2":["ev",{"^->":"divert.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.7.s"},[{"#n":"$r2"}],"\n","^就这样吧。",{"#":"CLASS: end"},"\n",{"->t->":"wait_for_clear"},{"->":"divert"},{"#f":5}],"c-3":["ev",{"^->":"divert.0.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.8.s"},[{"#n":"$r2"}],"\n","^真相大白。",{"#":"CLASS: end"},"\n",{"->t->":"wait_for_clear"},{"->":"divert"},{"#f":5}],"c-4":["\n",{"#":"RESTART"},{"->":"tutorial"},{"#f":5}]}],{"happd_end":["^可喜可贺可喜可贺。",{"#":"CLASS: end"},"\n",{"->t->":"wait_for_clear"},{"->":".^.^"},{"#f":1}],"bad_end":["^人生长恨水长东。",{"#":"CLASS: end"},"\n",{"->t->":"wait_for_clear"},{"->":".^.^"},{"#f":1}],"#f":1}],"choices":[["^2. 选项 + / *  ",{"#":"CLASS: title"},"\n","^下面演示两种不同的选项用法。","\n","ev","str","^+ 这个选项怎么点都不会消失","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^* 这个选项点一次就会消失","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^懂了","/str","/ev",{"*":".^.c-2","flg":4},{"c-0":["\n",{"#":"CLEAR"},{"->":".^.^.^"},{"#f":5}],"c-1":["\n",{"#":"CLEAR"},"^注意：使用 * 的选项消失了。  ",{"#":"CLASS: warn"},"\n",{"->":".^.^.^"},{"#f":5}],"c-2":["\n",{"#":"RESTART"},{"->":"tutorial"},{"#f":5}]}],{"#f":1}],"burn_after_reading":[["^3. 阅后即焚 [ ]  ",{"#":"CLASS: title"},"\n","^下面演示 [阅后即焚文本] 的用法。","\n","ev","str","^“这个畜生。”你心里想。但现在还不是时候。","/str","/ev",{"*":".^.c-0","flg":4},["ev",{"^->":"burn_after_reading.0.11.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","str","^！”","/str","/ev",{"*":".^.^.c-1","flg":6},{"s":["^“我就是饿死、死外边、从这里跳下去，不会吃你们一点东西",{"->":"$r","var":true},null]}],["ev",{"^->":"burn_after_reading.0.12.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":2},{"s":["^“爷今天必须给你整个活。”",{"->":"$r","var":true},null]}],"ev","str","^懂了","/str","/ev",{"*":".^.c-3","flg":4},{"c-0":["^“没问题，先生。很高兴为您服务。”","\n","^你展露出无可挑剔的微笑。","\n",{"->t->":"wait_for_clear"},{"->":".^.^.^"},{"#f":5}],"c-1":["ev",{"^->":"burn_after_reading.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.11.s"},[{"#n":"$r2"}],"^……烤全羊啊嗯。”","\n","^“真香。”你擦了擦嘴，“想问什么？赶紧的吧。”","\n",{"->t->":"wait_for_clear"},{"->":".^.^.^"},{"#f":5}],"c-2":["ev",{"^->":"burn_after_reading.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.12.s"},[{"#n":"$r2"}],"^你深吸一口气，“草，走，忽略！” ጿ ኈ ቼ ዽ ጿ","\n","^“漂亮！”路过的行人见状驻足停下，用力鼓起掌来。","\n",{"->t->":"wait_for_clear"},{"->":".^.^.^"},{"#f":5}],"c-3":["\n",{"#":"RESTART"},{"->":"tutorial"},{"#f":5}]}],{"#f":1}],"glue":[["^4. 胶水 <>  ",{"#":"CLASS: title"},"\n","^“不好，我们回去！”","<>","\n",["ev",{"^->":"glue.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","str","^”","/str","/ev",{"*":".^.^.c-0","flg":6},{"s":["^“去萨维尔街",{"->":"$r","var":true},null]}],["ev",{"^->":"glue.0.7.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","str","^”","/str","/ev",{"*":".^.^.c-1","flg":6},{"s":["^“去沈阳大街",{"->":"$r","var":true},null]}],"ev","str","^懂了","/str","/ev",{"*":".^.c-2","flg":4},{"c-0":["ev",{"^->":"glue.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"^，","<>","\n",{"->":"glue.as_fast_as_we_could"},{"#f":5}],"c-1":["ev",{"^->":"glue.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.7.s"},[{"#n":"$r2"}],"^，","<>","\n",{"->":"glue.as_fast_as_we_could"},{"#f":5}],"c-2":["\n",{"#":"RESTART"},{"->":"tutorial"},{"#f":5}]}],{"as_fast_as_we_could":["^要尽可能地快。”","\n",{"->t->":"wait_for_clear"},{"->":"glue"},{"#f":1}],"#f":1}],"logic":[[{"#":"CLEAR"},"^5. 逻辑判断 { }  ",{"#":"CLASS: title"},"\n","^你要如何前往下一个城镇？","\n",["ev",{"^->":"logic.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^你选择骑马前往。",{"->":"$r","var":true},null]}],["ev",{"^->":"logic.0.7.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^你选择步行前往。",{"->":"$r","var":true},null]}],["ev",{"^->":"logic.0.8.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":2},{"s":["^你脑海里突然响起一个声音：“布响丸辣”。",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"logic.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n",{"->":"logic.ride_a_horse"},{"#f":5}],"c-1":["ev",{"^->":"logic.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.7.s"},[{"#n":"$r2"}],"\n",{"->":"logic.just_walk"},{"#f":5}],"c-2":["ev",{"^->":"logic.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.8.s"},[{"#n":"$r2"}],"\n",{"->":"logic.have_a_rest"},{"#f":5}]}],{"ride_a_horse":["^你在骑马疾行的过程中被绊马索暗算，摔下了马。","\n",{"->":".^.^.next_town"},{"#f":1}],"just_walk":["^走到半路，你被路边突然冒出来的一伙蒙面恶徒团团包围。","\n",{"->":".^.^.next_town"},{"#f":1}],"have_a_rest":["^虽然搞不太懂是什么意思，总之还是在这个村子休息一阵子再出发吧。","\n","^你养精蓄锐后重新启程，意外地发现路上的人烟出奇地少。","\n",{"->":".^.^.next_town"},{"#f":1}],"next_town":["ev",{"CNT?":".^.^.ride_a_horse"},"/ev",[{"->":".^.b","c":true},{"b":["^ 你的四肢和脖子折成了不可思议的角度。",{"->":".^.^.^.4"},null]}],"nop","\n","ev",{"CNT?":".^.^.just_walk"},"/ev",[{"->":".^.b","c":true},{"b":["^ 你竭力反抗。可是双拳难敌四手。",{"->":".^.^.^.10"},null]}],"nop","\n","ev",{"CNT?":".^.^.ride_a_horse"},{"CNT?":".^.^.just_walk"},"||","/ev",[{"->":".^.b","c":true},{"b":["^ 你死了。",{"->":".^.^.^.18"},null]}],"nop","\n","ev",{"CNT?":".^.^.have_a_rest"},"/ev",[{"->":".^.b","c":true},{"b":["^ 沉默地不断前进着，你心里莫名生出的异样感越来越强烈。",{"->":".^.^.^.24"},null]}],"nop","\n","ev",{"CNT?":".^.^.ride_a_horse"},"!",{"CNT?":".^.^.just_walk"},"!","&&","/ev",[{"->":".^.b","c":true},{"b":["^ 你怀着不安的心情抵达了邻近的城镇。",{"->":".^.^.^.34"},null]}],"nop","\n","ev",{"CNT?":".^.^.ride_a_horse"},{"CNT?":".^.^.just_walk"},"||","!","/ev",[{"->":".^.b","c":true},{"b":["^ 你惊讶地发现这个地方已经被烧成了一片白地。",{"->":".^.^.^.43"},null]}],"nop","\n",{"->":"wait_for_restart"},{"#f":1}],"#f":1}],"listen_to_the_radio":[["^电台嘶嘶作响。 ",["ev","visit",4,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"ev","du",3,"==","/ev",{"->":".^.s3","c":true},"ev","du",4,"==","/ev",{"->":".^.s4","c":true},"nop",{"s0":["pop","^“三！”",{"->":".^.^.35"},null],"s1":["pop","^“二！”",{"->":".^.^.35"},null],"s2":["pop","^“一！”",{"->":".^.^.35"},null],"s3":["pop","^传来了爆炸的响声。",{"->":".^.^.35"},null],"s4":["pop","^只有这些噪声。",{"->":".^.^.35"},null],"#f":5}],"\n","ev","str","^收听电台","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^回到标题","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["^ ",{"->":".^.^.^"},"\n",{"#f":5}],"c-1":["\n",{"#":"RESTART"},{"->":"tutorial"},{"#f":5}]}],{"#f":1}],"turn_on_television":[["^我打开电视",["ev","visit",5,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"ev","du",3,"==","/ev",{"->":".^.s3","c":true},"ev","du",4,"==","/ev",{"->":".^.s4","c":true},"ev","du",5,"==","/ev",{"->":".^.s5","c":true},"nop",{"s0":["pop","^一",{"->":".^.^.41"},null],"s1":["pop","^两",{"->":".^.^.41"},null],"s2":["pop","^三",{"->":".^.^.41"},null],"s3":["pop","^四",{"->":".^.^.41"},null],"s4":["pop","^五",{"->":".^.^.41"},null],"s5":["pop","^无数",{"->":".^.^.41"},null],"#f":5}],"^次，但电视",["ev","visit",5,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"ev","du",3,"==","/ev",{"->":".^.s3","c":true},"ev","du",4,"==","/ev",{"->":".^.s4","c":true},"ev","du",5,"==","/ev",{"->":".^.s5","c":true},"nop",{"s0":["pop","^没啥有意思的东西，所以关上了电视",{"->":".^.^.41"},null],"s1":["pop","^依旧没什么有意思的东西",{"->":".^.^.41"},null],"s2":["pop","^比以前更不能吸引我的兴趣了",{"->":".^.^.41"},null],"s3":["pop","^只有垃圾",{"->":".^.^.41"},null],"s4":["pop","^演关于鲨鱼的节目，我并不喜欢鲨鱼",{"->":".^.^.41"},null],"s5":["pop","^什么都没有",{"->":".^.^.41"},null],"#f":5}],"^。","\n","ev","str","^再试试","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^回到标题","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["^ ",{"->":".^.^.^"},"\n",{"#f":5}],"c-1":["\n",{"#":"RESTART"},{"->":"tutorial"},{"#f":5}]}],{"#f":1}],"touch_sylvie":[["^希尔薇",["ev","visit",10,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"ev","du",3,"==","/ev",{"->":".^.s3","c":true},"ev","du",4,"==","/ev",{"->":".^.s4","c":true},"ev","du",5,"==","/ev",{"->":".^.s5","c":true},"ev","du",6,"==","/ev",{"->":".^.s6","c":true},"ev","du",7,"==","/ev",{"->":".^.s7","c":true},"ev","du",8,"==","/ev",{"->":".^.s8","c":true},"ev","du",9,"==","/ev",{"->":".^.s9","c":true},"ev","du",10,"==","/ev",{"->":".^.s10","c":true},"nop",{"s0":["pop","^害怕得绷紧小小的身体",{"->":".^.^.71"},null],"s1":["pop","^仍然有点害怕",{"->":".^.^.71"},null],"s2":["pop","^好像很慌乱",{"->":".^.^.71"},null],"s3":["pop","^看起来不知所措",{"->":".^.^.71"},null],"s4":["pop","^感到有点困惑",{"->":".^.^.71"},null],"s5":["pop","^似乎觉得舒服",{"->":".^.^.71"},null],"s6":["pop","^害羞得闭上眼",{"->":".^.^.71"},null],"s7":["pop","^露出幸福的微笑",{"->":".^.^.71"},null],"s8":["pop","^做了个鬼脸",{"->":".^.^.71"},null],"s9":["pop","^恬淡地笑着",{"->":".^.^.71"},null],"s10":["pop","^没有再做出反应了",{"->":".^.^.71"},null],"#f":5}],"^。","\n","ev","str","^摸头","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^回到标题","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n",{"->":".^.^.^"},{"#f":5}],"c-1":["\n",{"#":"RESTART"},{"->":"tutorial"},{"#f":5}]}],{"#f":1}],"eighty_days":[{"#":"CLEAR"},"^伦敦，1872 年","\n","^Phileas Fogg 先生的住所。","\n",{"->":".^.london"},{"london":[["^Phileas Fogg 先生早早从改革俱乐部回到了家，并乘坐了新型的蒸汽运输机！","\n","^“领航，” 他喊道， \"我们去环游世界！\"","\n",["ev",{"^->":"eighty_days.london.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^“环游世界，先生？”",{"->":"$r","var":true},null]}],"ev","str","^点头。","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["ev",{"^->":"eighty_days.london.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n","^我大吃一惊。","\n",{"->":".^.^.^.^.astonished"},{"#f":5}],"c-1":["\n",{"->":".^.^.^.^.nod"},{"#f":5}]}],{"#f":1}],"astonished":[["^“你在开玩笑！” 我认真地对他说。“你一定是在和我开玩笑，先生。”","\n","^“我很认真。”","\n",["ev",{"^->":"eighty_days.astonished.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^“好吧。”",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"eighty_days.astonished.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.^.eighty_days_end"},{"#f":5}]}],{"#f":1}],"nod":["^我点了点头，但不相信一个字。","\n",{"->":".^.^.eighty_days_end"},{"#f":1}],"eighty_days_end":["^“我们将在八十天内环游地球。” 他很平静地提出了这个近乎疯狂的计划，“我们 8:25 去巴黎。一小时后。”","\n",{"->":"wait_for_restart"},{"#f":1}],"#f":1}],"flee_for_life":[["^我跑出森林，狗跟在我后面。","\n",["ev",{"^->":"flee_for_life.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^我检查了下珠宝",{"->":"$r","var":true},null]}],["ev",{"^->":"flee_for_life.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^我没停下来喘口气",{"->":"$r","var":true},null]}],["ev",{"^->":"flee_for_life.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^我欢呼了出来",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"flee_for_life.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"^，都还在我的钱包里，这感觉就像步入了春天。 ","<>","\n",{"->":".^.^.g-0"},{"#f":5}],"c-1":["ev",{"^->":"flee_for_life.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"^，继续向前跑。","<>","\n",{"->":".^.^.g-0"},{"#f":5}],"c-2":["ev",{"^->":"flee_for_life.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"^。 ","<>","\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["^路没多远了！Mackie 会发动引擎，然后我就安全了。","\n",["ev",{"^->":"flee_for_life.0.g-0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-3","flg":18},{"s":["^我来到路边四处张望",{"->":"$r","var":true},null]}],["ev",{"^->":"flee_for_life.0.g-0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-4","flg":18},{"s":["^我不该总是说，Mackie 一直很可靠",{"->":"$r","var":true},null]}],{"c-3":["ev",{"^->":"flee_for_life.0.g-0.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"^。 你能相信吗？","\n",{"->":".^.^.^.g-1"},{"#f":5}],"c-4":["ev",{"^->":"flee_for_life.0.g-0.c-4.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"^。他从未让我失望过。更确切地说，从来没有，直到那晚前。","\n",{"->":".^.^.^.g-1"},{"#f":5}],"#f":5}],"g-1":["^路旁边是空的。 Mackie 不见了。","\n",{"->":"wait_for_restart"},{"#f":5}]}],{"#f":1}],"meet_the_guard":[["^卫兵在盯着你。","\n","ev","str","^打招呼","/str","/ev",{"*":".^.c-0","flg":4},["ev",{"^->":"meet_the_guard.0.8.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^“让开。”",{"->":"$r","var":true},null]}],{"c-0":["\n","^“早。”","\n",{"->":".^.^.g-0"},{"#f":5}],"c-1":["ev",{"^->":"meet_the_guard.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.8.s"},[{"#n":"$r2"}],"^你对卫兵说。","\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["^“嗯。”卫兵回应道。","\n",["ev",{"^->":"meet_the_guard.0.g-0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"CNT?":".^.^.^.c-0"},"/ev",{"*":".^.^.c-2","flg":3},{"s":["^“天气不错哈？”",{"->":"$r","var":true},null]}],["ev",{"^->":"meet_the_guard.0.g-0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-3","flg":2},{"s":["^“咦？”",{"->":"$r","var":true},null]}],"ev","str","^把他推到一旁","/str",{"CNT?":".^.^.c-1"},"/ev",{"*":".^.c-4","flg":5},{"c-2":["ev",{"^->":"meet_the_guard.0.g-0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-1"},{"#f":5}],"c-3":["ev",{"^->":"meet_the_guard.0.g-0.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"^你回应道？","\n",{"->":".^.^.^.g-1"},{"#f":5}],"c-4":["\n","^你把他推到一旁。作为礼尚往来，卫兵直接拔出了剑。","\n",{"->":"wait_for_restart"},{"->":".^.^.^.g-1"},{"#f":5}],"#f":5}],"g-1":["^“嗯。” 卫兵给你一个小纸袋，“太妃糖？”","\n",["^我们在沉默中度过了这一天。","\n",[{"->":"wait_for_restart"},{"#f":5,"#n":"g-3"}],{"#f":5,"#n":"g-2"}],{"#f":5}]}],{"#f":1}],"#f":1}],"listDefs":{}};