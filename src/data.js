export const vehicles = [
  {
    id: "model-y",
    eyebrow: "纯电效率型 SUV",
    name: "Tesla Model Y",
    short: "以软件体验、三电效率与补能网络形成清晰的纯电产品优势。",
    advantages: ["FSD", "三电系统", "充电闭环"],
    exterior: "/assets/benchmark/model-y-exterior.jpg",
    cutout: "/assets/benchmark/cutouts/model-y.png",
    exteriorPosition: "50% 50%",
    cockpit: "/assets/benchmark/model-y-cockpit.jpg",
    cockpitViews: ["/assets/benchmark/cockpit/model-y-01.jpg", "/assets/benchmark/cockpit/model-y-02.jpg"],
    sensors: "/assets/benchmark/model-y-sensors.jpg",
    hardwareRows: [["视觉", "8 个车外摄像头"], ["激光雷达", "未采用"], ["毫米波雷达", "当前车型未统一披露"], ["近距感知", "随批次与地区配置"], ["驾驶员监测", "驾驶室摄像头"]],
    positioning: "面向重视纯电效率、软件体验与补能便利的家庭用户。",
    cockpitHeadline: "中央屏统一承载驾驶信息、车辆控制与在线服务。",
    cockpitText: "16 英寸中央显示屏与 8 英寸后排屏承担主要交互；部分 Model Y 的座舱娱乐计算机采用 AMD Ryzen，负责屏幕、媒体与应用运行，与承担辅助驾驶推理的 FSD 计算机分属不同计算域。",
    cockpitHighlights: ["集中式显示与操作", "语音、App 与 OTA 持续更新", "哨兵、爱犬与露营场景"],
    cockpitDetails: [
      { title: "显示、操作与座舱计算", text: "16 英寸中央屏集中显示车速、导航、车辆状态、空调和娱乐；8 英寸后排屏补充媒体与游戏。部分车型采用 AMD Ryzen 座舱娱乐处理器，实际配置可在车机“软件—其他车辆信息”中核对。" },
      { title: "语音与软件更新", text: "方向盘按键可唤起自然语音，覆盖空调、雨刮、导航、电话与应用；OTA 持续更新导航、能耗、娱乐和辅助驾驶入口。" },
      { title: "Tesla App 与车辆安防", text: "手机端覆盖钥匙、空调、充电、定位、服务预约和远程摄像头；哨兵模式将驻车事件提醒同步到手机。" },
      { title: "爱犬与露营模式", text: "驻车时可维持设定温度，并分别提供宠物状态提示或持续的空调、照明和娱乐；功能依赖电量、网络与系统状态。" },
    ],
    adas: "主动巡航、辅助转向、导航辅助和泊车能力按配置、地区与软件状态开放；中央屏持续显示目标、车道、规划轨迹与当前系统状态。",
    adasFunctions: ["主动巡航与辅助转向", "导航辅助驾驶", "自动泊车与召唤"],
    perceptionSummary: "车外摄像头覆盖前向、侧向和后向道路环境，驾驶室摄像头判断驾驶员注意力。车辆不以激光雷达作为主要感知来源，因此摄像头可见度管理非常关键。",
    computeSpecs: ["FSD（Supervised）", "视觉神经网络", "车载 FSD 计算机"],
    coverage: ["高速与城市辅助驾驶", "自动泊车与召唤", "哨兵 / 爱犬 / 露营模式", "App 远程控制与整车 OTA"],
    platform: "Model Y 通过前、后、左、右摄像头建立周边环境模型，由车载 FSD 计算机运行视觉神经网络并输出路线、速度与转向决策；驾驶室摄像头持续监督驾驶员注意力。AMD Ryzen 属于座舱娱乐计算机，不承担 FSD 推理。",
    computeDetails: [
      { label: "硬件", title: "Tesla 自研 FSD AI 计算机", text: "独立处理车外摄像头输入与车端神经网络推理。它与中控娱乐系统属于不同计算域，不能用座舱芯片替代说明 FSD 平台。" },
      { label: "模型", title: "视觉神经网络", text: "摄像头图像用于建立车辆周边模型，识别道路、车道、车辆与其他目标，并持续更新可行驶空间。" },
      { label: "软件与输出", title: "FSD（Supervised）", text: "系统输出路线、速度与转向决策；实际可用功能和软件版本取决于销售地区、车辆配置、辅助驾驶硬件与当前软件状态。" },
    ],
    computeMedia: {
      image: "/assets/benchmark/compute/model-y-fsd-chip.jpg",
      alt: "Tesla FSD 车载计算机双芯片主板",
      label: "车载计算硬件",
      caption: "图示为公开的 HW3.0 FSD 计算板卡，用于说明 Tesla 将视觉推理放在独立车载 AI 计算域中；当前车辆可在“软件—其他车辆信息”中核对实际 AI 计算机版本。",
      sourceLabel: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Tesla_UBQ01B0_FSD_Chip_-_20240121_(cropped).jpg",
    },
    driveMedia: {
      poster: "/assets/benchmark/model-y-exterior.jpg",
      alt: "Tesla Model Y 道路行驶画面",
      label: "辅助驾驶实车表现",
      caption: "画面集中呈现目标识别、车道关系、规划轨迹与驾驶员监督状态，可用于观察视觉路线的信息组织方式。",
      sourceLabel: "FSD v14 国内道路体验（哔哩哔哩）",
      sourceUrl: "https://www.bilibili.com/video/BV1TrMg6eE9e/",
      videoEmbed: "https://player.bilibili.com/player.html?bvid=BV1TrMg6eE9e&page=1&high_quality=1&danmaku=0",
    },
    routeCondition: "Tesla 采用以摄像头为核心的视觉路线：车外多路图像进入车载 FSD 计算平台，由视觉神经网络建立道路、车道、车辆与可行驶空间表达，再由规划模型连续输出速度、路线与转向决策。大规模真实道路数据与 OTA 迭代负责扩展长尾场景；镜头污染、低能见度或视觉置信度不足时，系统必须及时降级并要求驾驶员接管。",
  },
  {
    id: "m9",
    eyebrow: "全景智慧旗舰 SUV",
    name: "问界 M9",
    short: "以全舱硬件、鸿蒙生态和多传感器辅助驾驶覆盖家庭与商务出行。",
    advantages: ["全舱硬件", "华为生态", "多传感器智驾"],
    exterior: "/assets/benchmark/m9-exterior.jpg",
    cutout: "/assets/benchmark/cutouts/m9.png",
    exteriorPosition: "50% 50%",
    cockpit: "/assets/benchmark/m9-cockpit.jpg",
    cockpitViews: ["/assets/benchmark/cockpit/m9-01.jpg", "/assets/benchmark/cockpit/m9-02-cropped.jpg"],
    sensors: "/assets/benchmark/m9-sensors.jpg",
    hardwareRows: [["视觉", "多方向高清摄像头"], ["激光雷达", "车顶与车身多位置"], ["毫米波雷达", "4D 毫米波雷达"], ["近距感知", "超声波雷达"], ["驾驶员监测", "舱内视觉感知"]],
    positioning: "面向高端家庭、商务与多人出行，车长 5285 mm、轴距 3125 mm，采用六座布局。",
    cockpitHeadline: "多屏按座位分工，鸿蒙生态连接全舱任务。",
    cockpitText: "前排三联屏、双焦面 AR-HUD、后排控制屏与投影系统覆盖全舱；鸿蒙座舱、小艺分区语音和生态互联承担跨屏与跨设备协同。",
    cockpitHighlights: ["多屏分工与双焦面 AR-HUD", "小艺分区语音", "HarmonyOS 生态接续", "观影、会议与休息场景联动"],
    cockpitDetails: [
      { title: "多屏与双焦面 AR-HUD", text: "仪表与 HUD 保留驾驶信息，中控负责导航与车控，副驾屏、后排控制屏和投影分别服务娱乐与舒适操作。" },
      { title: "小艺分区语音", text: "系统先通过声源位置识别乘员，再控制对应座位的空调、车窗、座椅和媒体；连续对话与多意图指令可合并多个操作。" },
      { title: "HarmonyOS 生态接续", text: "超级桌面与星闪连接华为手机、车机和座舱设备，导航、媒体与部分应用可跨设备继续使用，减少重复登录和重新查找。" },
      { title: "全舱场景联动", text: "HUAWEI SOUND、投影巨幕、四张零重力座椅与情景智能共同服务观影、休息和会议，并联动屏幕、声音、座椅、灯光与空调。" },
    ],
    adas: "辅助驾驶覆盖高速、城市道路和泊车，仪表与 HUD 显示即时状态，中控补充环境与规划；车辆平台承接转向、制动与姿态控制。",
    adasFunctions: ["高速辅助驾驶", "城市道路辅助驾驶", "智能泊车"],
    perceptionSummary: "公开配置包括激光雷达、4D 毫米波雷达、超声波雷达和多方向摄像头，覆盖远距、侧向与近场环境。",
    computeSpecs: ["华为乾崑智驾 ADS 5", "多传感器融合", "车端实时规划"],
    coverage: ["高速 / 城市领航辅助", "智能泊车", "全舱多屏与分区语音", "投影、音响与零重力座椅场景"],
    platform: "当前官网将辅助驾驶平台标注为华为乾崑智驾 ADS 5。车型页面未按交付版本统一披露域控制器芯片型号和 TOPS，因此不作推测。",
    computeDetails: [
      { label: "平台", title: "华为乾崑智驾 ADS 5", text: "承接高速、城市道路与泊车场景，在统一软件平台中组织环境理解、路径规划和车辆控制。" },
      { label: "输入", title: "多传感器融合", text: "激光雷达、4D 毫米波雷达、摄像头与近距传感器互补，兼顾远距目标、侧向覆盖与泊车近场。" },
      { label: "输出", title: "规划与底盘执行", text: "规划结果通过转向、制动和车身控制执行，并由仪表、HUD 与中控分别呈现即时状态和周边环境。" },
    ],
    computeMedia: {
      image: "/assets/benchmark/compute/m9-mdc-hardware-clean.png",
      alt: "华为 MDC 智能驾驶计算平台硬件",
      label: "平台级计算硬件",
      caption: "图示为华为 MDC 系列域控制器硬件形态，仅用于说明平台级计算载体；问界 M9 当前交付版本未统一披露芯片型号与 TOPS，不作替代推断。",
      sourceLabel: "华为 MDC 公开硬件资料",
      sourceUrl: "https://www.huawei.com/cn/news/2020/10/intelligent-driving-computing-platform",
    },
    driveMedia: {
      poster: "/assets/benchmark/m9-exterior.jpg",
      alt: "问界 M9 道路行驶画面",
      label: "公开道路实测",
      caption: "画面覆盖高速、匝道、窄路与跨楼层泊车，可用于观察多传感器融合下的环境理解与路径执行。",
      sourceLabel: "问界 M9 ADS 公开实测",
      sourceUrl: "https://www.bilibili.com/video/BV1ARMqzSEKQ/",
      videoEmbed: "https://player.bilibili.com/player.html?bvid=BV1ARMqzSEKQ&page=1&high_quality=1&danmaku=0",
    },
    routeCondition: "问界 M9 采用多传感器融合路线：激光雷达、4D 毫米波雷达、摄像头与近距传感器共同建立环境模型，华为乾崑智驾 ADS 5 负责场景理解、路径规划和车端实时决策，再由线控转向、制动与底盘系统执行。路线成立依赖跨传感器时间同步与融合标定，并由转向、制动、供电和通信冗余保证异常情况下的安全退出。",
  },
  {
    id: "l9",
    eyebrow: "家庭旗舰 SUV",
    name: "理想 L9",
    short: "围绕多人家庭出行组织座舱功能，并以 3D ViT 与 VLA 承接辅助驾驶。",
    advantages: ["家庭任务", "M100", "3D ViT / VLA"],
    exterior: "/assets/benchmark/l9-exterior.jpg",
    cutout: "/assets/benchmark/cutouts/l9.png",
    exteriorPosition: "50% 50%",
    cockpit: "/assets/benchmark/l9-cockpit.jpg",
    cockpitViews: ["/assets/benchmark/cockpit/l9-01.jpg", "/assets/benchmark/cockpit/l9-02.jpg"],
    sensors: "/assets/benchmark/l9-sensors.jpg",
    hardwareRows: [["前向激光雷达", "1 颗"], ["摄像头", "侧后 ×2、侧前 ×2、正前 ×2、正后 ×1"], ["毫米波雷达", "3 颗（如配备）"], ["主激光雷达", "1 颗"], ["驾驶员监测", "舱内摄像头"], ["图示版本", "全新 L9 Livis 2026"]],
    positioning: "六座家庭旗舰，重点覆盖多人、长途和儿童家庭的空间与娱乐任务。",
    cockpitHeadline: "围绕家庭任务组织屏幕、语音与舒适硬件。",
    cockpitText: "29 英寸 6K 前排显示、21 英寸 4K 后排移动屏、33 扬声器与 10 L 冰箱共同构成家庭场景；理想同学支持六音区、家庭账号与场景联动。",
    cockpitHighlights: ["前后排显示按座位分工", "理想同学与六音区语音", "家庭账号与偏好同步", "观影、休息与哄睡场景联动"],
    cockpitDetails: [
      { title: "前后排显示", text: "29 英寸 6K 前排显示承接导航和车辆状态，21 英寸 4K 后排移动屏进入二、三排乘员的操作范围，避免所有任务集中在前排。" },
      { title: "理想同学与六音区", text: "语音、视觉和手势共同识别乘员位置，可直接描述导航、媒体、空调和座椅目标，不必记忆固定指令。" },
      { title: "座舱计算与影音", text: "Ultra 采用骁龙 8797 Max，Livis 采用骁龙 8797 Elite；33 扬声器与后排屏共同支持多人观影、音乐与游戏。" },
      { title: "家庭账号与场景", text: "不同成员保存媒体、座椅和舒适偏好；观影、休息、哄睡等模式联动屏幕、座椅、音响、遮阳与空调。" },
    ],
    adas: "辅助驾驶覆盖高速、城市道路和泊车；目标泊车可理解用户希望停靠的位置，转向、制动与异常退出仍是能力成立的安全基础。",
    adasFunctions: ["高速辅助驾驶", "城市道路辅助驾驶", "目标泊车"],
    perceptionSummary: "全新 L9 需区分 Ultra 与 Livis 版本。公开信息显示 Livis 配备四颗激光雷达；具体摄像头与雷达数量以对应配置页和实车为准。",
    computeSpecs: ["M100", "3D ViT", "VLA"],
    coverage: ["高速 / 城市 / 泊车辅助", "六音区语音", "家庭账号与场景联动", "后排娱乐、冰箱与七区空调"],
    platform: "Ultra 采用一颗自研 M100，Livis 采用双 M100。3D ViT 负责空间编码，VLA 进一步连接视觉、语言目标和车辆动作。",
    computeDetails: [
      { label: "硬件", title: "M100 车端计算", text: "L9 Ultra 使用一颗自研 M100，Livis 使用双 M100，为感知、空间建模和连续规划提供车端算力。" },
      { label: "模型", title: "3D ViT 空间编码", text: "把多路感知输入组织为统一三维空间表达，为道路结构、目标关系和可行驶区域提供基础。" },
      { label: "决策", title: "VLA 连接语言与动作", text: "视觉场景、用户目标与车辆动作在同一链路中衔接，输出低延迟的连续行驶轨迹。" },
    ],
    computeMedia: {
      image: "/assets/benchmark/compute/l9-m100-board.png",
      alt: "理想汽车 M100 Ultra 马赫超算主板与子板",
      label: "自研芯片与计算板",
      caption: "M100 Ultra 通过马赫超算主板与子板形成车端计算载体；L9 Ultra 使用单颗 M100，Livis 使用双 M100。",
      sourceLabel: "理想 M100 公开硬件展示",
      sourceUrl: "https://www.ixbt.com/news/2026/05/12/li-auto-apple-mach-m100.html",
    },
    driveMedia: {
      poster: "/assets/benchmark/l9-exterior.jpg",
      alt: "理想 L9 道路行驶画面",
      label: "VLA 道路实测",
      caption: "连续道路实测覆盖跟车、绕行、路口与窄路，可用于观察 VLA 的场景理解和连续决策。",
      sourceLabel: "理想 L9 VLA 公开实测",
      sourceUrl: "https://www.bilibili.com/video/BV19QhYzyEpC/",
      videoEmbed: "https://player.bilibili.com/player.html?bvid=BV19QhYzyEpC&page=1&high_quality=1&danmaku=0",
    },
    routeCondition: "理想 L9 以 M100 车端计算为硬件底座，3D ViT 将多路感知输入编码成统一三维空间，VLA 再把视觉场景、语言目标与车辆动作连接起来，连续生成行驶与泊车轨迹。技术价值在于让家庭用户可以直接表达目标，但必须由多模态数据、动作边界、转向制动执行与可追溯评测共同保证输出安全。",
  },
  {
    id: "es9",
    eyebrow: "纯电行政旗舰 SUV",
    name: "蔚来 ES9",
    short: "以行政座舱、NOMI、换电网络和服务体系组织高端出行体验。",
    advantages: ["行政座舱", "NOMI", "换电与服务"],
    exterior: "/assets/benchmark/es9-exterior.jpg",
    cutout: "/assets/benchmark/cutouts/es9.png",
    exteriorPosition: "50% 50%",
    cockpit: "/assets/benchmark/es9-cockpit.jpg",
    cockpitViews: ["/assets/benchmark/cockpit/es9-01.jpg", "/assets/benchmark/cockpit/es9-02.jpg"],
    sensors: "/assets/benchmark/es9-sensors.jpg",
    hardwareRows: [["视觉", "800 万像素 ×7 + 300 万 ×4"], ["激光雷达", "前向 ×1 + 侧向 ×2"], ["毫米波雷达", "4D 成像雷达 ×1"], ["近距感知", "超声波传感器 ×12"], ["驾驶员监测", "增强主驾驶感知 ×1"], ["其他", "V2X ×1 + 高精定位 ×1"]],
    positioning: "纯电行政旗舰，强调后排体验、智能底盘与品牌服务体系。",
    cockpitHeadline: "以多屏、NOMI 与服务体系覆盖行政出行。",
    cockpitText: "48 英寸 5K 天际线屏、15.6 英寸中控屏与双 16 英寸后排屏构成多屏座舱；SkyOS、NIO OS、NOMI 4.0、NIO Link 与 5D 体验串联服务。",
    cockpitHighlights: ["前后排多屏分工", "NOMI Intelligence 4.0", "5D 沉浸座舱", "NIO Link 与换电服务接续"],
    cockpitDetails: [
      { title: "数字架构与 SkyOS·天枢", text: "整车数字架构统一组织计算、通信、供电和智能硬件；SkyOS·天枢协调智能座舱、辅助驾驶、车控与移动应用。" },
      { title: "NIO OS 与 5D 座舱", text: "48 英寸 5K 天际线屏、15.6 英寸中控与双 16 英寸后排屏服务驾驶、会议和娱乐，并联动 47 扬声器、座椅、灯光、香氛与底盘。" },
      { title: "NOMI Intelligence 4.0", text: "端到端架构与 NIM 核心模型结合真实和模拟用户数据强化学习；朝向、表情与声音同步表达正在听谁、是否理解以及任务是否执行。" },
      { title: "NIO Link 与服务", text: "导航、账号、换电预约和到站服务在车机、手机与服务体系之间接续；行政中岛、后排屏、会议和按摩覆盖办公、接待与休息。" },
    ],
    adas: "NOP+ 覆盖高速、城市、泊车和换电站任务，并面向潮汐车道、可变车道等动态道路继续扩展；AEB、AES 与全向碰撞减缓负责风险场景中的辅助制动或避让。",
    adasFunctions: ["NOP+", "AEB / AES", "泊车与换电站任务"],
    perceptionSummary: "Cedar AQUILA 的 31 个高性能感知单元包括前向超远距激光雷达、两颗侧向广角激光雷达和 4D 成像雷达，并配合多方向摄像头与近距传感器。",
    computeSpecs: ["NX9031", "NIO WorldModel", "闭环强化学习"],
    coverage: ["NOP+", "AEB / AES", "行政后排多屏", "NOMI、NIO Link 与 5D 体验"],
    platform: "ES9 采用蔚来自研智能驾驶芯片 NX9031。NIO WorldModel 理解环境，并通过闭环强化学习持续训练和适应真实道路场景。",
    computeDetails: [
      { label: "硬件", title: "NX9031", text: "蔚来自研智能驾驶芯片承担多路感知输入、世界模型推理与车端规划所需的高性能计算。" },
      { label: "模型", title: "NIO WorldModel", text: "多变量自回归生成式世界模型持续预测道路环境变化，把动态交通参与者与车辆自身状态放进同一时空表达。" },
      { label: "训练", title: "闭环强化学习", text: "真实道路数据与仿真训练形成闭环，让模型在复杂路口、绕行和动态道路规则中持续修正决策。" },
    ],
    computeMedia: {
      image: "/assets/benchmark/compute/es9-nx9031.jpg",
      alt: "蔚来官方发布的 NX9031 智能驾驶芯片",
      label: "官方芯片影像",
      caption: "NX9031 与 NIO WorldModel 共同构成 ES9 的车端计算与模型基础，芯片承担感知和规划所需的高性能推理。",
      sourceLabel: "NIO IN 官方发布",
      sourceUrl: "https://www.nio.com/news/news-in-july",
    },
    driveMedia: {
      poster: "/assets/benchmark/es9-exterior.jpg",
      alt: "蔚来 ES9 道路行驶画面",
      label: "NWM 道路实测",
      caption: "公开实测覆盖动态交通、绕行与复杂路口，可用于观察世界模型如何持续更新环境理解并输出规划。",
      sourceLabel: "蔚来 ES9 NWM 公开实测",
      sourceUrl: "https://www.bilibili.com/video/BV1htVN6iEKH/",
      videoEmbed: "https://player.bilibili.com/player.html?bvid=BV1htVN6iEKH&page=1&high_quality=1&danmaku=0",
    },
    routeCondition: "蔚来 ES9 从 Cedar AQUILA 超感系统开始，以多激光雷达、4D 成像雷达和多方向摄像头建立广域环境感知；NX9031 车端芯片运行 NIO WorldModel，通过多变量自回归预测动态交通变化，并结合闭环强化学习持续修正规划。轨迹由 SkyRide 智能底盘的线控转向、后轮转向和全主动悬架执行，转向、制动、感知、计算、通信与供电等七类冗余负责在部分系统异常时保留安全处置能力。",
  },
  {
    id: "gx",
    eyebrow: "六座 AI 家庭旗舰",
    name: "小鹏 GX",
    short: "以第二代 VLA、全域 AI 和驾驶员失能处置覆盖家庭出行中的效率与安全需求。",
    advantages: ["第二代 VLA", "全域 AI", "失能辅助"],
    exterior: "/assets/benchmark/gx-exterior.jpg",
    cutout: "/assets/benchmark/cutouts/gx.png",
    exteriorPosition: "50% 50%",
    cockpit: "/assets/benchmark/gx-cockpit.jpg",
    cockpitViews: ["/assets/benchmark/cockpit/gx-01.jpg", "/assets/benchmark/cockpit/gx-02.jpg"],
    sensors: "/assets/benchmark/gx-sensors.jpg",
    hardwareRows: [["视觉", "高清驾驶与环视摄像头"], ["激光雷达", "按车型配置"], ["毫米波雷达", "车外感知"], ["近距感知", "超声波雷达"], ["驾驶员监测", "DMS + 电容方向盘"]],
    positioning: "面向六座家庭出行，把座舱 AI、辅助驾驶和安全处置放在同一产品框架中。",
    cockpitHeadline: "全舱显示、分区交互与 AI 舒适系统协同工作。",
    cockpitText: "88 英寸 AR-HUD、17.3 英寸中控、21.4 英寸后排屏与 8 英寸控制屏覆盖全舱；小 P、座舱 VLM 与 X_ID 把语音、个人设置和跨设备互联组织成完整交互链路。",
    cockpitHighlights: ["五屏按驾驶与乘员任务分工", "前后独立音区", "AI 调光隐私玻璃", "AI 空调、冰箱与智能互联"],
    cockpitDetails: [
      { title: "五屏与独立音区", text: "88 英寸 AR-HUD 和仪表呈现驾驶信息，17.3 英寸中控负责导航与车控，21.4 英寸后排屏和 8 英寸控制屏服务娱乐与舒适；33 扬声器支持前后独立音区。" },
      { title: "AI 调光隐私玻璃", text: "二、三排车窗支持 0.16 秒响应、99.9% 紫外线阻隔、无级调光、分区控制、AI 自适应与一键隐私，在采光和私密之间切换。" },
      { title: "AI 空调与舒适硬件", text: "森林风中央空调 2.0 通过顶部环绕无感出风和智能风向降低直吹，并与双温区冰箱、聆境 AI 音响共同服务老人、儿童与长途休息。" },
      { title: "小 P、VLM 与互联", text: "小 P 支持车内六音区与车外四音区；座舱 VLM 理解模糊地点、复杂路线和自由对话，X_ID 同步个人设置，并兼容 HUAWEI HiCar 与 ICCOA Carlink。" },
    ],
    adas: "NGP 覆盖高速和城市道路，并连接泊车。高速 NGP 检测到驾驶员长时间无响应时，系统可尝试唤醒、寻找安全区域停车并联络救援。",
    adasFunctions: ["高速 / 城市 NGP", "智能泊车", "驾驶员失能辅助与救援"],
    perceptionSummary: "车身摄像头、毫米波雷达和近距传感器形成 360° 环境覆盖，车内 DMS 与电容方向盘继续判断驾驶员注意力和接管状态。",
    computeSpecs: ["1–3 颗图灵 AI 芯片", "750–2250 TOPS", "第二代 VLA"],
    coverage: ["NGP", "驾驶员失能辅助", "AI 气候与分区座舱", "唤醒、安全停车与救援"],
    platform: "消费者版本按配置搭载 1 至 3 颗图灵 AI 芯片，对应 750、1,500 或 2,250 TOPS；第二代 VLA 统一环境理解、语言目标和动作生成。",
    computeDetails: [
      { label: "硬件", title: "1–3 颗图灵 AI 芯片", text: "消费者版本随配置扩展为 750、1,500 或 2,250 TOPS，为多传感器输入和大模型车端推理提供算力。" },
      { label: "模型", title: "第二代 VLA", text: "将环境感知、语言目标和车辆动作统一建模，减少感知、规划与控制之间的多级信息损失。" },
      { label: "安全输出", title: "行驶、泊车与失能处置", text: "同一技术链覆盖高速、城市与泊车；驾驶员长时间无响应时，还需联动 DMS、车辆控制和远程救援。" },
    ],
    computeMedia: {
      image: "/assets/benchmark/compute/gx-turing.jpg",
      alt: "小鹏图灵 AI 芯片官方技术视觉",
      label: "官方芯片影像",
      caption: "不同配置以 1 至 3 颗图灵 AI 芯片扩展车端算力，第二代 VLA 在同一模型中连接理解与动作。",
      sourceLabel: "小鹏图灵 AI 芯片",
      sourceUrl: "https://www.xiaopeng.com/turingaichip.html",
    },
    driveMedia: {
      poster: "/assets/benchmark/gx-exterior.jpg",
      alt: "小鹏 GX 道路行驶画面",
      label: "第二代 VLA 演示",
      caption: "官方演示呈现第二代 VLA 在复杂道路中的响应、轨迹选择与动作生成，量产表现以实际交付版本为准。",
      sourceLabel: "小鹏汽车第二代 VLA 实测（哔哩哔哩）",
      sourceUrl: "https://www.bilibili.com/video/BV1FWwCzCEMN/",
      videoEmbed: "https://player.bilibili.com/player.html?bvid=BV1FWwCzCEMN&page=1&high_quality=1&danmaku=0",
    },
    routeCondition: "小鹏 GX 以图灵 AI 芯片承载第二代 VLA，将车外环境理解、语言目标和动作生成放在统一模型链路中，覆盖高速、城市与泊车。驾驶员长时间无响应时，系统还需要融合 DMS 与电容方向盘状态，完成唤醒、寻找安全区域、减速停车和救援联络；该路线只有在转向、制动、供电和通信冗余均有效时成立。",
  },
  {
    id: "su7",
    eyebrow: "高性能科技轿车",
    name: "第二代小米 SU7",
    short: "以驾驶性能、HyperOS 与统一辅助驾驶硬件连接汽车、手机和家庭设备。",
    advantages: ["驾驶性能", "HyperOS", "统一智驾硬件"],
    exterior: "/assets/benchmark/su7-exterior.jpg",
    cutout: "/assets/benchmark/cutouts/su7.png",
    exteriorPosition: "72% 52%",
    cockpit: "/assets/benchmark/su7-cockpit.jpg",
    cockpitViews: ["/assets/benchmark/cockpit/su7-01.jpg", "/assets/benchmark/cockpit/su7-02.jpg"],
    sensors: "/assets/benchmark/su7-sensors.jpg",
    sensorViews: ["/assets/benchmark/su7-sensors-front.jpg", "/assets/benchmark/su7-sensors-rear.jpg"],
    hardwareRows: [["视觉", "多方向摄像头"], ["激光雷达", "全系标配"], ["毫米波雷达", "4D 毫米波雷达"], ["近距感知", "超声波雷达 ×12"], ["驾驶员监测", "DMS 摄像头"]],
    positioning: "面向年轻科技用户和小米生态用户，以性能、智能与生态协同形成产品记忆点。",
    cockpitHeadline: "数字交互与实体控制并存，连接手机与家庭生态。",
    cockpitText: "16.1 英寸 3K 中控、56 英寸 HUD、7.1 英寸仪表与保留的实体按键兼顾信息密度和操作确定性；HyperOS 与超级小爱连接手机和家庭设备。",
    cockpitHighlights: ["中控、HUD 与仪表协同显示", "保留高频实体控制", "超级小爱处理多指令", "手机与家庭设备任务接续"],
    cockpitDetails: [
      { title: "状态显示与实体控制", text: "16.1 英寸 3K 中控以状态卡片呈现车辆信息与操作入口，56 英寸 HUD 和 7.1 英寸仪表持续显示驾驶信息；横向实体按键处理温度、风量和高频自定义功能。" },
      { title: "超级小爱", text: "可控制约 95% 的车控功能，支持一句话多指令、模糊指令、超级任务、连续对话和情绪化回应；车外四模块八麦克风可结合声纹与数字钥匙验证。" },
      { title: "手车互联", text: "手机导航、应用和账号状态可接续到车机；小米手机提供同账号深度互联，iPhone 可通过小米汽车 App、UWB、桌面组件和灵动岛查看状态并远程控车。" },
      { title: "人车家全生态", text: "Xiaomi HyperOS 连接车辆、手机与家庭设备，可在回家前开启空调或离家后检查设备；磁吸与螺纹扩展接口为物理按键、支架等配件提供固定入口。" },
    ],
    adas: "系统覆盖车位到车位连续辅助驾驶和 25 项安全辅助功能；手册强调驾驶员始终承担驾驶责任，并列出污损、遮挡、天气和异形目标等限制。",
    adasFunctions: ["车位到车位辅助驾驶", "城市与高速辅助驾驶", "25 项安全辅助功能"],
    perceptionSummary: "第二代 SU7 全系标配激光雷达、4D 毫米波雷达、摄像头和 12 个超声波雷达；新版车主手册明确标注了关键传感器位置。",
    computeSpecs: ["700 TOPS", "统一计算平台", "Xiaomi XLA"],
    coverage: ["高速 / 城市 / 泊车辅助", "DMS", "超级小爱", "手机 × 汽车 × 家庭设备协同"],
    platform: "全系标配 700 TOPS 辅助驾驶计算平台；产品资料未在 SU7 车型区公开统一芯片商品名。Xiaomi XLA 认知大模型连接泊车、城市和高速场景。",
    computeDetails: [
      { label: "硬件", title: "700 TOPS 统一计算平台", text: "全系用统一算力口径承载多路感知输入与大模型实时推理；芯片商品名未在车型资料中统一公开，因此不作替代推断。" },
      { label: "模型", title: "Xiaomi XLA 认知大模型", text: "从“模仿驾驶动作”转向理解道路环境与任务目标，统一覆盖泊车、城市道路和高速场景。" },
      { label: "输出", title: "车位到车位连续辅助", text: "模型把环境理解、路线规划与车辆动作衔接起来，并新增商场地库车位级领航等连续任务。" },
    ],
    computeMedia: {
      image: "/assets/benchmark/compute/su7-thor.jpg",
      alt: "车载 AI 计算平台示意影像",
      label: "计算平台示意",
      caption: "该图仅用于说明车载 AI 计算载体。第二代 SU7 以官方公布的 700 TOPS 平台和 Xiaomi XLA 为准，车型资料未统一公开芯片商品名。",
      sourceLabel: "公开车载计算硬件资料",
      sourceUrl: "https://www.mi.com/",
    },
    driveMedia: {
      poster: "/assets/benchmark/su7-exterior.jpg",
      alt: "第二代小米 SU7 道路行驶画面",
      label: "XLA 道路实测",
      caption: "公开实测覆盖城市与高速道路，可用于观察 XLA 的连续规划、速度控制和系统状态提示。",
      sourceLabel: "第二代 SU7 XLA 公开实测",
      sourceUrl: "https://www.bilibili.com/video/BV1HBAjzGEjK/",
      videoEmbed: "https://player.bilibili.com/player.html?bvid=BV1HBAjzGEjK&page=1&high_quality=1&danmaku=0",
    },
    routeCondition: "第二代小米 SU7 采用激光雷达、4D 毫米波雷达、摄像头与近距传感器融合，全系 700 TOPS 计算平台为 Xiaomi XLA 提供统一车端算力。XLA 从环境理解出发连接路线规划与车辆动作，覆盖泊车、城市和高速的连续任务；统一硬件有利于车队能力一致和 OTA 迭代，但仍需承担传感器标定、融合、热管理和明确驾驶员责任边界的成本。",
  },
];

export const benchmarkRows = [
  ["产品定位", "纯电效率型 SUV", "全景智慧旗舰", "家庭旗舰", "纯电行政旗舰", "六座 AI 家庭旗舰", "高性能科技轿车"],
  ["座舱核心", "中控屏 / OTA", "鸿蒙全舱生态", "家庭场景", "NOMI / 行政后排", "全域 AI", "HyperOS 生态"],
  ["辅助驾驶路线", "视觉优先 / FSD", "多传感器 / ADS 5", "3D ViT / VLA", "世界模型 / NOP+", "第二代 VLA", "XLA"],
  ["辅助驾驶计算硬件", "FSD 计算机", "域控制器型号未统一披露", "M100", "NX9031", "图灵 AI 芯片", "700 TOPS 计算平台"],
  ["模型与软件", "视觉神经网络 + FSD（Supervised）", "华为乾崑智驾 ADS 5", "3D ViT + VLA", "NIO WorldModel", "第二代 VLA", "Xiaomi XLA"],
];

export const cockpitRows = [
  ["座舱计算硬件", "AMD Ryzen（部分车型，按车机信息核对）", "HarmonyOS 座舱平台；芯片型号未统一披露", "骁龙 8797 Max / Elite", "SkyOS 座舱平台；芯片型号未统一披露", "座舱 AI 平台；芯片型号未统一披露", "Xiaomi HyperOS 座舱平台；芯片型号未统一披露"],
  ["显示系统", "16 英寸中控 + 8 英寸后排", "前排三联屏 + 双焦面 AR-HUD + 后排投影", "29 英寸 6K 前排 + 21 英寸 4K 后排移动屏", "48 英寸 5K 天际线 + 15.6 英寸中控 + 双 16 英寸后排", "88 英寸 AR-HUD + 17.3 英寸中控 + 21.4 英寸后排 + 8 英寸控制", "16.1 英寸 3K 中控 + 56 英寸 HUD + 7.1 英寸仪表"],
  ["语音与系统", "中控 / App / OTA", "HarmonyOS + 小艺分区语音", "理想同学 + 六音区", "SkyOS / NIO OS + NOMI 4.0", "座舱 AI / VLM", "HyperOS + 超级小爱"],
  ["音响与舒适", "极简座舱与场景模式", "39 扬声器 / 2920 W / 四个零重力座椅", "33 扬声器 / 5440 W / 七区空调 / 10 L 冰箱", "47 扬声器 / 3020 W / 行政后排", "33 扬声器 / AI 调光隐私玻璃", "14 或 25 扬声器 / 保留实体按键"],
  ["生态特征", "软件与充电闭环", "华为终端生态", "家庭账号与任务", "NIO Link、换电与服务", "全域 AI", "手机 × 汽车 × 家庭设备"],
];

export const adasRows = [
  ["感知路线", "摄像头为核心的视觉路线", "激光雷达 + 4D 雷达 + 摄像头 + 超声波", "3D ViT + VLA", "31 个感知硬件，多激光雷达 + 4D 雷达", "摄像头、毫米波与近距感知", "激光雷达 + 4D 毫米波 + 12 超声波 + DMS"],
  ["辅助驾驶计算硬件", "FSD 计算机；与 AMD Ryzen 座舱芯片分属不同计算域", "域控制器型号未统一披露", "M100：Ultra 单颗 / Livis 双颗", "NX9031", "图灵 AI 芯片：1–3 颗", "700 TOPS 计算平台；芯片商品名未公开"],
  ["模型与软件", "视觉神经网络 + FSD（Supervised）", "华为乾崑智驾 ADS 5", "3D ViT + VLA", "NIO WorldModel", "第二代 VLA", "Xiaomi XLA"],
  ["公开算力口径", "未统一披露", "未统一披露", "未统一披露", "未统一披露", "750 / 1,500 / 2,250 TOPS", "700 TOPS"],
  ["功能覆盖", "高速 / 城市 / 泊车 / 召唤", "高速 / 城市 / 泊车", "高速 / 城市 / 泊车", "NOP+ / AEB / AES", "NGP / 失能辅助 / 救援", "高速 / 城市 / 泊车"],
  ["使用限制与安全要求", "摄像头清晰可见，驾驶员持续观察道路", "传感器状态正常，驾驶员随时准备接管", "系统与转向、制动正常，驾驶员随时准备接管", "复杂天气与道路需谨慎，驾驶员随时准备接管", "DMS、转向和制动正常，驾驶员随时准备接管", "传感器状态正常，驾驶员随时准备接管"],
];

export const designImplications = {
  cockpit: [
    ["从任务定义开始", "先明确通勤、长途、多人乘坐、娱乐与休息等核心任务，再决定屏幕、语音和舒适硬件如何分工。"],
    ["让 AI 过程可理解", "界面不仅给出结果，还要让用户知道系统理解了什么、正在执行什么，以及何时需要人工确认。"],
    ["跨设备继续任务", "手机上的导航、音乐、会议和家庭控制应在上车后自然接续，减少重复搜索、登录和设置。"],
  ],
  adas: [
    ["路线匹配组织能力", "视觉、多传感器或世界模型没有孤立答案，传感器方案必须与数据、算法、标定和整车集成能力匹配。"],
    ["解释完整驾驶过程", "用户需要同时看见环境感知、规划轨迹、系统状态和接管边界，而不是只看到一个功能名称。"],
    ["先定义安全处置", "在讨论模型上限前，先明确不可用、降级、退出、受控停车与救援链路，保证能力失效时仍可控。"],
  ],
};

export const monitoringRows = [
  ["双手离盘", "双手均未接触方向盘", "产品确认初值 2 s", "手接触持续 1 s，或方向盘扭矩越过死区 0.5 s"],
  ["视线脱离", "连续离开前路、仪表 / HUD、左右 / 车内后视镜及标定后的导航查看区", "产品确认初值 2 s", "回到任一有效区域并保持 200 ms"],
  ["长闭眼", "持续闭眼或频繁长眨眼伴点头", "闭眼 2 s 判定高风险", "恢复稳定眼部与头姿信号"],
  ["异常头姿", "眼部不可用时，偏航 >45° 或低头 >30°", "持续 2 s", "头姿回到驾驶区域"],
  ["DMS 遮挡 / 不可用", "镜头遮挡、图像质量不足、信号超时或设备 / 固件故障", "2 s 降级，5 s 不可用；信号 >500 ms 视为过期", "清除故障并重新通过系统健康确认"],
];

export const startupFaults = [
  { code: "CAM-01", title: "镜头被遮挡", signal: "人脸或眼部关键点持续缺失，画面亮度或清晰度异常", action: "提示清洁或移除遮挡；关键特征 5 s 未恢复时拒绝开启辅助驾驶。", scope: "可恢复" },
  { code: "CAM-02", title: "强光 / 暗光 / 反射", signal: "逆光、夜间或眼镜反射导致眼部置信度不足", action: "先启用红外补光与头姿降级；仍无法可靠监测时拒绝开启。", scope: "条件降级" },
  { code: "CAM-03", title: "图像或信号超时", signal: "视频流冻结、帧时间戳超过 500 ms 或关键输入中断", action: "按信号缺失处理并记录故障码；禁止用上一帧结果维持可用状态。", scope: "拒绝开启" },
  { code: "CAM-04", title: "设备 / 固件故障", signal: "摄像头自检失败、红外补光失效、算法服务未启动或固件校验失败", action: "提示检修并拒绝开启；行驶中发生则退出组合驾驶辅助。", scope: "硬故障" },
  { code: "SYS-05", title: "跨系统关键链路异常", signal: "AD、HMI、HU、制动、转向、AEB、驻车或关键提醒设备不可用", action: "任一安全关键结果失败或超时，统一判定系统不可用并拒绝激活。", scope: "系统级" },
  { code: "SOS-06", title: "远程服务不可用", signal: "网络、语音或事件上报失败", action: "本地 RMF 能力通过时允许本地功能；明确提示远程救援暂不可用。", scope: "可降级" },
];

export const degradationCases = [
  {
    key: "blocked",
    code: "CAM-01",
    title: "摄像头被遮挡",
    symptom: "人脸或眼部关键点持续缺失，同时出现局部黑屏、模糊或亮度异常；先排除短暂姿态变化。",
    fallback: "临时读取电容方向盘手部接触、方向盘扭矩、踏板操作与车辆动态，只判断“是否存在操作回应”。",
    limitation: "替代信号不能判断视线、闭眼、疲劳或失能。未开启辅助驾驶时拒绝激活；行驶中提示清除遮挡，5 s 未恢复则请求接管并退出。",
    recovery: "画面质量、时间戳与人脸 / 眼部特征连续稳定 2 s，重新通过健康检查后才恢复完整 DMS。",
    status: "短时退化 → 超时退出",
  },
  {
    key: "quality",
    code: "CAM-02",
    title: "强光、暗光或反射",
    symptom: "画面仍有数据，但眼部置信度因逆光、夜间或眼镜反射低于标定阈值。",
    fallback: "优先启用红外补光；眼部不可用时可结合头姿、方向盘触控与驾驶操作判断是否有回应。",
    limitation: "头姿只能辅助判断朝向，不能替代眼睑与精细视线。置信度持续不足时限制辅助驾驶并发出接管请求。",
    recovery: "眼部与头姿置信度连续稳定 2 s，且补光和图像质量自检通过后恢复。",
    status: "条件降级",
  },
  {
    key: "timeout",
    code: "CAM-03",
    title: "视频流或信号超时",
    symptom: "视频冻结、帧时间戳超过 500 ms、信号丢帧或 DMS 结果链路中断。",
    fallback: "立即停止沿用旧帧结果，转为方向盘触控、扭矩、踏板与车辆状态的低置信度回应检测。",
    limitation: "超时期间不再输出正常视线或清醒结论；禁止新激活，行驶中进入接管与受控退出计时。",
    recovery: "数据流重建、时间同步恢复，并连续通过完整性与时延检查后重新启用。",
    status: "立即降级 → 受控退出",
  },
  {
    key: "hardware",
    code: "CAM-04",
    title: "硬件或固件故障",
    symptom: "摄像头自检失败、红外补光失效、算法服务未启动或固件完整性校验失败。",
    fallback: "仅保留方向盘触控、扭矩和踏板等回应检测，用于支持退出过程，不继续维持完整组合驾驶辅助。",
    limitation: "属于硬故障：启动前直接拒绝激活；行驶中立即请求接管，无回应则转入 DCA、RMF 与 SOS。",
    recovery: "完成维修或服务重启，故障码清除并重新执行上电自检；驾驶循环内不得静默恢复。",
    status: "硬故障 → 拒绝或退出",
  },
];

export const gazeZones = [
  { code: "01", title: "前方道路", rule: "以自然前视为中心，初始头部偏航 ±30°、俯仰 −15° 至 +15°。", status: "持续有效" },
  { code: "02", title: "仪表 / HUD", rule: "查看车速、告警和辅助驾驶状态属于驾驶任务相关注视。", status: "有效区域" },
  { code: "03", title: "左右 / 车内后视镜", rule: "按车型分别标定独立区域；正常扫视和并线观察不触发 EOR。", status: "有效区域" },
  { code: "04", title: "中控导航", rule: "允许短时查看导航；需限制连续停留和累计占比，超出标定后才进入脱离计时。", status: "限时有效" },
  { code: "05", title: "非驾驶相关区域", rule: "连续 2 s 不在任何驾驶任务相关区域，才确认视线脱离。", status: "触发 EOR" },
];

export const dmsDriverStateFlow = [
  { code: "D0", title: "正常", note: "手部、视线与清醒状态有效" },
  { code: "D1", title: "单项异常", note: "仅 HOR 或仅 EOR 成立" },
  { code: "D2", title: "组合 / 疲劳", note: "手眼同时脱离、疲劳或疑似睡着" },
  { code: "D3", title: "疑似失能", note: "多类证据成立且强提醒无响应" },
  { code: "D4", title: "DCA / RMF", note: "稳定减速、安全停车并并行 SOS" },
];

export const dmsSystemStateFlow = [
  { code: "S0", title: "可用", note: "DMS、AD、HMI 与执行链路通过检查" },
  { code: "S1", title: "部分降级", note: "眼部或远程能力受限，替代信号仅作辅助" },
  { code: "S2", title: "不可用", note: "遮挡、超时、硬件或关键链路故障" },
  { code: "S3", title: "拒绝 / 退出", note: "启动前拒绝激活，行驶中受控退出" },
  { code: "S4", title: "验证恢复", note: "健康检查通过后才重新进入可用态" },
];

export const dmsMetricGroups = [
  {
    code: "01",
    title: "安全结果",
    summary: "衡量系统是否真正减少风险，以及车辆能否完成最小风险处置。",
    metrics: [
      ["高风险事件率", "次 / 1 亿公里", "按车型、软件版本、道路类型与辅助驾驶状态分层比较"],
      ["RMF 安全停车成功率", "成功事件 / RMF 事件", "完成减速、选区、停车、驻车与双闪才计为成功"],
      ["DCA / RMF 后险情率", "次 / 处置事件", "记录进入车辆介入后仍发生的碰撞、急避险或人工强制接管"],
    ],
  },
  {
    code: "02",
    title: "过程质量",
    summary: "定位识别、提醒、车辆处置和救援链路中具体哪一段需要优化。",
    metrics: [
      ["DMS 可用率", "可用时长 / 应监测时长", "遮挡、暗光、超时与硬件故障分别统计，不合并为单一不可用"],
      ["一级提醒恢复率", "恢复事件 / 一级提醒", "HOR 与 EOR 分开计算，并记录恢复用时分布"],
      ["端到端告警时延", "P50 / P95 / P99", "从状态成立到 HMI、提示音与 TTS 实际输出"],
      ["SOS 首次建联成功率", "成功请求 / 有网请求", "同时记录建联耗时、重试次数与失败原因"],
    ],
  },
  {
    code: "03",
    title: "体验与数据约束",
    summary: "控制误报、重复提醒、数据成本和座舱隐私，避免安全能力制造新的干扰。",
    metrics: [
      ["无效提醒频次", "次 / 100 小时", "后视镜观察、短时查看导航与正常扫视单列复核"],
      ["重复提醒率", "重复周期 / 异常事件", "检查状态抖动、解除过早和同一事件重复播报"],
      ["单车上传量", "MB / 车·日", "安全事件全量上报，常规监测按策略抽样"],
      ["敏感原始数据上传占比", "%", "默认端侧特征化；原始图像和语音仅在授权场景使用"],
    ],
  },
];

export const dmsTrackingEvents = [
  {
    id: "dms_monitor_availability_changed",
    title: "监测可用性变化",
    trigger: "DMS 在可用、部分降级与不可用之间切换时仅上报一次。",
    fields: "from_state、to_state、reason_code、sensor_health、software_version、vehicle_speed、timestamp",
    policy: "故障与恢复全量实时上报；相同原因连续抖动合并为一个事件周期。",
    privacy: "不上传座舱原始图像；仅上传健康结果、原因码与质量评分。",
    acceptance: "与健康状态源使用统一时钟；时序误差目标由系统工程在信号表中冻结。",
  },
  {
    id: "dms_driver_state_changed",
    title: "驾驶员状态变化",
    trigger: "驾驶员状态完成确认，或从异常状态恢复时上报。",
    fields: "from_state、to_state、evidence_set、confidence、gaze_region、hands_state、recovery_reason、timestamp",
    policy: "异常转移全量；正常状态只记录进入与恢复，不持续刷点。",
    privacy: "以状态、置信度和区域编码代替人脸、眼部原始数据。",
    acceptance: "事件状态与车端决策状态一致，并可还原同一异常周期的开始、升级和解除。",
  },
  {
    id: "dms_warning_triggered",
    title: "分级提醒触发",
    trigger: "HOR、EOR、组合提醒、DCA、RMF 或 SOS 首次展示及等级升级时上报。",
    fields: "warning_type、warning_level、source_state、hmi_content_id、sound_id、tts_id、haptic_id、timestamp",
    policy: "每次等级变化上报；重复播放只累计 repeat_count。",
    privacy: "不包含录音，仅记录声音与 TTS 资源 ID。",
    acceptance: "HMI、声音、TTS 与触觉均能通过同一 event_id 对齐回放。",
  },
  {
    id: "dms_driver_recovered",
    title: "驾驶员恢复响应",
    trigger: "握盘、视线回归或合理转向 / 踏板操作满足对应解除条件时上报。",
    fields: "recovery_action、source_warning、response_latency、hands_duration、gaze_duration、valid_operation、timestamp",
    policy: "一个异常周期只确认一次有效恢复；轻触、瞬时扫视不计入。",
    privacy: "仅保留动作类型、持续时间和时延。",
    acceptance: "恢复事件必须引用原 warning_event_id，支持计算分等级恢复率。",
  },
  {
    id: "rmf_lifecycle_changed",
    title: "RMF 生命周期",
    trigger: "DCA、RMF 启动、目标选择、减速、停车、驻车及失败阶段变化时上报。",
    fields: "rmf_stage、road_type、target_type、speed、deceleration、lane_state、parking_result、failure_reason、timestamp",
    policy: "关键状态变化实时全量上报；高频车辆信号按安全事件窗口采样。",
    privacy: "位置仅保留安全处置与救援所需精度，并执行访问审计。",
    acceptance: "一次 RMF 使用同一 trace_id，可按时间顺序完整还原车端处置。",
  },
  {
    id: "sos_connection_result",
    title: "SOS 建联结果",
    trigger: "创建请求、首次建联、重试、坐席受理、救援转派与结束时上报。",
    fields: "network_state、attempt_no、connection_latency、operator_result、rescue_result、end_reason、timestamp",
    policy: "全量实时上报；网络失败时本地缓存，恢复后补传。",
    privacy: "通话内容不进入产品分析事件；坐席访问与导出操作单独审计。",
    acceptance: "远程失败不能改变 RMF trace 状态，且补传后不产生重复工单。",
  },
];

export const dmsPriorityGroups = [
  {
    level: "MUST",
    title: "量产安全基线",
    rule: "法规、安全或闭环成立的前置条件，缺失即不能发布。",
    items: ["启动健康检查与拒绝激活", "驾驶员 / 系统双状态输出", "HOR、EOR、DCA 与 RMF 闭环", "事件回放与最小必要审计"],
  },
  {
    level: "SHOULD",
    title: "体验与救援增强",
    rule: "显著降低误报或提高处置成功率，优先进入同一量产版本。",
    items: ["后视镜、HUD 与导航注视区标定", "SOS 多链路重试与救援工单", "分光照与佩戴条件的置信度标定"],
  },
  {
    level: "COULD",
    title: "规模化运营能力",
    rule: "不阻断首发，在安全基线稳定后按数据收益追加。",
    items: ["车型与驾驶员差异化阈值", "告警策略 A/B 与人因实验平台", "自动生成安全事件复盘摘要"],
  },
];

export const dmsDeliveryStages = [
  { gate: "G0", title: "范围与信号冻结", owners: "产品 / DMS / AD / HMI / 整车 / SOS", exit: "状态字典、唯一阈值表、信号接口与事件 ID 评审通过" },
  { gate: "G1", title: "算法与交互联调", owners: "DMS / HMI / HU", exit: "状态确认、误报抑制、提示资源与恢复逻辑可回放" },
  { gate: "G2", title: "车端安全集成", owners: "AD / 整车 / 功能安全", exit: "DCA、RMF、制动、转向、双闪与驻车闭环可执行" },
  { gate: "G3", title: "SIL / HIL 验证", owners: "测试 / 系统 / 各开发域", exit: "信号超时、模块故障、网络中断和边界场景覆盖" },
  { gate: "G4", title: "封闭道路与人因", owners: "测试 / 人因 / 安全", exit: "提醒可理解、误报可接受、RMF 与 SOS 指标达到发布门槛" },
  { gate: "G5", title: "灰度与复盘", owners: "产品 / 数据 / 质量 / 售后", exit: "按车型和版本监控指标，异常可召回、可回放、可回滚" },
];

export const competitorRows = [
  ["Tesla", "逐级提醒；持续无响应后受控停车", "当前行程限制再次开启辅助驾驶", "公开策略强调车端处置"],
  ["问界 M9（2026）", "高速 / 快速路优先靠边；城市条件不足时车道内停车", "停车、解锁并发起 SOS", "受道路与安全区域条件约束"],
  ["小鹏 GX", "脉冲制动唤醒，向右变道并驶入安全区域", "停车、SOS、解锁并联系救援", "失能辅助依赖整车与通信冗余"],
  ["第二代小米 SU7", "公开手册覆盖疲劳与分心提醒", "文档未公开失能自动停车与 SOS 闭环", "不能据此推断未公开能力"],
];

export const scenarios = {
  hands: {
    label: "手部离盘",
    note: "UN R171 要求持续手部脱离 5 s 发出 HOR；持续确认驾驶员视线有效时，允许延后最多 5 s。本 PRD 在该条件下取 8 s，并在继续离盘 8 s 后升级二级。",
    points: [[0, "监测"], [2, "离盘确认"], [8, "一级提醒"], [16, "二级提醒"]],
  },
  gaze: {
    label: "视线脱离",
    note: "2 s 为产品异常确认初值，3 s 触发一级 EOR；UN R171 要求车速大于 10 km/h 时持续视觉脱离最迟 5 s 提醒。继续 3 s 升级二级，视线回归确认时间为 200 ms。",
    points: [[0, "监测"], [2, "脱离确认"], [3, "一级提醒"], [6, "二级提醒"]],
  },
  both: {
    label: "手眼同时脱离",
    note: "原始异常持续 3 s 后直接进入二级提醒，以一条合并信息呈现，避免重复告警造成认知负担。",
    points: [[0, "监测"], [3, "二级提醒"], [8, "DCA"], [13, "RMF / SOS"]],
  },
  fatigue: {
    label: "疲劳",
    note: "长闭眼或频繁长眨眼伴点头达到高风险后，从二级提醒起步；多信号持续且驾驶员无响应时进入 DCA。",
    points: [[0, "监测"], [2, "高风险确认"], [2.2, "二级提醒"], [5.2, "DCA"], [10.2, "RMF / SOS"]],
  },
  sleep: {
    label: "疑似睡着",
    note: "长闭眼、异常头姿、无有效操作三类证据中至少满足两类，且二级提醒后 3 s 无响应，则进入 DCA；DCA 目标 5 s、最迟 10 s 转 RMF。",
    points: [[0, "证据融合"], [2, "二级提醒"], [5, "DCA"], [10, "RMF / SOS"]],
  },
  incapacity: {
    label: "疑似失能",
    note: "疑似失能优先级最高。车端启动稳定减速和安全停车，远程救援在同一事件中并行发起；远程连接失败不阻断车端 RMF。",
    points: [[0, "疑似失能"], [0.2, "DCA"], [5, "RMF 减速"], [5, "SOS 并行"], [12, "安全停车"]],
  },
};

export const checks = [
  ["DMS", "驾驶员在位、安全带、相机、红外与算法", "失败则拒绝开启"],
  ["AD", "车道、制动、转向、AEB、双闪与驻车", "失败则拒绝或退出"],
  ["HMI", "策略、文案、优先级与升级链路已加载", "失败则拒绝开启"],
  ["HU", "仪表、主机、扬声器与振动装置", "关键链路失败则拒绝"],
  ["SOS", "网络、语音与事件上报状态", "远程不可用时本地功能仍可运行"],
];

export const driverStates = [
  { key: "normal", index: "01", title: "正常 / 已恢复", level: "返回持续监测", trigger: "手部与视线均有效，未达到疲劳、睡着或失能条件，且关键输入可用。", recovery: "异常恢复需有效握盘连续 2 s、视线回归至少 200 ms；三级还需合理转向或踏板操作。" },
  { key: "hands", index: "02", title: "仅手部离盘", level: "HOR 链路", trigger: "双手均不满足触碰、握持或有效转向扭矩条件持续 2 s，视线仍有效。", recovery: "有效握盘连续 1 s 后解除；单次轻触不视为恢复。" },
  { key: "gaze", index: "03", title: "仅视线脱离", level: "EOR 链路", trigger: "视线连续离开前路、仪表 / HUD、后视镜与标定后的导航查看区 2 s，手部仍有效；正常扫视后视镜和短时查看导航不触发。", recovery: "视线回到任一有效区域至少 200 ms 后解除。" },
  { key: "both", index: "04", title: "手眼同时脱离", level: "组合提醒", trigger: "手部离盘与视线脱离在同一时间段同时成立，只输出一套组合提醒。", recovery: "两项都恢复才回到正常；只恢复一项时转入仍未恢复的单项状态。" },
  { key: "fatigue", index: "05", title: "疲劳 / 疑似睡着", level: "从二级开始", trigger: "频繁长眨眼、打哈欠或连续点头用于判断疲劳；闭眼连续 2 s 或长闭眼伴头部下垂判为疑似睡着。", recovery: "睁眼、视线回归并出现有效操作后解除。" },
  { key: "incapacity", index: "06", title: "疑似失能", level: "跳级进入 DCA", trigger: "长闭眼或异常头姿、无有效操作、对二级强提醒 3 s 无回应三类中至少两类成立。", recovery: "不诊断具体疾病；直接进入三级 DCA，并按时限启动 RMF 与 SOS。" },
  { key: "unavailable", index: "07", title: "监测不可用", level: "独立故障链", trigger: "镜头遮挡、强光 / 暗光导致置信度不足、视频流超时，或摄像头 / 红外 / 算法 / 固件自检失败，均需输出具体故障原因。", recovery: "不能把“看不清”当作驾驶员正常；清除故障后需重新通过系统健康确认。" },
];

export const escalationRows = [
  ["HOR 一级", "产品目标：>80 km/h 第 3 s，其他第 5 s；持续确认视线有效时可取第 8 s", "两声短音；请握住方向盘", "UN R171：首次 HOR 原则上不晚于 5 s；仅视线有效时可延后，最多再延后 5 s"],
  ["EOR 一级", "产品目标第 3 s；法规校核上限为持续视觉脱离第 5 s", "两声短音；请注视前方", "UN R171：首次 EOR 后继续脱离，最迟 3 s 升级；回归 200 ms 后解除"],
  ["手眼组合", "原始异常持续第 3 s", "只播放一套当前最高等级提示；请握住方向盘并注视前方", "不分别播放 HOR 与 EOR"],
  ["二级强提醒", "单项持续或疲劳 / 疑似睡着", "三次强音、振动两次；请立即接管车辆", "无回应约每 2 s 重复；3～5 s 进入 DCA"],
  ["DCA", "EOR 升级后无回应 3～5 s；高置信失能允许跳级", "三连急促告警与连续触觉；车辆即将减速", "UN R171：EOR 升级后最迟 5 s 出现 DCA；首次升级请求或告警后最迟 10 s 启动失能处置"],
  ["RMF + SOS", "DCA 后持续无回应", "持续强警示并播报减速、寻找安全停车位置", "车端处置与远程建联并行，远程失败不阻断车端"],
];

export const ttsRows = [
  ["HOR 一级", "两声短音：120 ms / 声，间隔 120 ms", "请握住方向盘", "同一事件一次；有效操作后解除"],
  ["EOR 一级", "两声短音", "请注视前方", "一次；视线回归 200 ms 后解除"],
  ["手眼组合", "当前最高等级的一套提示音", "请握住方向盘并注视前方", "不分别播 HOR 与 EOR"],
  ["二级强提醒", "三次强音：350 ms / 次，间隔 200 ms；振动两次", "请立即接管车辆", "约 2 s 一周期"],
  ["DCA", "高频三连短促后接低频三连短促；叠加连续触觉", "请立即接管车辆，车辆即将减速", "最多每 5 s 重播"],
  ["RMF 启动", "持续强警示音", "驾驶员长时间未响应，车辆正在减速并寻找安全停车位置", "状态变化时播报"],
  ["安全停车", "停止强警示，保留低强度状态音", "车辆已安全停车，正在联系紧急救援", "停车后一次"],
  ["SOS 接通", "一次确认音", "紧急救援已接通", "操作员讲话时 TTS 停止"],
  ["救援受理", "一次确认音", "救援已受理，请保持通话", "无可靠数据时不播报预计时间"],
];

export const hmiStates = [
  { id: "hor-1", code: "HOR", level: "一级", title: "请握住方向盘", detail: "检测到双手离盘", timing: "黄色小卡片 · 两声短音 · 不振动", image: "/assets/dms/hmi/level-1@2x.png", tone: 1, icon: "steering", theme: "level-one" },
  { id: "hor-2", code: "HOR", level: "二级", title: "请立即接管车辆", detail: "双手离盘持续，升级强提醒", timing: "橙红固定卡片 · 三次强音 · 两次触觉", image: "/assets/dms/hmi/level-2@2x.png", tone: 2, icon: "steering", theme: "level-two" },
  { id: "eor-1", code: "EOR", level: "一级", title: "请注视前方", detail: "视线离开驾驶任务相关区域", timing: "黄色小卡片 · 两声短音 · 不振动", image: "/assets/dms/hmi/level-1@2x.png", tone: 1, icon: "eye", theme: "level-one" },
  { id: "eor-2", code: "EOR", level: "二级", title: "请立即接管车辆", detail: "视线持续脱离", timing: "橙红固定卡片 · 三次强音 · 两次触觉", image: "/assets/dms/hmi/level-2@2x.png", tone: 2, icon: "eye", theme: "level-two" },
  { id: "both-2", code: "HOR × EOR", level: "二级", title: "请握住方向盘并注视前方", detail: "手眼同时脱离，只输出一套组合提醒", timing: "沿用当前最高等级 · 避免重复播报", image: "/assets/dms/hmi/level-2@2x.png", tone: 2, icon: "both", theme: "level-two" },
  { id: "dca-3", code: "DCA", level: "三级", title: "请立即接管车辆", detail: "车辆即将减速", timing: "持续红色卡片 · 三连急促告警 · 连续触觉", image: "/assets/dms/hmi/level-3@2x.png", tone: 3, icon: "warning", theme: "level-three" },
  { id: "rmf-3", code: "RMF", level: "安全介入", title: "车辆正在减速", detail: "正在寻找安全停车位置", timing: "持续强警示 · 状态变化时播报", image: "/assets/dms/hmi/level-3@2x.png", tone: 3, icon: "car", theme: "level-three" },
  { id: "sos", code: "SOS", level: "远程救援", title: "正在连接远程救援坐席", detail: "车端 RMF 继续执行", timing: "一次确认音 · 连接失败保持重试", image: "/assets/dms/hmi/level-3@2x.png", tone: 2, icon: "sos", theme: "sos" },
];

export const systemLayers = [
  { index: "01", title: "驾驶员感知", items: ["红外摄像头与红外补光", "面部、眼睑、视线与头姿", "方向盘触碰 / 握持与转向扭矩", "踏板、安全带与座椅在位"] },
  { index: "02", title: "道路与定位", items: ["前视与环视摄像头", "毫米波雷达、车速、GNSS 与 IMU", "导航、车道、障碍物与周边车辆", "高速 / 城市 / 乡村安全停车区域"] },
  { index: "03", title: "计算与执行", items: ["DMS 计算单元识别驾驶状态", "ADAS 域控规划轨迹与停车", "安全 MCU 监控关键状态", "EPS、制动、动力、双闪与驻车执行"] },
  { index: "04", title: "HMI 与通信", items: ["仪表、中控、扬声器与振动器", "T-Box、4G / 5G 与车辆网关", "麦克风、扬声器与 HSM", "校验不足时仅允许通话与救援协调"] },
];

export const qualityRules = [
  ["本地安全", "远程平台断网或故障时，车辆仍独立完成 RMF 与停车；远程协助不得暂停、关闭或覆盖 RMF。"],
  ["故障与降级", "摄像头遮挡、信号丢失或关键设备故障时，按影响拒绝启用、限制功能或退出辅助驾驶。"],
  ["响应与同步", "DMS、HMI、HU、AD 与 SOS 使用统一时间，整体响应不得突破最迟触发时限。"],
  ["隐私保护", "座舱图像和语音仅在车端处理，只上传处置事件所需最少信息；查看、导出与删除均留痕。"],
  ["事件回放", "记录驾驶员状态、提醒、车辆控制、远程通话、操作指令与救援结果，支持完整回放。"],
  ["升级兼容", "统一信号名、状态、超时和故障码；任一模块升级后重新验证完整链路。"],
];

export const acceptanceRows = [
  ["AT-01 启用条件", "断开安全带、DMS、AEB、记录和关键提醒设备", "每项失败均拒绝启用或明确降级，并提示具体原因"],
  ["AT-02 手部离盘", "注入握持、扭矩并完成离盘 / 重新握盘", "HOR 与升级不超时；有效操作后解除"],
  ["AT-03 视线脱离", "覆盖前视、仪表、后视镜、中控、夜间和眼镜", "有效区域不误报；EOR、升级和 DCA 符合时限"],
  ["AT-04 组合 / 失能", "模拟手眼脱离、长闭眼、头部下垂和无操作", "组合提示不重叠；高置信疑似失能能够跳级"],
  ["AT-05 RMF", "覆盖高速、城市、乡村和有 / 无安全区", "停车策略正确；断网不中断；不继续原行程"],
  ["AT-06 SOS / 回放", "模拟连接失败、救援受理并导出事件", "工单不重复，权限正确，事件可完整回放"],
];

export const remotePermissions = [
  ["车内语音通话、查看必要车辆与道路信息、联系救援", "允许"],
  ["引导车辆前往最近安全区域", "满足身份、网络、道路和执行器校验后允许"],
  ["继续驾驶员原定行程、关闭车端 RMF", "禁止"],
  ["身份或网络校验失败后继续控制", "禁止，仅允许通话和救援"],
];

export const eventFields = [
  ["驾驶员状态", "手部、视线、眼睑、头部姿态、有效操作、置信度与故障原因"],
  ["交互记录", "提醒等级、卡片文案、提示音 ID、TTS 文案、振动与开始 / 结束时间"],
  ["车辆处置", "车速、挡位、位置、道路类型、RMF 目标、轨迹、减速度、双闪和停车"],
  ["远程救援", "连接、通话、操作员访问、评估结论、紧急联系人、救援受理和结束原因"],
];

export const appendix = [
  { title: "初始阈值与状态优先级", body: "辅助驾驶开启且车速大于 10 km/h 后进入监测。2 s 是产品侧异常确认初值，不是法规提醒上限。视线脱离在第 3 s 触发一级 EOR，且不晚于 UN R171 规定的第 5 s；手部离盘默认第 5 s 触发 HOR，只有持续确认视线有效时才采用第 8 s，80 km/h 以上前移至第 3 s。状态优先级为：疑似失能 > 疲劳/疑似睡着 > 手眼同时脱离 > 单一脱离 > 正常。监测不可用作为独立故障状态处理。" },
  { title: "测试与验收", body: "P0 安全缺陷为 0；高严重度误触发不高于 1 次/1000 万公里，漏触发不高于 2 次/1000 万公里；受控场地 RMF 安全停车成功率不低于 99.9%；有网络条件下 SOS 成功率不低于 99.5%。人因测试覆盖年龄、身高、眼镜、姿态、光照与噪声。" },
  { title: "远程权限与事件字段", body: "车端上报事件类型、最小必要车辆状态、DMS 结论、告警阶段、DCA/RMF 状态、网络状态与时间戳。远程坐席可评估、联系紧急联系人并发起救援；远程链路不得解除或中断本地安全处置。" },
  { title: "TTS 与 HMI 矩阵", body: "一级为黄色小卡片，可使用一次性双短音；二级为橙红固定卡片，三次增强提示音并配合两次方向盘或座椅振动；三级为持续红色卡片和连续触觉提醒。声音先于 TTS 约 200–300 ms，导航播报暂停、媒体音量降低。" },
  { title: "法规与工程约束", body: "系统以本地安全闭环为前提，支持离线运行、故障降级、统一时钟、最小化数据上传和可审计日志。图像与音频优先端侧处理，远程仅获取完成安全评估和救援所需的最小信息。" },
];

export const chapterGroups = [
  { title: "六车型对标", links: [["benchmark", "对标总览"], ["vehicle-detail", "单车型详情"], ["comparison", "座舱与辅助驾驶横向对比"], ["conclusion", "综合结论"]] },
  { title: "DMS PRD", links: [["dms", "PRD 总览"], ["dms-background", "需求背景与合规"], ["dms-checks", "启动前检查"], ["dms-degradation", "异常边界与退化机制"], ["dms-state-model", "驾驶员与系统状态机"], ["dms-monitoring", "持续监测与状态判断"], ["dms-timeline", "分级提醒时间轴"], ["dms-hmi", "HMI 交互"], ["dms-rmf", "车辆处置与远程救援"], ["dms-architecture", "硬件与系统架构"], ["dms-measurement", "指标与埋点闭环"], ["dms-delivery", "优先级与交付路线"], ["dms-competitors", "DMS 专项竞品"], ["dms-appendix", "测试与附录"]] },
  { title: "机器人能力与产品对标", links: [["robot-benchmark", "对标总览"], ["robot-framework", "大模型、运动控制与机械结构"], ["robot-company", "四家公司详情"], ["robot-brain-control", "三层能力分析"], ["robot-morphology", "形态与作业场景"], ["robot-comparison", "横向对比"], ["robot-conclusion", "综合结论"]] },
];
